"use strict";

app.controller("NavCtrl", function ($scope, $location) {
    $scope.navItems = [
            { url: '#/items/list', name: "All Items" },
            { url: '#/items/new', name: "New Items" }

    ];

    //$scope.isActive = (viewLocation) => viewLocation === $location.path();
});
