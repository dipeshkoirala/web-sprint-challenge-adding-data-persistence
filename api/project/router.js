// build your `/api/projects` router here
/* 


- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`



*/

const express=require("express")
const Project=require("./model")

const router=express.Router()

router.route("/")
.get((req,res)=>{
res.json("Get endpoint")
})
.post((res,req)=>{
console.log("Post endpoint")
})

module.exports=router