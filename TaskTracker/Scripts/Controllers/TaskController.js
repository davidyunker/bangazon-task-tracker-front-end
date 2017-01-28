app.controller("UserTaskCtrl", function ($scope, $location, TaskFactory, $routeParams) {


    TaskFactory.getTasks()
          .then((tasks) => {
              console.log("tasks", tasks);
              $scope.userTasks = tasks;
          });

    $scope.taskDelete = (taskId) => {
        TaskFactory.deleteTask(taskId)
        .then((response) => {
            TaskFactory.getTasks()
            .then((tasks) => {
                $scope.userTasks = tasks;
            });
        });
    };

 
 //   $scope.editTask = (userTaskId) =>
 //       TaskFactory.getSingleTask($routeParams.userTaskId)
 //       .then((response) => {
 //    $scope.selectedTask = response;
 //});
});

        
