const db = require('../dbconnection')

const addRoute = (req, res)=>{
        // route_table`(`id`, `start_address`, `destination_address`)
       var start_address = req.body.start_address
       var destination_address = req.body.destination_address

        var query = `INSERT INTO route_table ( start_address, destination_address ) 
        VALUES (${db.escape(start_address)},${db.escape(destination_address)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Route Added!",
                        id: result.insertId
                })
        })
}

const getAllRoute = (req, res) =>{
        var query = `SELECT * FROM route_table`
        db.query(query,(error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'All Route',
                        data: result
                })
        })
}

module.exports = {
        addRoute,
        getAllRoute
}
