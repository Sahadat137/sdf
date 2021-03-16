

angular.module('app', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: function () {
                    return '/bangladesh';
                }
            })
            .when('/bangladesh', {
                templateUrl: '/Template/Bangladesh/Bangladesh1.html',
                controller: 'Bangladesh1Controller'
            })
            .when('/india', {
                templateUrl: '/Template/India/India1.html',
                controller: 'India1Controller'
            })

        $locationProvider.html5Mode(false).hashPrefix('!');
    })

    .controller('Bangladesh1Controller', function ($scope, $http) {
        clear();
        function clear() {
            $scope.obj = {};
            $scope.obj.Id = 0;
            $scope.EmployeeList = [];
            getAllEmployee();
            $scope.btn = "Save";
        }


        function getAllEmployee() {
            console.log("get");
            $http({
                url: '/Employee/GetAllEmployees',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).success(function (data) {
                $scope.EmployeeList = data;
                console.log($scope.EmployeeList);
            });
        }

        //$scope.o = "kjkl";
        $scope.save = function () {
            console.log($scope.name);
            if ($scope.obj.Name === undefined || $scope.obj.Name == null || $scope.obj.Name == "") {
                alert("pls enter name", 'error', 5000);
                return;
            }

            if ($scope.obj.Id == 0) {
                var params = JSON.stringify({ obj: $scope.obj });
                console.log(params);
                $http.post('/Employee/AddEmployee', params).success(function (data) {
                    if (data) {
                        alert("successfull");
                        clear();
                    }
                });
            }
            else {
                var params = JSON.stringify({ obj: $scope.obj });
                console.log(params);
                $http.post('/Employee/UpdateEmployee', params).success(function (data) {
                    if (data) {
                        alertify("Update successfull");
                        clear();
                    }
                });
            }

        }

        $scope.update = function (aEmpInfo) {
            $scope.btn = "Update";
            $scope.obj = aEmpInfo;
        }

        $scope.Remove = function (id) {
            //var params = JSON.stringify({ obj: id });
            //console.log(params);
            $http.post('/Employee/DeleteEmployee?Id=' + id).success(function (data) {
                if (data > 0) {
                    alert("successfull");
                }
                clear();
            });
        }
    })
    .controller('India1Controller', function ($scope, $http) {
        $scope.name = "sahadat ind";
    })

