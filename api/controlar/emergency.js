const db = require('../dbconnection')

const addEmergencyController = (req, res)=>{
        //emergency_table`(`id`, `type`, `photo`, `phone`, `address`)
       var type = req.body.type
       var photo = req.body.imageUrl
       var phone = req.body.phone
       var address = req.body.address
       

        var query = `INSERT INTO emergency_table ( type, photo, phone, address) 
        VALUES (${db.escape(type)},${db.escape(photo)},${db.escape(phone)},${db.escape(address)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Emergency Service Added!",
                        id: result.insertId
                })
        })
}

const getAllEmergencyController = (req, res) =>{
        var query = `SELECT * FROM emergency_table`
        db.query(query,(error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'All Emergency',
                        data: result
                })
        })
}

module.exports = {
        addEmergencyController,
        getAllEmergencyController
}
