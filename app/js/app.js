angular.module("pokemonApp", ["ngRoute"])
    .config(config)
    .run(run);

run.$inject = ["$rootScope", "$location"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider.
    when("/login", {
        templateUrl: "/app/pages/login.html",
        controller: "loginController"
    }).
    when("/listarPokemon", {
        templateUrl: "/app/pages/listar.html",
        controller: "listarPokemonController"
    }).
    when("/cadastrarPokemon", {
        templateUrl: "/app/pages/cadastrar.html",
        controller: "cadastrarPokemonController as vm"
    }).
    when("/listarTreinador", {
        templateUrl: "/app/pages/listarTreinador.html",
        controller: "listarTreinadorController"
    }).
    when("/cadastrarTreinador", {
        templateUrl: "/app/pages/cadastrarTreinador.html",
        controller: "cadastrarTreinadorController"
    }).
    when("/selecionarPokemon", {
        templateUrl: "/app/pages/selecionarPokemon.html",
        controller: "selecaoController"
    })
    .otherwise({
        redirectTo: "/listarPokemon"
    }); 

}

function run($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function(evt, route) {
        if (route.originalPath !== "/login") {
            if (!$rootScope.usuario) {
                $location.path("/login");
            }
        }
    });
}