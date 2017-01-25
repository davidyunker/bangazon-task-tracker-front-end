app.controller("UserTaskCtrl", function ($scope, $location, TaskFactory) {
    TaskFactory.getTasks()
        .then((tasks) => console.log("tasks", tasks))
 
});