// start your server here
const express=require(`express`)

const server=express()

const port=4444||process.env.PORT

server.listen(port,()=>{
    console.log(`Server started on : ${port} `)
})