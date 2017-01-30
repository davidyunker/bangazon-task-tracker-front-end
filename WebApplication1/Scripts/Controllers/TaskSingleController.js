
app.controller("TaskSingleCtrl", function ($scope, TaskFactory, $routeParams) {

    let filterTasks = function (task) {
        if (task.status === 0) {
            task.status = "To Do";
        }

        else if (task.status === 1) {
            task.status = "In Progress";
        }
        else {
            task.status = "Completed";
        }
    }

    let unfilterTasks = function (task) {
        if (task.status === "To Do") {
            task.status = 0;
        }

        else if (task.status === "In Progress") {
            task.status = 1;
        }
        else {
            task.status = 2;
        }
    }
    TaskFactory.getSingleTask($routeParams.userTaskId)
      .then((task) => {
          console.log("task", task);
          filterTasks(task);
          $scope.task = task;

      });

    $scope.updateTask = function () {
        unfilterTasks($scope.task);
        TaskFactory.editTask($routeParams.userTaskId, $scope.task)
            .then((task) => {
                TaskFactory.getSingleTask($routeParams.userTaskId)
                .then((task) => {
                    filterTasks(task);
                    console.log("task after update", task)
                    $scope.task = task;

                });
            });
         };
});
