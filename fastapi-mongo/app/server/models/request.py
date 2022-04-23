from typing import Optional

from pydantic import BaseModel, EmailStr, Field

#for mongodb

class RequestSchema(BaseModel):
    zip: str = Field(...)
    canned: int = Field(ge=0, le=10)
    water: int = Field(ge=0, le=10)
    nonperish: int = Field(ge=0, le=10)

    class Config:
        schema_extra = {
            "example": {
                "zip": "77494",
                "canned": 6,
                "water": 5,
                "nonperish": 2,
            }
        }

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }

def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}