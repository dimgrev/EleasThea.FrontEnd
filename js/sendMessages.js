var backendURL = 'http://192.168.1.74/EleasThea_WebApi';

function makeReservation(fullName, email, telephone, numberOfPeople, resDate, resTime, event){
    event.preventDefault();
    var dateTime = resDate + " " + resTime;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": backendURL + "/api/MakeReservation",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
          "Postman-Token": "ddf7b072-6e4c-4da1-b6d0-cd06720b24bf"
        },
        "processData": false,
        "data": "{\n\t\"FullName\":\"" + fullName + "\",\n\t\"Email\":\"" + email + "\",\n\t\"Tel\":" + telephone + ",\n\t\"numberOfPersons\":" + numberOfPeople + ",\n\t\"dateTimeOfReservation\":\"" + dateTime + "\"\n}"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        $(".successfulMessage").css({display:'block'});
        $(".msgBgOverlay").css({visibility:'visible'});
        $(".msgBgOverlay").fadeTo(200,1);
        $('html, body').css({
            overflow: 'hidden',
            height: 'auto'
        });

      }).fail(function(response){
        console.log(response);
        $(".errorMessage").css({display:'block'});
        $(".msgBgOverlay").css({visibility:'visible'});
        $(".msgBgOverlay").fadeTo(200,1);
        $('html, body').css({
            overflow: 'hidden',
            height: 'auto'
        });
      });
}


function sendFeedback(fullName, email, telephone, message, event){
    event.preventDefault();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": backendURL + "/api/SendFeedback",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
          "Postman-Token": "ddf7b072-6e4c-4da1-b6d0-cd06720b24bf"
        },
        "processData": false,
        "data": "{\n\t\"FullName\":\"" + fullName + "\",\n\t\"Email\":\"" + email + "\",\n\t\"Tel\":" + telephone + ",\n\t\"message\":\"" + message + "\"\n}"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        $(".successfulMessage").css({display:'block'});
        $(".msgBgOverlay").css({visibility:'visible'});
        $(".msgBgOverlay").fadeTo(200,1);
        $('html, body').css({
            overflow: 'hidden',
            height: 'auto'
        });

      }).fail(function(response){
        console.log(response);
        $(".errorMessage").css({display:'block'});
        $(".msgBgOverlay").css({visibility:'visible'});
        $(".msgBgOverlay").fadeTo(200,1);
        $('html, body').css({
            overflow: 'hidden',
            height: 'auto'
        });
      });
}