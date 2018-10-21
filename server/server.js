var nodemailer = require('nodemailer');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//set server directory path
app.use(express.static('server'));

//middleware
app.use(bodyParser.json());

//Add Headers
app.use(function (req, res, next) {
    //Website you wish to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Requests method you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //Requests header you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    //Set to true if you need the website to include cookies in the requests sent to the API(e.g session)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    //pass to the next layer of middleware
    next();
});

//Post: receive order info

// { 
//     order:
//     { 
//         email: 'rongdili@buffalo.edu',
//         firstName: 'Rongdi',
//         lastName: 'Lin',
//         phoneNumber: '123',
//         dob: '2018-10-02T23:11:57.726Z',
//         driverLicense: '123',
//         agreement: true 
//     },
//    orderTime:
//     { 
//         pickup: 'seattle',
//         pickupDate: '2018-10-01T23:11:43.429Z',
//         pickupTime: '8:30',
//         dropoff: 'lynwood',
//         dropoffDate: '2018-10-02T23:11:45.095Z',
//         dropoffTime: '9:00' 
//     } 
// }
app.post('/sendemail', function (req, res) {
    console.log("welcome in server", req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jgrentalcar@gmail.com',
            pass: '!@liujia1992'
        }
    });
    const mailOptions = {
        from: 'jgrentalcar@gmail.com', // sender address
        to: 'jgrentalcar@gmail.com', // list of receivers
        subject: `New Order from ${req.body.order.firstName} ${req.body.order.lastName}`, // Subject line
        html: generateMessage(req.body)// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
    res.send("send successful");
});

app.listen(4000, function () {
    console.log("Server connection @localhost:4000");
});


function generateMessage(msgObj) {
    return `
        Pick up: ${msgObj.orderTime.pickup}
        Pick up date: ${msgObj.orderTime.pickupDate}
        Pick up time: ${msgObj.orderTime.pickupTime}


        Drop off: ${msgObj.orderTime.dropoff}
        Drop date: ${msgObj.orderTime.dropoffDate}
        Drop time: ${msgObj.orderTime.dropoffTime}


        Email: ${msgObj.order.email}\n
        First Name: ${msgObj.order.firstName}\n
        Last Name: ${msgObj.order.lastName}\n
        
        Phone: ${msgObj.order.phoneNumber}\n
        Date of Birth: ${msgObj.order.dob}\n
        Driver License: ${msgObj.order.driverLicense}\n
        Airline Number: ${msgObj.order.airlineNumber}\n
        Residence: ${msgObj.order.residence}\n
        Agreement: ${msgObj.order.agreement}\n
    `;
}