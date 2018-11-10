angular.module("pokemonApp", ["ngRoute"])
    .config(config)
    .run(run);

run.$inject = ["$rootScope", "$location"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider.
    when("/login", {
        templateUrl: "/app/pages/login.html"
    }).
    when("/listar", {
        templateUrl: "/app/pages/listar.html"
    }).
    when("/cadastrar", {
        templateUrl: "/app/pages/cadastrar.html",
        controller: "cadastrarPokemonController as vm"
    })
    .otherwise({
        redirectTo: "/login"
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