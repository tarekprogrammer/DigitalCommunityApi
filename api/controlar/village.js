var db = require("../dbconnection");
var imageUp = require('../middelware/imageup')

//controller for add a category
const addVillageController = (req, res, next) => {
  

  //	village_id name ward_no member_id union_id up_id
  var name = req.body.name
  var ward_no = req.body.ward_no
  var member_id = req.body.member_id
  var union_id = req.body.union_id
  var up_id = req.body.up_id
  var photoUrl = req.body.imageUrl 
  //  var photoUrl = "iul" 

  var query = `INSERT INTO village_table ( name, ward_no, member_id, union_id, up_id, photo )
     VALUES ( ${db.escape(name)} ,${db.escape(ward_no)},${db.escape(member_id)},${db.escape(union_id)},${db.escape(up_id)},${db.escape(photoUrl)})`;
  db.query(query, (error, result, field) => {
    if (error) throw error;
    res.status(201).json({
      message: "Village added succsfully",
      id: result.insertId,
    });
  });
  
};

const getVillagesController = (req, res, next)=>{
  // village_id name ward_no member_id union_id up_id photo
  var query = `SELECT v.village_id, v.name as villageName, v.ward_no, v.photo as villageCoverPhoto, m.name as memberName, m.photo as membersPhoto, m.mobile 
  FROM village_table v INNER JOIN member_table m ON v.member_id = m.member_id`
  db.query(query, (error, result, field)=>{
    if( error) throw error;
    res.status(201).json(result)
  })
}

const getVillagesByUnionIdController = (req, res, next)=>{
  var union_id = req.params.union_id
  var query = `SELECT v.village_id, v.name as villageName, v.ward_no, v.photo as villageCoverPhoto, m.name as memberName, m.photo as membersPhoto, m.mobile 
  FROM village_table v INNER JOIN member_table m ON v.member_id = m.member_id WHERE v.union_id = ${db.escape(union_id)}`
  db.query(query, (error, result, field)=>{
    if( error) throw error;
    res.status(201).json(result)
  }) 
}

const getVillageByVillageIdController = (req, res, next)=>{
  var village_id = req.params.village_id
  var query = `SELECT v.village_id, v.name as villageName, v.ward_no, v.photo as villageCoverPhoto, m.name as memberName, m.photo as membersPhoto, m.mobile 
  FROM village_table v INNER JOIN member_table m ON v.member_id = m.member_id WHERE v.village_id = ${db.escape(village_id)}`
  db.query(query, (error, result, field)=>{
    if( error) throw error;
    res.status(201).json(result[0])
  }) 
}

module.exports = {
  addVillageController,
  getVillagesController,
  getVillagesByUnionIdController,
  getVillageByVillageIdController
  
};
