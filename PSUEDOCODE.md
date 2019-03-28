Step 1
Project setup 
yarn - done
yarn add express - done
yarn add server - done 

Step 2
In index.js create and get the server to listen to port 4444 - done

Step 3
Create a new file called server.js - done
Use require to use express in server.js (express is a function that returns server) - done

Step 4
Create a new file called usersRouter.js - done
Use require to use usersRouter in server.js - done
Use built in middleware express.json in server.js - done
Set up Express routers to organise api code - done

Step 5
Start working on endpoints for users
Get all users - done
Get a user by id - done
Get posts by id - done
Post a new user - done
Delete a new user - done
Custom middleware to ensure that the user's name is upper-cased before the request reaches the POST or PUT route handlers. - Done

Step 6
Create a new file called postsRouter.js - Done
Use require to use postsRouter in js - Done
Create routers for post - Done
Use require to import postdb.js - Done

Start working on endpoints for posts
Get all posts - done
Get a post by id - done
Post/insert a new post  - done
Delete a post by id - done
Put/update a post - done

Step 7 
Deploy api to heroku
- Add a “start” script that uses node instead of nodemon to run index.js. - Done
- Make the Port Dynamic
    install dotenv as a production dependency. - Done
    change index.js - Done
    add a .env file to the root folder (next to package.json) with the following content
    PORT=4444 - Done
    It is recommended to add .env to .gitignore to prevent it from being uploaded to GitHub.





