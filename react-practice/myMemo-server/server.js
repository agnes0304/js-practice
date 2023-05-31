const express = require('express');
const bodyParser = require('body-parser');
const routes = require('routes.js');

const app =express();

app.use(bodyParser.json());

app.use((req, res, nex)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

app.use(routes);

app.listen(5000);