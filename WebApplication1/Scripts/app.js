"use strict";
var app = angular.module("BangazonToDo", ["ngRoute"])
.constant('API_URL', 'localhost://5000/UserTask');


app.config(function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "partials/UserTasks.html",
            controller: "UserTaskCtrl"
        }).

        when("/Tasks/ByStatus", {
            templateUrl: 'partials/ByStatus.html',
            controller: "UserTaskCtrl",

        }).
        when('/Tasks/:taskId', {
            templateUrl: "partials/TaskDetail.html",
            controller: "UserTaskCtrl",
        }).

        when("/Tasks/:taskId/edit", {
            templateUrl: "partials/TaskForm.html",
            controller: "UserTaskCtrl",
        }).

        otherwise("/");
});

















