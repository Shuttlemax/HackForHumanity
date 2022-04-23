import motor.motor_asyncio
from bson.objectid import ObjectId

MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.requests

request_collection = database.get_collection("requests_collection")

# helpers

def request_helper(request) -> dict:
    return {
        "zip": str(request["zip"]),
        "canned": request["canned"],
        "water": request["water"],
        "nonperish": request["nonperish"],
    }

# Retrieve all requests present in the database
async def retrieve_requests():
    requests = []
    async for request in request_collection.find():
        requests.append(request_helper(request))
    return requests

# Add a new request into to the database
async def add_request(request_data: dict) -> dict:
    request = await request_collection.insert_one(request_data)
    new_request = await request_collection.find_one({"_id": request.inserted_id})
    return request_helper(new_request)