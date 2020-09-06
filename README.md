 


# Project Introduction
    This project tries to create a full stack app based on the requirements mentioned in the TASKOBJECTIVE.txt file in the root folder.

    Built with React,Express,MongoDB.
    Hosted on 

# Features
    * Follows Clean code principles using ESLint,prettier and husky.
    * Continous Integration with TravisCI(to be added more tests).
    * Custom Webpack configuration.

# Installation
* git clone https://github.com/madhu-sagar/twitter-toplinks
* cd twitter-toplinks

*  Make a copy of the sample.env file found in the root directory. Rename it as .env. Add all the required values.

*  If developing on local environment, change the values as below NODE_ENV=development
HOST_NAME=localhost

*  Get the twitter key,secret and token from twitter developers website after registering for a developer account.
https://docs.inboundnow.com/guide/create-twitter-application/

*  Install all the dependencies
npm install

*  For developing it local dev environment: 

npm run build-dev

*  For testing in the local environment : 
npm run test


*  For putting it into production. Change NODE_ENV=production
Then run the below script
npm run predeploy && npm run deploy 



