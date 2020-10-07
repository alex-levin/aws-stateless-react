cd client
npx create-react-app .

Install AWS cli:
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html

C:\Users\Alex>aws --version
aws-cli/2.0.52 Python/3.7.7 Windows/10 exe/AMD64

alex@Alexs-Mac-mini client % aws --version
aws-cli/2.0.55 Python/3.7.4 Darwin/19.6.0 exe/x86_64

Install serverless:
npm install -g serverless

Access keys
Log into https://aws.amazon.com/console/ as IAM user
Create a new IAM user serverless-framework-user
Note Access Key and Secret Key.

cd ..\server

NodeJS Lambda:
alex@Alexs-Mac-mini server % serverless create --template aws-nodejs

Python Lambda:
alex@Alexs-Mac-mini server % serverless create --template aws-python
Serverless: Generating boilerplate...
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v2.5.0
 -------'

Serverless: Successfully generated boilerplate for template: "aws-python"
Serverless: NOTE: Please update the "service" property in serverless.yml with your service name
alex@Alexs-Mac-mini server % 

Modify handler.js and serverless.yml.

serverless config credentials --provider aws --key xxx --secret ***

Credentials are stored now in ~/.aws/credentials

alex@Alexs-Mac-mini server % serverless deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service lambda-react-hello.zip file to S3 (1.84 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
....................................
Serverless: Stack update finished...
Service Information
service: lambda-react-hello
stage: dev
region: us-east-1
stack: lambda-react-hello-dev
resources: 13
api keys:
  None
endpoints:
  GET - https://qd7w5l6yx0.execute-api.us-east-1.amazonaws.com/dev/react/hello
functions:
  hello: lambda-react-hello-dev-hello
layers:
  None

************************************************************************************************************************Serverless: Announcing Metrics, CI/CD, Secrets and more built into Serverless Framework. Run "serverless login" to activate for free..
************************************************************************************************************************



Go to AWS S3 buckets
A new bucket lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33 is created.

Click on it. Click on the Properties tab. Click Static website hosting. Select Use this bucket to host a website.
Enter index.html in Index document.
Click Save.

alex@Alexs-Mac-mini client % npm run build
alex@Alexs-Mac-mini client % npm run deploy

> client@0.1.0 deploy /Users/alex/aws-lambda-react/client
> aws s3 sync build/ s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33 --acl public-read

upload: build/index.html to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/index.html
upload: build/static/css/main.5f361e03.chunk.css.map to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/css/main.5f361e03.chunk.css.map
upload: build/favicon.ico to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/favicon.ico
upload: build/asset-manifest.json to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/asset-manifest.json
upload: build/static/css/main.5f361e03.chunk.css to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/css/main.5f361e03.chunk.css
upload: build/robots.txt to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/robots.txt
upload: build/precache-manifest.a2b26d491cba908ca4ee5903a00fbaca.js to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/precache-manifest.a2b26d491cba908ca4ee5903a00fbaca.js
upload: build/manifest.json to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/manifest.json
upload: build/service-worker.js to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/service-worker.js
upload: build/logo192.png to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/logo192.png
upload: build/logo512.png to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/logo512.png
upload: build/static/js/2.a380bd73.chunk.js.LICENSE.txt to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/js/2.a380bd73.chunk.js.LICENSE.txt
upload: build/static/js/main.b88cf1be.chunk.js to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/js/main.b88cf1be.chunk.js
upload: build/static/js/runtime-main.09b85ec0.js to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/js/runtime-main.09b85ec0.js
upload: build/static/media/logo.5d5d9eef.svg to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/media/logo.5d5d9eef.svg
upload: build/static/js/main.b88cf1be.chunk.js.map to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/js/main.b88cf1be.chunk.js.map
upload: build/static/js/runtime-main.09b85ec0.js.map to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/js/runtime-main.09b85ec0.js.map
upload: build/static/js/2.a380bd73.chunk.js to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/js/2.a380bd73.chunk.js
upload: build/static/js/2.a380bd73.chunk.js.map to s3://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/static/js/2.a380bd73.chunk.js.map


Click on lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33 bucket > Permissions > Bucket Policy
Replace
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/*",
            "Condition": {
                "Bool": {
                    "aws:SecureTransport": "false"
                }
            }
        }
    ]
}

with
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33/*",
            "Condition": {
                "Bool": {
                    "aws:SecureTransport": "false"
                }
            }
        }
    ]
}

Click on lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33 bucket > Properties > Static website hosting and copy the URL:
http://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33.s3-website-us-east-1.amazonaws.com/

Load this URL in Chrome:

http://lambda-react-hello-dev-serverlessdeploymentbucket-1tbzkeb2c0w33.s3-website-us-east-1.amazonaws.com/










