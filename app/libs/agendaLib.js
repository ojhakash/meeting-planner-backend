const Agenda = require("agenda");
const eventEmitter = require("./eventLib");
const { Meeting } = require("./../models/meeting.model");
const check = require("./checkLib");
const moment = require("moment");

const connectionOpts = {
    db: {
        address: process.env.ME_CONFIG_MONGODB_URL,
        collection: "agendaJobs"
    }
};

const agenda = new Agenda(connectionOpts);

agenda.define("sendAlert", (job, done) => {
    Meeting.find()
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err);
            } else if (check.isEmpty(result)) {
                console.log("No meeting Found");
            } else {
                for (let meeting of result) {
                    if (
                        moment()
                            .add("1", "minutes")
                            .format() >= moment(meeting.start).format() &&
                        moment().format() < moment(meeting.end).format()
                    ) {
                        eventEmitter.emit(
                            "connection",
                            `Meeting named ${
                                meeting.title
                            }  is about to start.`,
                            meeting.assignedTo
                        );
                    }
                }
                done;
            }
        });
});

module.exports = {
    agenda
};
