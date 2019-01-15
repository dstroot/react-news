#!/bin/bash

# dev:   ./deploy.sh
# prod:  ./deploy.sh prod
STAGE=${1:-dev}
PROJECT=aws-s3-hosting-$STAGE

# Change the suffix on the bucket to something unique!
BUCKET=$PROJECT-90278

# build website
yarn build

# make a deploy directory to store artifacts
rm -rf aws_deploy
mkdir aws_deploy

# make the deployment bucket in case it doesn't exist
aws s3 mb s3://$BUCKET 

# generate next stage yaml file
aws cloudformation package                   \
    --template-file template.yaml            \
    --output-template-file aws_deploy/output.yaml \
    --s3-bucket $BUCKET                      

# the actual deployment step
aws cloudformation deploy                     \
    --template-file aws_deploy/output.yaml         \
    --stack-name $PROJECT                     \
    --capabilities CAPABILITY_IAM             \
    --parameter-overrides Environment=$STAGE

# aws s3 sync build/ s3://aws-s3-hosting-dev-s3bucket-1f7e0aa8oyt5z