from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from sqlalchemy import delete, select, update
from app.models.user import User
from app.schemas.user import UserResponse, UserUpdate
from app.schemas.auth import PasswordChange
from app.db.database import get_db
from app.core.oauth2 import get_current_user
from app.core.utils import verify_password, hash_password

router = APIRouter(prefix="/users", tags={"Users"})


@router.get("/", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):

    stmt = select(User)

    present_users = db.execute(stmt).scalars().all()

    print(present_users)

    return present_users


@router.patch("/update_details", response_model=UserResponse)
def update_profile(
    user_data: UserUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if user_data.username is not None:
        existing_user = db.execute(
            select(User).where(
                User.username == user_data.username, User.id != current_user.id
            )
        ).scalar_one_or_none()

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username already taken",
            )

        current_user.username = user_data.username

    if user_data.display_name is not None:
        current_user.display_name = user_data.display_name

    if user_data.date_of_birth is not None:
        current_user.date_of_birth = user_data.date_of_birth

    if user_data.avatar_url is not None:
        current_user.avatar_url = user_data.avatar_url

    if user_data.bio is not None:
        current_user.bio = user_data.bio

    if user_data.status is not None:
        current_user.status = user_data.status

    db.commit()
    db.refresh(current_user)

    return current_user


@router.patch("/change_password")
def change_password(
    password_data: PasswordChange,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if not verify_password(password_data.current_password, current_user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Current password is incorrect",
        )

    if len(password_data.new_password) < 8:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="New password must be at least 8 characters",
        )

    current_user.password_hash = hash_password(password_data.new_password)

    db.commit()

    return {"message": "Password changed successfully"}


@router.get("/{username}", response_model=UserResponse)
def get_user_by_username(
    username: str,
    db: Session = Depends(get_db),
):
    user = db.execute(
        select(User).where(User.username == username)
    ).scalar_one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    return user
