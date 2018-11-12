angular.module("pokemonApp")
    .factory("treinadorService", treinadorService);

    treinadorService.$inject = [];

    function treinadorService() {
        var _treinador = null;
        var _contadorId = 1;
        
        var _listaTreinador = 
            [{id: 1, nome: "Ash", cidade: "Pallet"}];

        var _listaPokemonTreinador = [];

        return {
            contadorId: _contadorId,
            listaPokemonTreinador: _listaPokemonTreinador,
            listaTreinador: _listaTreinador,
            treinador: _treinador
        };
    }