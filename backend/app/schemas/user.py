from datetime import date, datetime
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, EmailStr


class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    display_name: str
    date_of_birth: date

    avatar_url: str | None = None
    bio: str | None = None
    status: str | None = None

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class UserUpdate(BaseModel):
    username: str | None = None
    display_name: str | None = None
    date_of_birth: date | None = None
    avatar_url: str | None = None
    bio: str | None = None
    status: str | None = None

