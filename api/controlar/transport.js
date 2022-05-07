const db = require('../dbconnection')

const addATransportController = (req, res)=>{
        // `id`, `type`, `name_or_model`, `reg_no`, `phone_number`, `route_id`, `address`, `start_time`, `facility`
        var type = req.body.type
        var name_or_model = req.body.name_or_model
        var reg_no = req.body.reg_no
        var phone_number = req.body.phone_number
        var route_id = req.body.route_id
        var address = req.body.address
        var start_time = req.body.start_time
        var facility = req.body.facility

        var query = `INSERT INTO transport_table ( type, name_or_model, reg_no, phone_number,
                 route_id, address, start_time, facility) 
        VALUES (${db.escape(type)},${db.escape(name_or_model)},${db.escape(reg_no)},
        ${db.escape(phone_number)},${db.escape(route_id)},
        ${db.escape(address)},${db.escape(start_time)},${db.escape(facility)})`

        db.query(query, (error, result, field)=>{
                if(error) throw error
                res.status(201).json({
                        message: "Transport Added!",
                        id: result.insertId
                })
        })
}

const getScheduleTransportController = (req, res)=>{
        // route_table`(`id`, `start_address`, `destination_address`)
        var type = 'sc'
        var query = `SELECT t.name_or_model, t.reg_no, t.phone_number, t.address, t.start_time,
         t.facility, r.start_address as routeStart, r.destination_address as routeDestination 
         FROM transport_table t INNER JOIN route_table r ON t.route_id = r.id WHERE type = ${db.escape(type)}`

        db.query(query, (error, result, field)=>{
                if( error ) throw error
                res.status(201).json({
                        message: 'Transport data for Schedule Car',
                        data: result
                })
        })
}
const getRentTransportController = (req, res)=>{
        // route_table`(`id`, `start_address`, `destination_address`)
        var type = 'rc'
        var query = `SELECT t.name_or_model, t.reg_no, t.phone_number, t.address, t.start_time,
         t.facility
         FROM transport_table t  WHERE type = ${db.escape(type)}`

        db.query(query, (error, result, field)=>{
                if( error ) throw error
                res.status(201).json({
                        message: 'Transport data for Rent A Car Service',
                        data: result
                })
        })

}

const getAmbulanceTransportController = (req, res)=>{
        // route_table`(`id`, `start_address`, `destination_address`)
        var type = 'amb'
        var query = `SELECT t.name_or_model, t.reg_no, t.phone_number, t.address, t.start_time,
         t.facility
         FROM transport_table t  WHERE type = ${db.escape(type)}`

        db.query(query, (error, result, field)=>{
                if( error ) throw error
                res.status(201).json({
                        message: 'Transport data for Ambulance',
                        data: result
                })
        })
}

module.exports = {
        addATransportController,
        getScheduleTransportController,
        getAmbulanceTransportController,
        getRentTransportController
}
