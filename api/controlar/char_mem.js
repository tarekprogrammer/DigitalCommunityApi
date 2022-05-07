const db = require('../dbconnection')

const addChairmanController = (req, res)=>{
       var name = req.body.name
       var phone = req.body.phone
       var photo = req.body.imageUrl

        var query = `INSERT INTO chairman_table ( name, mobile, photo) 
        VALUES (${db.escape(name)},${db.escape(phone)}, ${db.escape(photo)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Chairman Added!",
                        id: result.insertId
                })
        })
}

const getAllChairman = (req, res) =>{
        var query = `SELECT * FROM chairman_table`
        db.query(query,(error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'All Chairman',
                        data: result
                })
        })
}

const addMemberController = (req, res)=>{
        var name = req.body.name
        var phone = req.body.phone
        var photo = req.body.imageUrl
 
         var query = `INSERT INTO member_table ( name, mobile, photo) 
         VALUES (${db.escape(name)},${db.escape(phone)}, ${db.escape(photo)})`
 
         db.query(query, (error, result, field)=>{
                 if(error) throw error
                 res.status(201).json({
                         message: "Member Added!",
                         id: result.insertId
                 })
         })
 }
 
 const getAllMember = (req, res) =>{
         var query = `SELECT * FROM member_table`
         db.query(query,(error, result, field)=>{
                 if(error) throw error
                 res.status(201).json({
                         message: 'All Member',
                         data: result
                 })
         })
 }

module.exports = {
        addChairmanController,
        getAllChairman,
        addMemberController,
        getAllMember
}
