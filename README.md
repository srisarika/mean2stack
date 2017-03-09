# Mean

This is a MEAN2 project(MongoDB, Express, Angular 2, NodeJS).

Angular 2 seed was generated using angular-cli(rc5)
To build the project 
'ng build' 
To run the project 
node app.js

Continuous Integration is done using Circle CI.
For each git push, the CircleCI runs unit test cases and generates a docker image.
The docker image is pushed to Docker Hub.

To run docker image:
docker login
docker pull bachu/mean2stack
docker compose up -d or  docker run -p 9001:9001 bachu/mean2stack

The project is deployed in AWS.

http://54.174.200.136:9001/#/
