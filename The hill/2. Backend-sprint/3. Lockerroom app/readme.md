# What to do ? 
Create an application that is going to let members of a sport's club interract

1. connecter la database
2. get /
3. get /users 
3. get /lobbies
4. post new user & new profile
5. login as user => Verification of password through hash password

6. créer un lobby
7. ajouter des utilisateurs dans un lobby
8. supprimer des utilisateurs dans un lobby 
9. poster un message dans un lobby 


## What to use ?
* Express
* Node.js
* Postgresql
* Bcrypt
* JWT

## Organisation of folders
  app.js
  package.json
  /node_modules
  /public
  /src
    /api
      /auth
        login.js
        register.js
      index.js
    /db
      index.js
    /middleware
      verifyToken.js
  /test