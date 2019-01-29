"use strict";
/**
 * Module Dependencies
 */
const mongoose = require("mongoose");

let meetingSchema = new mongoose.Schema({
    meetingId: {
        type: String,
        default: "",
        index: true,
        unique: true
    },
    createdBy: {
        type: String,
        required: "createdBy is a required field",
        default: ""
    },
    assignedTo: {
        type: String,
        required: "assignedTo is a required field",
        default: ""
    },
    title: {
        type: String,
        required: "title is a required field",
        default: ""
    },
    description: {
        type: String,
        required: "description is a required field",
        default: ""
    },
    start: {
        type: Date,
        required: "start is a required field",
        default: ""
    },
    end: {
        type: Date,
        required: "end is a required field",
        default: ""
    },
    color: {
        primary: {
            type: String,
            required: "primary color is a required field"
        },
        secondary: {
            type: String,
            required: "secondary color is required field"
        }
    },
    createdOn: {
        type: Date,
        default: ""
    }
});

let Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = { Meeting };
