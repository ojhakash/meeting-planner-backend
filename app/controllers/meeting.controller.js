const mongoose = require("mongoose");
const moment = require("moment");
const shortid = require("shortid");
const scheduler = require("node-schedule");
const time = require("../libs/timeLib");
const check = require("../libs/checkLib");
const response = require("../libs/responseLib");

const MeetingModel = mongoose.model("Meeting");
const UserModel = mongoose.model("User");
const eventEmitter = require("./../libs/eventLib");

exports.addMeeting = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            throw { message: "you are not authorized" };
        }
        const user = await UserModel.findOne({ userId: req.body.assignedTo });
        if (!user) {
            throw { message: "no user exist with the provided id." };
        }

        let meeting = new MeetingModel({
            meetingId: shortid.generate(),
            createdBy: req.user.userId,
            assignedTo: req.body.assignedTo,
            title: req.body.title,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            color: {
                primary: req.body.primary,
                secondary: req.body.secondary
            },
            createdOn: time.now()
        });

        meeting = await meeting.save();

        if (!meeting) {
            let apiResponse = response.generate(
                true,
                "Failed to add meeting",
                400,
                null
            );
            res.send(apiResponse);
        }

        eventEmitter.emit(
            "connection",
            `A meeting named ${meeting.title} scheduled for you.`,
            meeting.assignedTo
        );

        let apiResponse = response.generate(
            false,
            "Sucessfully added the meeting",
            200,
            meeting
        );
        res.send(apiResponse);
    } catch (error) {
        let apiResponse = response.generate(
            true,
            error.message || "error occurred.please try again!",
            400,
            error
        );
        res.send(apiResponse);
    }
};

exports.getAllMeetings = async (req, res) => {
    try {
        let meetings = await MeetingModel.find();
    } catch (error) {
        let apiResponse = response.generate(
            true,
            error.message || "failed to get all meetings!",
            400,
            error
        );
        res.send(apiResponse);
    }
};

exports.getMeetingsOfSingleUser = async (req, res) => {
    try {
        let meetings = await MeetingModel.find({
            assignedTo: req.params.userId
        });
        if (meetings.length === 0) {
            throw { message: "User don't have any meetings scheduled!" };
        }
        let apiResponse = response.generate(
            false,
            "Successfully fetched all the meetings.",
            200,
            meetings
        );
        res.send(apiResponse);
    } catch (error) {
        let apiResponse = response.generate(
            true,
            error.message || "failed to get user's all meetings!",
            400,
            error
        );
        res.send(apiResponse);
    }
};

exports.editMeeeting = async (req, res) => {
    try {
        let options = req.body;
        let meeting = await MeetingModel.findOne({
            meetingId: req.params.meetingId
        });

        MeetingModel.updateOne(
            { meetingId: req.params.meetingId },
            { ...options }
        ).exec((err, result) => {
            if (err) {
                let apiResponse = response.generate(
                    true,
                    "Failed To edit Meeting details",
                    500,
                    null
                );
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(
                    true,
                    "No Meeting Found",
                    404,
                    null
                );
                res.send(apiResponse);
            } else {
                eventEmitter.emit(
                    "connection",
                    `Meeting named ${meeting.title}  is updated.`,
                    meeting.assignedTo
                );
                let apiResponse = response.generate(
                    false,
                    "Successfully updated the meeting.",
                    200,
                    result
                );
                res.send(apiResponse);
            }
        });
    } catch (error) {
        let apiResponse = response.generate(
            true,
            error.message || "Failed in editing meeting",
            400,
            error
        );
        res.send(apiResponse);
    }
};

exports.removeMeeting = async (req, res) => {
    try {
        let meeting = await MeetingModel.findOne({
            meetingId: req.params.meetingId
        });

        if (!meeting) {
            throw { message: "No meeting found" };
        }
        await meeting.remove();

        eventEmitter.emit(
            "connection",
            `Meeting named ${meeting.title}  is removed from dashboard.`,
            meeting.assignedTo
        );

        let apiResponse = response.generate(
            false,
            "Successfully remove this meeting",
            200,
            meeting
        );
        res.send(apiResponse);
    } catch (error) {
        let apiResponse = response.generate(
            true,
            error.message || "Failed in removing meeting",
            400,
            error
        );
        res.send(apiResponse);
    }
};
