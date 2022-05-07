const db = require('../dbconnection')

const addCareerController = (req, res)=>{
        // career_table`(`id`, `name`, `logo`, `url`)
       var name = req.body.name
       var logo = req.body.imageUrl
       var url = req.body.url

        var query = `INSERT INTO career_table ( name, url, logo) 
        VALUES (${db.escape(name)},${db.escape(url)},${db.escape(logo)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Career Material Added!",
                        id: result.insertId
                })
        })
}

const getAllCareerController = (req, res) =>{
        var query = `SELECT * FROM career_table`
        db.query(query,(error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'All Career info',
                        data: result
                })
        })
}

module.exports = {
        addCareerController,
        getAllCareerController
}
