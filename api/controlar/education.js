
const db = require('../dbconnection')

const addEducationalInstituteController = (req, res)=>{
        // education_table`(`id`, `name`, `type`, `village_id`, `photo`, `details`) 

       var name = req.body.name
       var type = req.body.type
       var village_id = req.body.village_id
       var photo = req.body.imageUrl
       var details = req.body.details

        var query = `INSERT INTO education_table ( name, type, village_id, photo, details) 
        VALUES (${db.escape(name)},${db.escape(type)}, ${db.escape(village_id)}, ${db.escape(photo)}, ${db.escape(details)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Educational Institute Added!",
                        id: result.insertId
                })
        })
}

const getInstituteByTypeController = (req, res) =>{
        var type = req.params.type
        var query = `SELECT e.name, e.photo, e.type, v.name as villageName ,u.name as unionName 
        FROM education_table e
        INNER JOIN village_table v 
        ON e.village_id = v.village_id 
        INNER JOIN union_table u 
        ON v.union_id = u.union_id 
        WHERE e.type = ${db.escape(type)}`
        db.query(query,(error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'All '+type,
                        data: result
                })
        })
}

module.exports = {
        addEducationalInstituteController,
        getInstituteByTypeController
}
