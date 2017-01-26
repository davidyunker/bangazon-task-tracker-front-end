app.controller("UserTaskCtrl", function ($scope, $location, TaskFactory, $routeParams) {

    $scope.title = "Add New Task";
    $scope.btnText = "Save New Task";
    $scope.newTask = {
        name: '',
        description: '',
        status: ''
       
    };

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

    $scope.addTask = () => {
        TaskFactory.postNewTask($scope.newTask)
        .then((result) => {
            console.log(result);
        })
    }

    $scope.editTask = (userTaskId) =>
        TaskFactory.getSingleTask($routeParams.userTaskId)
        .then((response) => {
     $scope.selectedTask = response;
 });
});

        
