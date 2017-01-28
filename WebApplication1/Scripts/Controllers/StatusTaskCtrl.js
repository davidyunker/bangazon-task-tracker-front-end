
app.controller("StatusTaskCtrl", function ($scope, TaskFactory, $routeParams) {


    TaskFactory.getTasksByStatus("2")
          .then((tasks) => {
              console.log("tasks", tasks);
              $scope.userTasks = tasks;
          });

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
