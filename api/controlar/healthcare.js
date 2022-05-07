//health_care_table`(`health_care_id`, `type`, `name`, `village_id`, `photo`, `phone`, `details`)
const db = require('../dbconnection')

const addHealthCareController = (req, res)=>{
        // health_care_table`(`health_care_id`, `type`, `name`, `village_id`, `photo`, `phone`, `details`)
       var type = req.body.type
       var name = req.body.name
       var village_id = req.body.village_id
       var phone = req.body.phone
       var photo = req.body.imageUrl
       var details = req.body.details

        var query = `INSERT INTO health_care_table ( type, name, village_id, phone, photo, details) 
        VALUES (${db.escape(type)}, ${db.escape(name)},${db.escape(village_id)},${db.escape(phone)},${db.escape(photo)}, ${db.escape(details)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: type+" Added!",
                        id: result.insertId
                })
        })
}

const assignDoctorForHealthcareController = (req, res)=>{
        //`JunctionTableHealthCareAndDoctor`(`id`, `health_care_id`, `doctor_id`, `schedule`) 
        var health_care_id = req.body.health_care_id
        var doctor_id = req.body.doctor_id
        var schedule = req.body.schedule

        var query = `INSERT INTO JunctionTableHealthCareAndDoctor (health_care_id, doctor_id, schedule) 
        VALUES (${db.escape(health_care_id)}, ${db.escape(doctor_id)}, ${db.escape(schedule)})`
        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Doctor Assign Success!",
                        id: result.insertId
                })
        })
}     

const getHealthCareByTypeController = (req, res) =>{
        var type = req.params.type
        var query = `SELECT h.name, h.photo, h.details, h.phone, v.name as address 
        FROM health_care_table h INNER JOIN village_table v ON v.village_id = h.village_id WHERE h.type=${db.escape(type)}`
        
        db.query(query,(error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'All '+type,
                        data: result
                })
        })
}

const getHealthCareByIdController = (req, res) =>{
        var health_care_id = req.params.health_care_id
        var query = `SELECT h.name, h.photo, h.details, h.phone  
        FROM health_care_table h WHERE health_care_id = ${db.escape(health_care_id)}`
        //`JunctionTableHealthCareAndDoctor`(`id`, `health care_id`, `doctor_id`, `schedule`) 
        //name, phone, degree, specialist, photo
        var query2 = `SELECT d.name, d.phone, d.degree, d.specialist, d.photo, j.schedule FROM doctor_table d 
        INNER JOIN JunctionTableHealthCareAndDoctor j 
        ON j.doctor_id = d.doctor_id 
        WHERE j.health_care_id = ${db.escape(health_care_id)}`
        
        db.query(query,(error, result, field)=>{
                if(error) throw error
                db.query(query2, (er, rs, fl)=>{
                        if(er) throw er
                        res.status(201).json({
                                message: 'Healthcare Data',
                                health_care: result[0],
                                doctors: rs
                        })

                })
                
        })
} 

module.exports = {
        addHealthCareController,
        assignDoctorForHealthcareController,
        getHealthCareByTypeController,
        getHealthCareByIdController
}
