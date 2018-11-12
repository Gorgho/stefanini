        angular.module("pokemonApp")
        .controller("listarTreinadorController", listarTreinadorController);

        listarTreinadorController.$inject = ['$scope', "$rootScope", "$location", "treinadorService"];

        function listarTreinadorController($scope, $rootScope, $location, treinadorService) {
            $scope.service = treinadorService;

            $scope.irCadastrar = function() {
                $location.path("/cadastrarTreinador");
            };

            $scope.editar = function(treinador) {
                $scope.service.treinador = treinador;
                $scope.irCadastrar();
            };

            $scope.excluir = function(index) {
                $scope.service.listaTreinador.splice(index, 1);
            };
            
        }