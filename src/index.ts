import { NextFunction, Request, Response } from "express";
import 'express-async-errors'
import "reflect-metadata";
import './database'
import { AppError } from "./errors/AppError";
import { routers } from "./routers";
const express = require('express');

const app = express();
app.use(express.json());
app.use(routers)


app.use((err:Error, request:Request,response:Response, next:NextFunction) =>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3333,()=>{
    console.log('Server is running')
})