### React frontend. JWT token login. Node with Express backend.

This application uses the server backend to authenticate users that log in with a fake database built within the server files.

In order to use this application, download both applications into the same folder.

1. Install npm and run npm start in the frontend sub-directory location.
2. Install npm and run npm start in the server sub-directory location. (The two folders of this repository.)
3. Make sure the port the frontend is running on is the same port listed on line server/index/34 (the line stating ```origin: 'http://localhost:3001',```)
4. Register a new user, log in with that email and password, and see how the "Website Content" page changes if you are logged in or not (using the JWT token in Node in the server folder).
