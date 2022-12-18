#!/bin/sh
set -e

tag=$(date -u +"%Y-%m-%d-%H-%M-%S")
remote=gcr.io/knights-of-glory-371921/website:$tag
latest=gcr.io/knights-of-glory-371921/website:latest

yarn build

docker build --platform linux/amd64 --tag $tag .
docker tag $tag $remote
docker tag $tag $latest
docker push $remote
docker push $latest

gcloud config set project knights-of-glory-371921
gcloud run deploy website --image $latest --region us-east1 --platform managed

gcloud beta run revisions list --service website --region us-east1 \
  | grep -wv "yes" \
  | cut -d " " -f 3 \
  | grep -v "^$" \
  | xargs -L 1 gcloud beta run revisions delete --quiet --region us-east1

date
