const axios = require('axios').default;


export const searchArtistZZZ = (searchTerm) =>  {


axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + searchTerm)
  .then(function (response) {
    // handle success

    //goto page where we view search results for artists 
    console.log(response.data);
    const results = response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}