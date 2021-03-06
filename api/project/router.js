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
.get(async(req,res,next)=>{
//model.fn()

try{
    const project=await Project.getProject()
    res.json("Get endpoint")
    res.status(200).json(project)
}catch(err){
    next(err)

}

})
.post((res,req,next)=>{

console.log("Post endpoint")

try{
(!req.body.project_name||!req.body.project_description||!req.body.project_completed)?
res.status(400).json({msg:"Please provide project_name,project_description and project_completed data"})
:
res.status(200).json("This project is eligible")
const newProject=Project.insert(req.body)
res.status(201).json(newProject)
    
}catch(err){
    next(err)

}
})

module.exports=router