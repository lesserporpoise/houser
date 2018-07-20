const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
var cors = require('cors')
const app = express();
const controller = require('./controller')
require('dotenv').config();
massive(process.env.CONNECTION_STRING).then(dbInstance =>{app.set('db',dbInstance)}).catch(err=>console.log(err));

app.use(bodyParser.json());
app.use(cors())

app.get    ("/houses",              controller.getAll)
app.post   ("/houses/add",          controller.create)
app.delete ("/houses/delete/:id",   controller.delete)

app.listen(process.env.SERVER_PORT,()=>
console.log(`Wubstep wubbing on port ${process.env.SERVER_PORT}`))