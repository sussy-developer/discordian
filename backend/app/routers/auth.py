from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.user import User
from app.schemas.auth import RegisterRequest, LoginRequest
from app.schemas.user import UserResponse
from app.schemas.token import Token
from app.core.utils import hash_password, verify_password
from app.core.oauth2 import create_access_token, get_current_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register(user_data: RegisterRequest, db: Session = Depends(get_db)):
    # Check wether email already exits
    existing_email = db.execute(
        select(User).where(User.email == user_data.email)
    ).scalar_one_or_none()

    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    # Check whether username already exists
    existing_username = db.execute(
        select(User).where(User.username == user_data.username)
    ).scalar_one_or_none()

    if existing_username:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken",
        )

    hashed_password = hash_password(user_data.password)

    # Create User
    new_user = User(
        email=user_data.email,
        username=user_data.username,
        display_name=user_data.display_name,
        password_hash=hashed_password,
        date_of_birth=user_data.date_of_birth,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@router.post(
    "/login",
    response_model=Token,
)
def login(
    user_data: LoginRequest,
    db: Session = Depends(get_db),
):
    user = db.execute(
        select(User).where(User.email == user_data.email)
    ).scalar_one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password!",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not verify_password(
        user_data.password,
        user.password_hash,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Create JWT access token
    access_token = create_access_token(data={"user_id": user.id})

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }


@router.get(
    "/me",
    response_model=UserResponse,
)
def get_me(
    current_user: User = Depends(get_current_user),
):
    return current_user
