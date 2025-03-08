#!/bin/bash

# Configuration
BUCKET_NAME="narendernain.in"
DISTRIBUTION_ID="YOUR_CLOUDFRONT_DISTRIBUTION_ID" # Replace with your CloudFront distribution ID

# Build the application
echo "Building the Next.js application..."
npm run build

# Deploy to S3
echo "Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync .next s3://$BUCKET_NAME/_next/ --delete
aws s3 sync public s3://$BUCKET_NAME/ --delete

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Deployment completed successfully!" 