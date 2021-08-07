const { required } = require("joi");

console.log("Test NodeJS in Bush Terminal! :) ");

const a=1;

const Joi = require('joi');

const passwordSchema = Joi.string().min(3).max(10).alphanum();

console.log(passwordSchema.validate('W12345'));
console.log ('Test')
    
 