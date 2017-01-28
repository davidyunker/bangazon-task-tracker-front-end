"use strict";


var app = angular.module("BangazonToDo", ["ngRoute"])
.constant('API_URL', 'http://localhost:5000/UserTask');


app.config(function ($routeProvider) {
    $routeProvider.
       when("/", {
           templateUrl: "Scripts/Partials/UserTasks.html",
           controller: "UserTaskCtrl"
       }).
          when("/Tasks", {
              templateUrl: "Scripts/Partials/UserTasks.html",
              controller: "UserTaskCtrl"
          }).
      
        when('/Tasks/:userTaskId', {
            templateUrl: "Scripts/Partials/TaskDetail.html",
            controller: "TaskSingleCtrl"
        }).
          when("/Tasks/New", {
              templateUrl: "Scripts/Partials/NewTask.html",
              controller: "AddTaskCtrl"
          }).
        otherwise("/");
});

















