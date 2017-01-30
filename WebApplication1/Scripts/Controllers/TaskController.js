app.controller("UserTaskCtrl", function ($scope, $location, TaskFactory, $routeParams) {
    let filterTasks = function (task) {
        if (task.status === 0) {
            task.status = "To Do";
        }

        else if (status === 1) {
            task.status = "In Progress";
        }
        else {
            task.status = "Completed";
        }
    }


    TaskFactory.getTasks()
               .then((tasks) => {
                   console.log("unfiltered tasks inside GET", tasks)
                   tasks.forEach(function (task) {
                       filterTasks(task)
                       console.log('task in loop', task);
                   })
                   $scope.userTasks = tasks;
               });

    $scope.taskDelete = (taskId) => {
        TaskFactory.deleteTask(taskId)
        then((tasks) => {
            TaskFactory.getTasks()
               .then((tasks) => {
                   console.log("unfiltered tasks inside GET", tasks)
                   tasks.forEach(function (task) {
                       filterTasks(task)
                       console.log('task in loop delete', task);
                   })
                   $scope.userTasks = tasks;
               });
        });
    };

    $scope.filterByStatus = function (x) {
        TaskFactory.getTasksByStatus(x)
              .then((tasks) => {
                  console.log("tasks", tasks);
                  $scope.userTasks = tasks;
              });
    };

    $scope.test = function () { console.log("test worked") };
});

        
