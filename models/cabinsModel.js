const mongoose = require('mongoose')
require("../models/bookingsModel")

const cabinsSchema = new mongoose.Schema({
<<<<<<< HEAD
    renter: {
=======
    owner: {
>>>>>>> dilan
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    sauna: {
        type: Boolean,
        required: false
    },
    beach: {
        type: Boolean,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
<<<<<<< HEAD
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bookings' }]
=======
    bookings: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Bookings' }]
>>>>>>> dilan
}, { timestamps: true })

module.exports = mongoose.model(
    'Cabins',
    cabinsSchema
)
