const express = require('express');

const services = require('./services');

const appRoute = express.Router();


appRoute.get('/', async (req, res) => {
   res.send(await services.get());
    console.log("Got a GET request for the homepage");    
 });


appRoute.get('/:id', async (req, res) => {
   res.send(await services.get({_id: req.params.id }));
   console.log("Got a GET request for the homepage");   
});


 appRoute.post('/', async (req, res) => {
   res.send(await services.add(req.body));
    console.log("Got a POST request for the homepage");    
 });


 appRoute.put('/:id', async (req, res) => {
   res.send(await services.update(req.params.id, req.body));
    console.log("Got a PUT request for the homepage");    
 });
 

 appRoute.delete('/:id', async (req, res) => {
   res.send(await services.remove(req.params.id));
    console.log("Got a DELETE request for /del_user");    
 });

 module.exports = appRoute;