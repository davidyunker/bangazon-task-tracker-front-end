
app.controller("TaskSingleCtrl", function ($scope, TaskFactory, $routeParams) {

    TaskFactory.getSingleTask($routeParams.userTaskId)
      .then((task) => {
          console.log("task", task);
          $scope.task = task;
          
      });

    $scope.updateTask = function () {
        TaskFactory.editTask($routeParams.userTaskId, $scope.task)
            .then((task) => {
                console.log(task)
            })
    }

});
