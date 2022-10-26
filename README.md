# E-Commerce-Back-End

## Description
This activity was to build the back end for e-commerce. It supplies api routes to Get / Post / Put / Delete data into the database.

## Installtion
In order to use download the files to your environment. Once there install the listed dependencies in the package.json file.

## Usage
You can watch this [walkthrough video](https://drive.google.com/file/d/1sCsuZL_y9Xvh4xRFWwHcwrGCdlJYx6vz/view?usp=sharing) for a detailed video of the expeceted outcome on the routes

In order to use the application you can make fetch request from the client side, directed at the endpoints described by following the index.js files.

'/api/categories'

'/api/products'

'/api/tags'

In order for them to work you will need to activate the server. This by default can be done by running node server.js in the command line while inside the root directory of the repo.

## License
N/A

## Test
In order to test if the application is working, there is a seeds folder that can be used to seed the database. First make sure to create the database described in the schema.sql. Then run
npm run seed. Once the seeds are created you can test the routes using a program like Insomnia or Postman.