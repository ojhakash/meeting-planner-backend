define({ "api": [
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "delete",
    "url": "/api/v1/meeting/delete/:meetingId",
    "title": "api for delete meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "meetingId",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId meetingId of the meeting. (url params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   assignedTo: \"tKMLreUlE\"\n   color: {primary: \"#80ff00\", secondary: \"#ff8000\"},\n   createdBy: \"i1p8-dtcN\"\n   createdOn: \"2019-01-27T13:23:35.000Z\"\n   description: \"this is the 1st one\"\n   end: \"2019-02-03T18:55:00.000Z\"\n    meetingId: \"DNcVLDgmb\"\n   start: \"2019-02-03T17:10:00.000Z\"\n   title: \"1st one\"\n   __v: 0\n   _id: \"5c4db0d74f0f2c3cc8cc011a\"\n   error: false\n   message: \"Successfully remove this meeting\"\n    status: 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.route.js",
    "groupTitle": "meetings",
    "name": "DeleteApiV1MeetingDeleteMeetingid"
  },
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "delete",
    "url": "/api/v1/meeting/:userId",
    "title": "api for delete meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the meetings. (url params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   data:[\n        {\n            assignedTo: \"CueG3Dq86\"\n            color: {primary: \"#008000\", secondary: \"#408080\"}\n            createdBy: \"i1p8-dtcN\"\n            createdOn: \"2019-01-27T08:02:09.000Z\"\n            description: \"New description\"\n            end: \"2019-02-03T22:15:00.000Z\"\n            meetingId: \"1OBow2juz\"\n            start: \"2019-02-03T22:10:00.000Z\"\n            title: \"New\"\n            __v: 0\n            _id: \"5c4d6581f0be4d2aa0dac211\"\n        },\n        {\n            assignedTo: \"CueG3Dq86\"\n           color: {primary: \"#80ff00\", secondary: \"#0000ff\"}\n            createdBy: \"i1p8-dtcN\"\n           createdOn: \"2019-01-27T14:08:19.000Z\"\n            description: \"fxzvcgbfhgn fghrgnh\"\n            end: \"2019-01-30T12:45:00.000Z\"\n            meetingId: \"BJCaUD3zA\"\n            start: \"2019-01-29T12:00:00.000Z\"\n            title: \"sfdgfhgn\"\n            __v: 0\n            _id: \"5c4dbb537b4d022274f6d471\"\n        }\n    ],\n   error: false\n   message: \"Successfully fetched all the meetings.\"\n    status: 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.route.js",
    "groupTitle": "meetings",
    "name": "DeleteApiV1MeetingUserid"
  },
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/add",
    "title": "api for add meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "title",
            "optional": false,
            "field": "title",
            "description": "<p>title of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "description",
            "optional": false,
            "field": "description",
            "description": "<p>description of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "assignedTo",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>assignedTo of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "start",
            "optional": false,
            "field": "start",
            "description": "<p>start of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "end",
            "optional": false,
            "field": "end",
            "description": "<p>end of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "primary",
            "optional": false,
            "field": "primary",
            "description": "<p>primary color of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "secondary",
            "optional": false,
            "field": "secondary",
            "description": "<p>secondary color of the meeting. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    error: false\n    message: \"Sucessfully added the meeting\"\n    status: 200 \n    data: {meetingId: \"cho533bZi\", createdBy: \"i1p8-dtcN\", assignedTo: \"tKMLreUlE\", title: \"Akash Ojha\",…}\n    assignedTo: \"tKMLreUlE\"\n    color: {primary: \"#008080\", secondary: \"#ffff00\"}\n    primary: \"#008080\"\n    secondary: \"#ffff00\"\n    createdBy: \"i1p8-dtcN\"\n    createdOn: \"2019-01-29T07:43:15.000Z\"\n    description: \"Akash Ojha Description\"\n    end: \"2019-01-31T06:30:00.000Z\"\n    meetingId: \"cho533bZi\"\n    start: \"2019-01-30T06:30:00.000Z\"\n    title: \"Akash Ojha\"\n    __v: 0\n    _id: \"5c500413c2e6a6236c203a2d\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.route.js",
    "groupTitle": "meetings",
    "name": "PostApiV1MeetingAdd"
  },
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meeting/edit/:meetingId",
    "title": "api for update meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "title",
            "optional": false,
            "field": "title",
            "description": "<p>title of the meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "description",
            "optional": false,
            "field": "description",
            "description": "<p>description of the meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "assignedTo",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>assignedTo of the meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "start",
            "optional": false,
            "field": "start",
            "description": "<p>start of the meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "end",
            "optional": false,
            "field": "end",
            "description": "<p>end of the meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "primary",
            "optional": false,
            "field": "primary",
            "description": "<p>primary color of the meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "secondary",
            "optional": false,
            "field": "secondary",
            "description": "<p>secondary color of the meeting. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "meetingId",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId meetingId of the meeting. (url params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    error: false\n    message: \"Successfully updated the meeting.\"\n    status: 200,\n    data: {n: 1, nModified: 0, ok: 1},\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.route.js",
    "groupTitle": "meetings",
    "name": "PutApiV1MeetingEditMeetingid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/forgotpassword",
    "title": "api for get the user details of logged-in user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Reset link is been sent to your email.Please check your email for reseting your password.\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.route.js",
    "groupTitle": "users",
    "name": "GetApiV1Forgotpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/resetpassword/:token",
    "title": "api for get the user details of logged-in user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "token",
            "optional": false,
            "field": "token",
            "description": "<p>token of the url. (url params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Successfully updated your password.\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.route.js",
    "groupTitle": "users",
    "name": "GetApiV1ResetpasswordToken"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/details",
    "title": "api for get the user details of logged-in user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"_3kGgiCCB\",\n        \"firstName\": \"Akash\",\n        \"lastName\": \"Ojha\",\n        \"createdOn\": \"2018-12-02T10:17:48.000Z\",\n        \"email\": \"akashojha15@gmail.com\",\n        \"mobileNumber\": \"7687886627\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.route.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for get all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"_3kGgiCCB\",\n            \"firstName\": \"Akash\",\n            \"lastName\": \"Ojha\",\n            \"createdOn\": \"2018-12-02T10:17:48.000Z\",\n            \"email\": \"akashojha15@gmail.com\",\n            \"mobileNumber\": \"7687886627\",\n            \"password\": \"$2b$10$bLYDCBEpUb1dcAEXlGYSR.SyPisf8Nq3Dnz65DrGw8Chks3mFXhF6\"\n        },\n        {\n            \"userId\": \"p3fDV7qKJj\",\n            \"firstName\": \"Jennifer\",\n            \"lastName\": \"Harvey\",\n            \"createdOn\": \"2018-12-04T11:45:30.000Z\",\n            \"email\": \"Chester1@yahoo.com\",\n            \"mobileNumber\": \"6984040419\",\n            \"password\": \"$2b$10$lg.yeBXCO7EhA4PN3FV2GOdZ.RSsBEYmDWyLWQMUniv76DZ9LnnIu\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.route.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Login Successful\",\n   \"status\": 200,\n   \"data\": {\n       \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InlFYzRrQW8zYyIsImlhdCI6MTU0NDE5MzM2OTg5NiwiZXhwIjoxNTQ0Mjc5NzY5LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6Il8za0dnaUNDQiIsImZpcnN0TmFtZSI6IkFrYXNoIiwibGFzdE5hbWUiOiJPamhhIiwiZW1haWwiOiJha2FzaG9qaGExNUBnbWFpbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI3Njg3ODg2NjI3In19.vpGfx2f_O2--wwy9Ala68tBbtNs5F0Aajc5Z4Ur_VtA\",\n       \"userDetails\": {\n           \"userId\": \"_3kGgiCCB\",\n           \"firstName\": \"Akash\",\n           \"lastName\": \"Ojha\",\n           \"email\": \"akashojha15@gmail.com\",\n           \"mobileNumber\": \"7687886627\"\n       }\n   }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.route.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api for user logout.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.route.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "firstName",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "lastName",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "mobileNumber",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"TBOwVGeI2\",\n        \"firstName\": \"Akash\",\n        \"lastName\": \"Ojha\",\n        \"createdOn\": \"2018-12-07T14:26:25.000Z\",\n        \"_id\": \"5c0a8311131ed3009fdd2c9c\",\n        \"email\": \"akashojha@gmail.com\",\n        \"mobileNumber\": \"7687886625\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.route.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
