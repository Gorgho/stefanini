angular.module("pokemonApp", []);

        angular.module("pokemonApp")
        .controller("pokemonController", pokemonController);

        pokemonController.$inject = ['$scope', "$rootScope"];

        function pokemonController($scope, $rootScope) {
            $scope.acaoCadastrar = false;
            $scope.contadorId = 0;

            $scope.listaTipos = [
                {codigo: 1, descricao: "Raio"},
                {codigo: 2, descricao: "Fogo"},
                {codigo: 3, descricao: "Água"}
            ];
            $scope.listaPokemons = [];
            $scope.pokemon = {};

            $scope.inserir = function(pokemon) {
                if (pokemon.id) {
                    var pokemonAlterado = $scope.listaPokemons.filter(function(pokemonItem) {
                        if (pokemonItem.id === pokemon.id) {
                            return pokemonItem;
                        }
                    });
                    
                    var index = $scope.listaPokemons.indexOf(pokemonAlterado[0]);
                    $scope.listaPokemons.splice(index, 1, pokemon);
                
                } else {
                    pokemon.id = ++$scope.contadorId;
                    $scope.listaPokemons.push(angular.copy(pokemon));
                }

                $scope.pokemon = {};
                $scope.acaoCadastrar = false;
            }

            $scope.excluir = function(index) {
                $scope.listaPokemons.splice(index, 1);
            }

            $scope.editar = function(pokemon) {
                $scope.pokemon = angular.copy(pokemon);
                $scope.acaoCadastrar = true;
            }  
        }