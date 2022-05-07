var db = require("../dbconnection");
var imageUp = require('../middelware/imageup')

//controller for add a category
const addUnionController = (req, res, next) => {
 // union_id name photo chairman_id up_id
  var name = req.body.name
  var chairman_id = req.body.chairman_id
  var up_id = req.body.up_id
  var photoUrl = req.body.imageUrl 
  
  var query = `INSERT INTO union_table ( name, chairman_id, up_id, photo )
     VALUES ( ${db.escape(name)} ,${db.escape(chairman_id)},${db.escape(up_id)},${db.escape(photoUrl)})`;
  db.query(query, (error, result, field) => {
    if (error) throw error;
    res.status(201).json({
      message: "Union added succsfully",
      result,
    });
  });
  
};

const getUnionsController = (req, res, next)=>{
  // village_id name ward_no member_id union_id up_id photo
  var query = `SELECT u.union_id, u.name as unionName,  u.photo as unionCoverPhoto, c.name as chairmanName, c.photo as chairmanPhoto, c.mobile 
  FROM union_table u INNER JOIN chairman_table c ON u.chairman_id = c.chairman_id`
  db.query(query, (error, result, field)=>{
    if( error) throw error;
    res.status(201).json(result)
  })
}

const getUnionsByUpIdController = (req, res, next)=>{
  var up_id = req.params.up_id
  var query = `SELECT u.union_id, u.name as unionName,  u.photo as unionCoverPhoto, c.name as chairmanName, c.photo as chairmanPhoto, c.mobile 
  FROM union_table u INNER JOIN chairman_table c ON u.chairman_id = c.chairman_id WHERE u.up_id = ${db.escape(up_id)}`
  db.query(query, (error, result, field)=>{
    if( error) throw error;
    res.status(201).json(result)
  }) 
}

const getUnionByUnionIdController = (req, res, next)=>{
  var union_id = req.params.union_id
  var query = `SELECT u.union_id, u.name as unionName,  u.photo as unionCoverPhoto, c.name as chairmanName, c.photo as chairmanPhoto, c.mobile 
  FROM union_table u INNER JOIN chairman_table c ON u.chairman_id = c.chairman_id WHERE u.union_id = ${db.escape(union_id)}`
  db.query(query, (error, result, field)=>{
    if( error) throw error;
    res.status(201).json(result[0])
  }) 
}

module.exports = {
  addUnionController,
  getUnionsController,
  getUnionByUnionIdController,
  getUnionsByUpIdController
  
};
