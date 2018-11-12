angular.module("pokemonApp")
.controller("selecaoController", selecaoController);

selecaoController.$inject = ["$scope", "$rootScope", "pokemonService", "treinadorService"];

function selecaoController($scope, $rootScope, pokemonService, treinadorService) {
    $scope.treinService = treinadorService;
    $scope.treinador = $scope.treinService.treinador;
    $scope.listaSelecao = {};
    $scope.listaPokemon = pokemonService.listaPokemons;

    var escolha = function (selecao,pokemon) {
        if (selecao) {
            $scope.listaSelecao.push(pokemon);
            $scope.treinService.listaPokemonTreinador.push(pokemon.id);
        } else {
            
        }
    };

    var teste = function () {
        console.log("entrou");
    };
}