const db = require("../dbconnection");

const addNewsController = (req, res) => {
  // career_table`(`id`, `name`, `logo`, `url`)
  var name = req.body.name;
  var logo = req.body.imageUrl;
  var url = req.body.url;

  var query = `INSERT INTO newspaper_table ( name, url, logo) 
        VALUES (${db.escape(name)},${db.escape(url)},${db.escape(logo)})`;

  db.query(query, (error, result, field) => {
    if (error) throw error;
    res.status(201).json({
      message: "Newspaper Added!",
      id: result.insertId,
    });
  });
};

const getAllNewsPaperController = (req, res) => {
  var query = `SELECT * FROM newspaper_table`;
  db.query(query, (error, result, field) => {
    if (error) throw error;
    res.status(201).json({
      message: "All Newspaper",
      data: result,
    });
  });
};

module.exports = {
  addNewsController,
  getAllNewsPaperController,
};
