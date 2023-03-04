import os
import sys

sys.path.insert(0, 'src/pkg')
import pymongo

# Set MongoDB connection options
mongo_uri = os.environ['MONGODB_URI']


def get_connection():
    return pymongo.MongoClient(mongo_uri, serverSelectionTimeoutMS=5000, maxPoolSize=100)
