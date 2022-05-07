const db = require('../dbconnection')

const addDoctorController = (req, res)=>{
        // doctor_table`(`doctor_id`, `name`, `photo`, `phone`, `degree`, `specialist`
       var name = req.body.name
       var phone = req.body.phone
       var degree = req.body.degree
       var specialist = req.body.specialist
       var photo = req.body.imageUrl

        var query = `INSERT INTO doctor_table ( name, phone, degree, specialist, photo) 
        VALUES (${db.escape(name)},${db.escape(phone)},${db.escape(degree)},${db.escape(specialist)}, ${db.escape(photo)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Doctor Added!",
                        id: result.insertId
                })
        })
}

const getAllDoctor = (req, res) =>{
        var query = `SELECT * FROM doctor_table`
        db.query(query,(error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'All Doctor',
                        data: result
                })
        })
}

module.exports = {
        addDoctorController,
        getAllDoctor
}
