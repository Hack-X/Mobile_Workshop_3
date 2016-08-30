angular.module('starter.services', [])

.factory('Shows', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shows = [
    {
      id: 1,
      name: "Mon premier Show",
      location: "Salle Pleyel",
      description: "Concert blabla",
      capacity: 500,
      price: 30,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Salle_Pleyel_5.jpg/220px-Salle_Pleyel_5.jpg",
      date: "2016-10-30",
      url: "https://api-shows-tonight.herokuapp.com/shows/1.json"
    },
    {
      id: 2,
      name: "Sébastien Tellier",
      location: "Nouveau Casino",
      description: "L'Aventura",
      capacity: 500,
      price: 36,
      image: "http://www.gqmagazine.fr/uploads/images/201421/cc/l_aventura_de_s__bastien_tellier_7651.jpeg",
      date: "2016-10-19",
      url: "https://api-shows-tonight.herokuapp.com/shows/2.json"
    },
    {
      id: 5,
      name: "Bertrand",
      location: "Olympia Bruno Coquatrix",
      description: "Concert de guitare classique",
      capacity: 10,
      price: 400,
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bob-Marley-in-Concert_Zurich_05-30-80.jpg",
      date: "2016-11-05",
      url: "https://api-shows-tonight.herokuapp.com/shows/5.json"
    }
  ];

  return {
    all: function() {
      return shows;
    },
    get: function(showId) {
      for (var i = 0; i < shows.length; i++) {
        if (shows[i].id === parseInt(showId)) {
          return shows[i];
        }
      }
      return null;
    }
  };
});
