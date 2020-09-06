 


# Project Introduction
    This project tries to create a full stack app based on the requirements mentioned in the TASKOBJECTIVE.txt file in the root folder.

    Built with React,Express,MongoDB.
    Hosted on a paid AWS EC2 instance.

# Features
    * Modular code.
    * Follows clean code principles using ESLint,prettier and editorconfig.
    * Git hooks with husky.
    * Logging with morgan. And for backend with winston if required.
    * One codebase. 1st principle of 12 factor app.
    * Explicitly declared and isolated dependencies. 2nd principle of 12 factor app.
    * Development and production environments and deployments.
    * Configuration management with environment variables from 3rd principle of 12 factor app.
    * robust against sudden death through forever module. Part of 9th principle of 12 factor app.
    * Continous Integration with TravisCI(to be added more tests).
    * Custom Webpack configuration.

# Installation
* Clone the source code and get inside the directory
git clone https://github.com/madhu-sagar/twitter-toplinks
cd twitter-toplinks

*  Make a copy of the sample.env file found in the root directory. Rename it as .env. Add all the required values as documented there.

*  If developing on local environment, change the values as below NODE_ENV=development
HOST_NAME=localhost

*  Get the twitter key,secret and token from twitter developers website after registering for a developer account.
https://docs.inboundnow.com/guide/create-twitter-application/

*  Install all the dependencies
npm install

*  For developing on local dev environment we need mongodb server with us. See here for detailed tutorial(https://phoenixnap.com/kb/docker-mongodb)

* So fetch a mongodb container and run it(assuming we have root privileges on local machine).
sudo apt install docker 
sudo docker pull mongo
sudo mkdir -p /mongodata
sudo docker run -it -v mongodata:/data/db --name mongodb -d mongo

* Now run the build on the local environment
npm run build-dev

*  For testing in the local environment : 
npm run test


*  For putting it into production. Get a domain or a static IP.
Change NODE_ENV=production in the .env file.
Then run the below script

npm run predeploy && npm run deploy 


# Ideas for further development
* more unit tests, integration test and code coverage.
* all the accessibility requirements met.
* bundle the build and run as a container in a different branch.

