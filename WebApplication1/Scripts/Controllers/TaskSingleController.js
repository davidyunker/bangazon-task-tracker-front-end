
app.controller("TaskSingleCtrl", function ($scope, TaskFactory, $routeParams) {

    TaskFactory.getSingleTask($routeParams.userTaskId)
      .then((task) => {
          console.log("task", task);
          $scope.task = task;
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
