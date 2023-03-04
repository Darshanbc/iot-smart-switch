import os
import pymongo

# Set MongoDB connection options
mongo_uri = os.environ['MONGO_URI']


def get_connection():
    return pymongo.MongoClient(mongo_uri, serverSelectionTimeoutMS=5000, maxPoolSize=100)
