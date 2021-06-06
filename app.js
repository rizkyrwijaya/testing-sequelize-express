var db = require('./models')

const hotel = db.Hotel;
const room = db.Room;
const user = db.User;

// hotel.findAll({
//     where: {id: 1},
//     include: [{model: db.Room}]
// }).then((result) => {
//     console.log(result);
//     console.log("Room Data")
//     result.forEach(element => {
//         element.dataValues.Rooms.forEach(room => {
//             console.log(room);
//         })
//     });
// })

// console.log("GETTING FROM ROOM ==============================")
// room.findOne({
//     where: {id:2},
//     include: [{model: db.Hotel}]
// }).then((result) => {
//     console.log(result)
//     console.log(result.dataValues.Hotel)
 
// })

console.log("GETTING FROM USER ==============================")
user.findOne({
    where: {id:3},
    include: [{model: room}]
}).then((result) => {
    console.log(result);
    console.log(result.dataValues.Rooms);
})

room.findOne({
    where: {id: 1},
    include: [{model: user},{model: hotel}]
}).then((result) => {
    console.log("========DATA FROM ROOM========")
    console.log(result);
})