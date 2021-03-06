// build your `Project` model here

/* 


- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`



*/
const db=require("../../data/dbConfig")

function getProject(){
    console.log(db("resource"))
    return db("resource as r")
    
}


module.exports={
    getProject,
}
 