app.controller("AddTaskCtrl", function ($scope, $window, $location, TaskFactory, $routeParams) {

    $scope.title = "Add New Task";
    $scope.btnText = "Save New Task";
    $scope.newTask = {
        name: '',
        description: '',
        status: ''

    };

    $scope.addTask = function () {
        TaskFactory.postNewTask($scope.newTask)
        .then(function () {
            $window.location.reload();
        });
    };
});

