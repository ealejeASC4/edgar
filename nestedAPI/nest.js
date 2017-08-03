$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    var title = data.results[0].name.title 
    var first = data.results[0].name.first
    var last = data.results[0].name.last
    var gend = data.results[0].gender
    var pic = data.results[0].picture.large
    var cont = data.results[0].nat

    $('body').append(`<img src='${pic}'> `)
    $('body').append(`<h2>Good Morning: ${title} ${first} ${last} </h2>`)
    $('body').append(`<h2> gender: ${gend} </h2>`)
    



$.ajax({
    url: 'https://restcountries.eu/rest/v2/alpha?codes=nl',
    dataType: 'json',
    success: function(data){
        console.log(data)
        var flag = (data[0].flag)

         $('body').append(`<h2>This person is from  ${cont}</h2>`)
        $("body").append(`<h1> This is the flag: <br> <img src=${flag} </h1>`)
       

    }


}) 
}});