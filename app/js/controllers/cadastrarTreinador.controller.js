        angular.module("pokemonApp")
        .controller("cadastrarTreinadorController", cadastrarTreinadorController);

        cadastrarTreinadorController.$inject = ['$scope', "$rootScope", "$location", "treinadorService"];

        function cadastrarTreinadorController($scope, $rootScope, $location, treinadorService) {
            $scope.service = treinadorService;
            $scope.treinador = $scope.service.treinador;
            
            $scope.inserir = function(treinador) {
                if (treinador.id) {
                    var treinadorAlterado = $scope.service.listaTreinador.filter(function(item) {
                        if (item.id === treinador.id) {
                            return item;
                        }
                    });
                    
                    var index = $scope.service.listaTreinador.indexOf(treinadorAlterado[0]);
                    $scope.service.listaTreinador.splice(index, 1, treinador);
                
                } else {
                    treinador.id = ++$scope.service.contadorId;
                    $scope.service.listaTreinador.push(angular.copy(treinador));
                }

                $scope.treinador = {};
                $scope.service.treinador = {};
                $location.path("/listarTreinador");
            };

        }