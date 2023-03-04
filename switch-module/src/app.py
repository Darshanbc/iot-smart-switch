import json
import pymongo

def fetch_devices(event,lambda_context):
    body = {
        "devices": [{
            "deviceId": "switch001",
            "load": "Light 1",
            "status": "ON"
        },
            {
                "deviceId": "switch002",
                "load": "Light 2",
                "status": "OFF"
            },
            {
                "deviceId": "switch002",
                "load": "FAN 1",
                "status": "OFF"
            },
            {
                "deviceId": "switch002",
                "load": "FAN 2",
                "status": "ON"
            },
            {
                "deviceId": "switch002",
                "load": "Geyser",
                "status": "ON"
            }
        ]
    }

    return {
        "statusCode": 200,
        "body": json.dumps(body)
    }


def update_device_status(event,lambda_context):
    return {
        "statusCode": 200,
        "body":json.dumps({})
    }
