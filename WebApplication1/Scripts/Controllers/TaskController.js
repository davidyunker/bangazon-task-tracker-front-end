app.controller("UserTaskCtrl", function ($scope, $location, TaskFactory) {

    $scope.title = "Add New Task";
    $scope.btnText = "Save New Task";
    //added to switch up the form when the route uses this controller as opposed to the edit controller
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
});

        
