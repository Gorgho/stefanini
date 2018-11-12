angular.module("pokemonApp")
.controller("loginController", loginController);

loginController.$inject = ["$scope", "$rootScope", "$location"];

function loginController($scope, $rootScope, $location) {
    $rootScope.usuario = {};
    $scope.alerta = false;

    $scope.validarLogin = function (usuario, senha) {
        if (usuario && senha) {
            $rootScope.usuario.logado = true;
            $location.path("/listarPokemon");
        } else{
            $scope.alerta = true;
        }
    };
}