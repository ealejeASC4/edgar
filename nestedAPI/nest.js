

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
console.log(cont)
    $('body').append(`<div class="dateImg"><img src='${pic}'></div> `)
    $('body').append(`<h2>You Have met: ${title} ${first} ${last} </h2>`)
    $('body').append(`<h2> gender: ${gend} </h2>`)
    



$.ajax({
    url: 'https://restcountries.eu/rest/v2/alpha?codes=' + cont,
    dataType: 'json',
    success: function(data){
        console.log(data)
        var flag = (data[0].flag)

         $('body').append(`<h2>This person is from  ${cont}</h2>`)
        $("body").append(`<h1> This is the flag of their country!: <br> <div class=imbro> <img src='${flag}'> </h1></div>`)
       

    }


}) 
}});


//signin and sign out function



//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
   $('.userImg').empty();
    $("userImg").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}


//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $('.userImg').empty();
        $(".userImg").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABotzdF2pYgVkuDNfEHGT9cSur6qgF7q2vpsoZSCvEBOYQaxcZq3vyQ");
        $(".email").text("example@example.com");
    });
}