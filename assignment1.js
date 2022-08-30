const express = require("express");

console.log("Hi everyone..! , I'm  Tamilselvi J");

const server = express();  // convert body to json(express.json) and keep it in a  body key in request  

server.use(express.json())    // midllevar method

var users = [];

var add=[
   {id:'101',name: 'sankar' , dept: 'angular',location:'chennai'},
   {id:'201',name: 'jai' , dept: 'salesforce' ,location:'chennai'},
   {id:'301',name: 'sunitha' , dept: 'data entry',location:'bangalore' },
   {id:'401',name: 'thaanu' , dept: 'python' ,location:'punjab'},
   {id:'501',name: 'prabha' , dept: 'java',location:'pune' }
]

var emailValidator = (req, res, next) =>  {
     var userdata = req.body;
     if(userdata.email == undefined){
        res.status(400);
        res.send("Invalid request body , Email is mandatory");
     }
     next();
};

server.get("/hello",(req,res)=> {
   res.send("Hello welcomee!!");
});

//PATH PARAM 
server.get("/hello/:name", (req, res) => {
   res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY PARAM
server.get("/hi", (req, res) => {
   res.send("Hello there, glad to meet you " + req.query.name);
});
server.post("/register/users", (req, res) => {
   // console.log(req.body);
   users.push(req.body);
   res.send("user register succesfully")
});
server.put("/update/user", (req, res) => {
   // console.log(req.body);
   users.push(req.body);
   res.send("user register succesfully")
});
server.get("/fetch/user", (req, res) => {

   res.send(users)
});
//delete method
server.delete('/:id', function (req, res) {
   var found = add.find(function (item) {
       return item.id === parseInt(req.params.id);
   });
   if (found) {
       let targetIndex = data.indexOf(found);
       add.splice(targetIndex, 1);
   }
   res.sendStatus(204);
});

server.get("/fetch/user/:id", (req, res) => {
   var id = req.params.id;
   users.forEach(u => {
       if (u.id == id) {
           res.send(u);
       }
})
res.send({});
});

server.use('/', (req, res, next) => {

   var filters = req.query;

   var filteredUsers = add.filter(user => {

     let isValid = true;

     for (key in filters) {

       console.log(key, user[key], filters[key]);

       isValid = isValid && user[key] == filters[key];

     }

     return isValid;

   });

   res.send(filteredUsers);

 });

 server.listen(3000, () => {
   console.log("server running....");
});

