/*
creat a repo on github 
name = w03d07
check add gitignor and choose Node
from code copy the repo url

1- open vs
    new terminal 
    next to plus + sign --> chose default profile --> bash
    cd "D:\MERAKI\Materilas\Stage 2"
    git clone http.....
    cd the_file_name
    through vs open the folder or just type in code .


2- initiate a pakage json --> npm init -y
3- install express --> npm i express

      make new file.js (server.js)
      in pakage jason --> 
3- npm i mongoose
3-  in pakage.json
    
    "dev" : "nodemon server.js",
    "start" : "node server.js", if N/A
      *****REMOVE THE ADDITIONAL COMMA AFTER TEST in SCRIPT OF PACKAJ.JASON******


    --> npm start //to start the start 
    --> npm run dev //  to run the live server


    now install the axios 
    make sure you are not running the server
4- --> npm install axios
    --> npm i morgan


5- make commit

6- run and test the server
    npm run dev
    check with post man




copy paste the following:
---------------------------------
const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

and end of page : 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

-----------------------------

open postman : 

type in the follwing , according to port no: 
http://localhost:3000

for get:
just chose get


for post: (creat)
1-chose post from drop down
2-chose body
3-chose raw 
4-chose JSON next to raw (drop down)
type in the obj you want to add as follows
{ "todo": "wash your face" , "isCompleted": true }




*/