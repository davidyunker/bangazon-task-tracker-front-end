
app.controller("StatusTaskCtrl", function ($scope, TaskFactory, $routeParams) {

    $scope.taskDelete = (taskId) => {
        TaskFactory.deleteTask(taskId)
        .then((tasks) => {
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

    $scope.updatedTask = {
        name: '',
        description: '',
        status: ''
    }

    $scope.updateTask = function () {
        TaskFactory.editTask($routeParams.userTaskId, $scope.updatedTask)
            .then((task) => {
                console.log(task)
            })
    }

});
