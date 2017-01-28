
app.controller("TaskSingleCtrl", function ($scope, TaskFactory, $routeParams) {
    
    TaskFactory.getSingleTask($routeParams.userTaskId) 
      .then((task) => {
          console.log("task", task);
          $scope.task = task;
      });
    });
