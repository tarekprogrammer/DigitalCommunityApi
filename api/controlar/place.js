var db = require('../dbconnection')

//controller for add a place 
// place_id	name	photo	place_details	village_id	
const addPlaceController = (req, res) => {
        var name = req.body.name
        var place_details = req.body.place_details
        var photoUrl = req.body.imageUrl
        var village_id = req.body.village_id

        var query = `INSERT INTO place_table (name, photo, place_details, village_id)
        VALUES (${db.escape(name)}, ${db.escape(photoUrl)}, ${db.escape(place_details)}, ${db.escape(village_id)})`

        db.query(query, (error, result, field) => {
                if(error) throw error
                res.status(201).json({
                        message: 'Place Added Successfully!',
                        id: result.insertId
                })
        })
}

const getAllPlaceController = (req, res) =>{
        // place_id name photo place_details village_id
        var upId = req.params.upId
        var query = `SELECT p.place_id, p.name as placeName, p.photo, v.name as villageName, u.name as unionName
        FROM place_table p INNER JOIN village_table v ON p.village_id = v.village_id INNER JOIN 
        union_table u ON v.union_id = u.union_id`
        
        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'success',
                        data: result
                })
        })
}

const getPlaceByPlaceIdController = (req, res) =>{
        // place_id name photo place_details village_id
        var placeId = req.params.placeId
        var query = `SELECT p.place_id, p.name as placeName, p.photo, p.place_details, v.name as villageName, u.name as unionName
        FROM place_table p INNER JOIN village_table v ON p.village_id = v.village_id INNER JOIN 
        union_table u ON v.union_id = u.union_id`
        
        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: 'success',
                        data: result[0]
                })
        })
}


module.exports = {
        addPlaceController,
        getAllPlaceController,
        getPlaceByPlaceIdController
}

