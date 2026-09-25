from pydantic import BaseModel, EmailStr, Field
from datetime import date

class RegisterRequest(BaseModel):
    email: EmailStr
    username: str = Field(min_length=2, max_length=32)
    display_name: str = Field(min_length=1, max_length=32)
    password: str = Field(min_length=8, max_length=128)
    date_of_birth: date

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class PasswordChange(BaseModel):
    current_password: str
    new_password: str