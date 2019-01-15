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

# setup package.json to deploy
echo -e "All done! Now add these lines to your package.json"
echo -e 'file in the "scripts" section:\n'

echo -e '"predeploy": "yarn build",'
echo '"deploy": "aws s3 sync build/ s3://'$BUCKET'"'
