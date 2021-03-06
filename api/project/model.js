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

const insert = ({ project_name, project_description, project_completed }) => { 

    // INSERT INTO projects (project_name, project_description, project_completed) VALUES ('foo', 'bar',true); 
    
    const newUser = {  project_name, project_description, project_completed } 
    
    db("projects").push(newUser) 
    
    Promise.resolve(newUser) 
    
    } 


module.exports={
    getProject,
    insert,
}
 