// Use the `data/migrations` folder to keep your migration(s) as per your knexfile

exports.up=async function (knex){
await knex.schema.createTable("tasks", (table)=>{
        table.increments("task_id")
        table.text("task_description").notNull()
        table.text("task_notes")
        table.boolean("task_completed").defaultTo(false)
        // .defalutTo(false)
       
    })

    await knex.schema.createTable("projects",(table)=>{
        table.increments("project_id")              
        table.text("project_name").notNull()
        table.text("project_description")
        table.boolean("project_completed").defaultTo(false)
        // .references("completed")
        // .inTable("task")
        

    })

    await knex.schema.createTable("resources",(table)=>{
        table.increments("resource_id")              
        table.text("resource_name").notNull().unique()
        table.text("resource_description")
             

    })
    await knex.schema.createTable("project_resources",(table)=>{
        // table.increments("id")              
        table.integer("product_id")
        .references("product_id")
        .inTable("products")
        
        table.integer("resource_id")
        .references("resource_id")
        .inTable("resources")   

        

    })
};

exports.down = async function(knex) {
    knex.schema.dropTableIfExists("tasks")
    knex.schema.dropTableIfExists("project_resources")
    knex.schema.dropTableIfExists("projects")
    knex.schema.dropTableIfExists("resources")
};
