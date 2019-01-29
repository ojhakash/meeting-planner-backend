const express = require("express");
const router = express.Router();
const meetingController = require("../controllers/meeting.controller");
const appConfig = require("./../../config/appConfig");
const auth = require("./../middlewares/auth");

module.exports.setRouter = app => {
    let baseUrl = `${appConfig.apiVersion}/meeting`;

    /**
     * @apiGroup meetings
     * @apiVersion  1.0.0
     * @api {post} /api/v1/meeting/add api for add meeting.
     *
     * @apiParam {authToken} authToken authToken of the user. (body params) (required)
     * @apiParam {title} title title of the meeting. (body params) (required)
     * @apiParam {description} description description of the meeting. (body params) (required)
     * @apiParam {assignedTo} assignedTo assignedTo of the meeting. (body params) (required)
     * @apiParam {start} start start of the meeting. (body params) (required)
     * @apiParam {end} end end of the meeting. (body params) (required)
     * @apiParam {primary} primary primary color of the meeting. (body params) (required)
     * @apiParam {secondary} secondary secondary color of the meeting. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, data.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            error: false
            message: "Sucessfully added the meeting"
            status: 200 
            data: {meetingId: "cho533bZi", createdBy: "i1p8-dtcN", assignedTo: "tKMLreUlE", title: "Akash Ojha",…}
            assignedTo: "tKMLreUlE"
            color: {primary: "#008080", secondary: "#ffff00"}
            primary: "#008080"
            secondary: "#ffff00"
            createdBy: "i1p8-dtcN"
            createdOn: "2019-01-29T07:43:15.000Z"
            description: "Akash Ojha Description"
            end: "2019-01-31T06:30:00.000Z"
            meetingId: "cho533bZi"
            start: "2019-01-30T06:30:00.000Z"
            title: "Akash Ojha"
            __v: 0
            _id: "5c500413c2e6a6236c203a2d"
        }
    */

    app.post(`${baseUrl}/add`, auth.isAuthorized, meetingController.addMeeting);

    /**
     * @apiGroup meetings
     * @apiVersion  1.0.0
     * @api {delete} /api/v1/meeting/:userId api for delete meeting.
     *
     * @apiParam {authToken} authToken authToken of the user. (body params) (required)
     * @apiParam {userId}  userId userId of the meetings. (url params)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, data.
     *
     * @apiSuccessExample {object} Success-Response:
     *   {
     *      data:[
     *           {
     *               assignedTo: "CueG3Dq86"
     *               color: {primary: "#008000", secondary: "#408080"}
     *               createdBy: "i1p8-dtcN"
     *               createdOn: "2019-01-27T08:02:09.000Z"
     *               description: "New description"
     *               end: "2019-02-03T22:15:00.000Z"
     *               meetingId: "1OBow2juz"
     *               start: "2019-02-03T22:10:00.000Z"
     *               title: "New"
     *               __v: 0
     *               _id: "5c4d6581f0be4d2aa0dac211"
     *           },
     *           {
     *               assignedTo: "CueG3Dq86"
     *              color: {primary: "#80ff00", secondary: "#0000ff"}
     *               createdBy: "i1p8-dtcN"
     *              createdOn: "2019-01-27T14:08:19.000Z"
     *               description: "fxzvcgbfhgn fghrgnh"
     *               end: "2019-01-30T12:45:00.000Z"
     *               meetingId: "BJCaUD3zA"
     *               start: "2019-01-29T12:00:00.000Z"
     *               title: "sfdgfhgn"
     *               __v: 0
     *               _id: "5c4dbb537b4d022274f6d471"
     *           }
     *       ],
     *      error: false
     *      message: "Successfully fetched all the meetings."
     *       status: 200
     *   }
     */

    app.get(
        `${baseUrl}/:userId`,
        auth.isAuthorized,
        meetingController.getMeetingsOfSingleUser
    );

    /**
     * @apiGroup meetings
     * @apiVersion  1.0.0
     * @api {put} /api/v1/meeting/edit/:meetingId api for update meeting.
     *
     * @apiParam {authToken} authToken authToken of the user. (body params) (required)
     * @apiParam {title} title title of the meeting. (body params) 
     * @apiParam {description} description description of the meeting. (body params) 
     * @apiParam {assignedTo} assignedTo assignedTo of the meeting. (body params) 
     * @apiParam {start} start start of the meeting. (body params) 
     * @apiParam {end} end end of the meeting. (body params) 
     * @apiParam {primary} primary primary color of the meeting. (body params) 
     * @apiParam {secondary} secondary secondary color of the meeting. (body params) 
     * @apiParam {meetingId} meetingId meetingId meetingId of the meeting. (url params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, data.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            error: false
            message: "Successfully updated the meeting."
            status: 200,
            data: {n: 1, nModified: 0, ok: 1},
        }
    */

    app.put(
        `${baseUrl}/edit/:meetingId`,
        auth.isAuthorized,
        meetingController.editMeeeting
    );

    /**
     * @apiGroup meetings
     * @apiVersion  1.0.0
     * @api {delete} /api/v1/meeting/delete/:meetingId api for delete meeting.
     *
     * @apiParam {authToken} authToken authToken of the user. (body params) (required)
     * @apiParam {meetingId} meetingId meetingId meetingId of the meeting. (url params)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, data.
     *
     * @apiSuccessExample {object} Success-Response:
     *   {
     *      assignedTo: "tKMLreUlE"
     *      color: {primary: "#80ff00", secondary: "#ff8000"},
     *      createdBy: "i1p8-dtcN"
     *      createdOn: "2019-01-27T13:23:35.000Z"
     *      description: "this is the 1st one"
     *      end: "2019-02-03T18:55:00.000Z"
     *       meetingId: "DNcVLDgmb"
     *      start: "2019-02-03T17:10:00.000Z"
     *      title: "1st one"
     *      __v: 0
     *      _id: "5c4db0d74f0f2c3cc8cc011a"
     *      error: false
     *      message: "Successfully remove this meeting"
     *       status: 200
     *   }
     */

    app.delete(
        `${baseUrl}/delete/:meetingId`,
        auth.isAuthorized,
        meetingController.removeMeeting
    );

    //unused routes
    app.get(
        `${baseUrl}/all`,
        auth.isAuthorized,
        meetingController.getAllMeetings
    );
};
