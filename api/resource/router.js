// build your `/api/resources` router here
/* 
- [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

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