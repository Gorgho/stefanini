angular.module("pokemonApp")
    .factory("pokemonService", pokemonService);

    pokemonService.$inject = [];

    function pokemonService() {
        var _pokemon = null;
        var _contadorID = 1;
        
        var _listaPokemons = 
            [{id: 1, nome: "Pikachu", tipo: {codigo: 1, descricao: "Raio"}}];
        
        var _listaTipos = [
            {codigo: 1, descricao: "Raio"},
            {codigo: 2, descricao: "Fogo"},
            {codigo: 3, descricao: "Água"}
        ];

        return {
            contadorId: _contadorID,
            listaPokemons: _listaPokemons,
            listaTipos: _listaTipos,
            pokemon: _pokemon
        };
    }