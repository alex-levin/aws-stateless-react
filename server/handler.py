# https://docs.aws.amazon.com/lambda/latest/dg/lambda-python.html

import json
from datetime import datetime

# To avoid error Object of type datetime is not JSON serializable
def converter(o):
    if isinstance(o, datetime):
        return o.__str__()

def hello(event, context):
    body = {
        "time": f"{datetime.now()} from Python",
        "input": event
    }
    response = {
        "statusCode": 200,
        "headers": { 
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": True
		},        
        "body": json.dumps(body, default = converter)
    }
    return response
