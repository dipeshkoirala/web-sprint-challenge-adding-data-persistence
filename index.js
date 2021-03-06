// start your server here
// const express=require(`express`)

const server=require("./api/server")

const port=5555||process.env.PORT

server.listen(port,()=>{
    console.log(`Server started on : ${port} `)
})