angular.module("characterApp").service("characterService", function($http, $q) {
    console.log("Service Working")

    this.getCharacter = function() {
      var deferred = $q.defer()
      var characters = []

      $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/1/'
      }).then(function(result) {
        characters.push(result.data)
        if(characters.length === 2) {
          deferred.resolve(characters)
        }
      })

      $http.get('http://pokeapi.co/api/v2/pokemon/2/').then(function(result){
        characters.push(result.data)
        if (characters.length === 2) {
          deferred.resolve(characters)
        }
      })

      return deferred.promise
    }

    // this.getCharacter = function() {
    //
    //   var deferred = $q.defer() // write this first
    //   var characters = [];
    //     $http({}).then(//push to characters
    //       //check length of characters, if length === 2
    //     ) //character 1
    //     $http({}).then(//push to characters
    //       //check length of characters, if length === 2
    //     ) //character 2
    //   return deferred.promise // write this second to return correct item
    // }
    //
    // this.getCharacter = function() {
    //     // return $http({
    //     //   method:'GET',
    //     //   url: 'http://pokeapi.co/api/v2/pokemon/1/'
    //     // })
    //
    //     return $http.get('http://pokeapi.co/api/v2/pokemon/1/')
    //
    // }

})
