from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

engine = create_engine(settings.database_url)


try:
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    print("Database Successfully Connected Boss.")
except Exception as e:
    print("Database Connection Failed Boss.")
    print(e)


SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
