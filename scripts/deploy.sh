#!/bin/bash

S3_BUCKET="reidharbin.com"
BUILD_FOLDER="./build"

aws s3 sync "$BUILD_FOLDER" "s3://$S3_BUCKET" --acl public-read

echo "React app deployed to bucket."





