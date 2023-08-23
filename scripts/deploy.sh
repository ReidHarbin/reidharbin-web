#!/bin/bash

S3_BUCKET="reidharbin.com"
BUILD_FOLDER="./build"


aws s3 rm "s3://$S3_BUCKET" --recursive
aws s3 sync "$BUILD_FOLDER" "s3://$S3_BUCKET"

echo "React app deployed to bucket."





