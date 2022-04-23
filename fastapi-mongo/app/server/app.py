from fastapi import FastAPI

from server.routes.request import router as RequestRouter

app = FastAPI()

app.include_router(RequestRouter, tags=["Request"], prefix="/Request")

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}