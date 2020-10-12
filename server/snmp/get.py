import json


def get(event, context):
    # get IP from the path parameter
    ip = event['pathParameters']['ip']
    # ip = '1.2.3.4'

    body = {
        "sysDescr": ip,
        "input": event
    }

    # create a response
    response = {
        "statusCode": 200,
        "headers": { 
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": True
		},        
        "body": json.dumps(body)
    }
    return response
