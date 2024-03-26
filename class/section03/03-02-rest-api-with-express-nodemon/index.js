//const express = require('express')
import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
}); // get 방식의 api를 만들겠다. endpoint는 "/"로 하겠다

app.listen(3000); //포트번호
