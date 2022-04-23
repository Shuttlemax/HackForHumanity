from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database import (
    add_request,
    retrieve_requests,
)
from server.models.request import (
    ErrorResponseModel,
    ResponseModel,
    RequestSchema,
)

router = APIRouter()

@router.post("/", response_description="request data added into the database") #/something
async def add_request_data(request: RequestSchema = Body(...)):
    request = jsonable_encoder(request)
    new_request = await add_request(request)
    return ResponseModel(new_request, "request added successfully.")

@router.get("/", response_description="requests retrieved")
async def get_requests():
    requests = await retrieve_requests()
    if requests:
        return ResponseModel(requests, "requests data retrieved successfully")
    return ResponseModel(requests, "Empty list returned")

#helpers

#requests is a list of dictionaries
# def total_data(requests: list) -> dict:
#     #dictionary of zips that holds a dictionary of the items
#     totals = {}
#     for request in requests: #request is a dict
#         zip = request["zip"]

#         if totals.has_key("zip"):
#             for key in request.keys():
#                 totals["zip"]





