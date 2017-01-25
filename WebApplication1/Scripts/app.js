"use strict";
var app = angular.module("BangazonToDo", ["ngRoute"])
.constant('API_URL', 'http://localhost:5000/UserTask');


app.config(function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "Scripts/Partials/UserTasks.html",
            controller: "UserTaskCtrl"
        }).
        when("/Tasks/ByStatus/:statusId", {
            templateUrl: 'Partials/UserTasks.html',
            controller: "UserTaskCtrl"
        }).
        when('/Tasks/:taskId', {
            templateUrl: "Partials/TaskDetail.html",
            controller: "UserTaskCtrl"
        }).
          when('/Tasks/New', {
              templateUrl: "Partials/NewTask.html",
              controller: "UserTaskCtrl"
          }).
        when("/Tasks/:taskId/edit", {
            templateUrl: "Partials/TaskDetail.html",
            controller: "UserTaskCtrl"
        }).
        otherwise("/");
});

















