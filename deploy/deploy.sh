#!/bin/bash

# needs to be unique
PROJECT=aws-s3-hosting
BUCKET=$PROJECT-90278

# deployment step using cloudformation
aws cloudformation deploy                     \
    --template-file s3hosting.yaml    \
    --stack-name $PROJECT                     \
    --capabilities CAPABILITY_IAM             \
    --parameter-overrides Name=$BUCKET
    
# build website
yarn build

# upload website files to bucket
aws s3 sync ../build/ s3://$BUCKET