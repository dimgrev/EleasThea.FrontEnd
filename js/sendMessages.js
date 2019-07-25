// var backendURL = 'http://192.168.1.74/EleasThea_WebApi';
var backendURL = 'http://83.212.107.151/eleasthea_api';

function makeReservation(fullName, email, telephone, numberOfPeople, resDate, resTime, event){
    event.preventDefault();
    DisplayOverlay(true);
    DisplayOverlayLoading(true);
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
        DisplayOverlayLoading(false);
        DisplayOverlayResMessage(true);        

      }).fail(function(response){
        console.log(response);
        DisplayOverlayLoading(false);
        DisplayOverlayResMessage(false);
      });
}


function sendFeedback(fullName, email, telephone, message, event){
    event.preventDefault();
    DisplayOverlay(true);
    DisplayOverlayLoading(true);
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
        DisplayOverlayLoading(false);
        DisplayOverlayResMessage(true);        

      }).fail(function(response){
        console.log(response);
        DisplayOverlayLoading(false);
        DisplayOverlayResMessage(false);
      });
}

function makeReservationForCookingLessons(fullName, email, telephone, numberOfPeople, resDate, resTime, event){
  event.preventDefault();
  DisplayOverlay(true);
  DisplayOverlayLoading(true);
  var dateTime = resDate + " " + resTime;
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": backendURL + "/api/MakeReservationForCookingClasses",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        "Postman-Token": "ddf7b072-6e4c-4da1-b6d0-cd06720b24bf"
      },
      "processData": false,
      "data": "{\n\t\"FullName\":\"" + fullName + "\",\n\t\"Email\":\"" + email + "\",\n\t\"Tel\":" + telephone + ",\n\t\"numberOfPersons\":\"" + numberOfPeople + "\",\n\t\"dateTimeOfReservation\":\"" + dateTime + "\"\n}"
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      DisplayOverlayLoading(false);
      DisplayOverlayResMessage(true);        

    }).fail(function(response){
      console.log(response);
      DisplayOverlayLoading(false);
      DisplayOverlayResMessage(false);
    });
}


function DisplayOverlay(wantToEnable){
  if (wantToEnable) {
    $(".msgBgOverlay").css({visibility:'visible'});
        $(".msgBgOverlay").fadeTo(200,1);
        $('html, body').css({
            overflow: 'hidden',
            height: 'auto'
        });
  } else {
    
  }
}

function DisplayOverlayLoading(wantToEnable){
  if (wantToEnable) {
    $(".loadingMessage").css({display:'block'});
  }else{
    $(".loadingMessage").css({display:'none'});
  }
}

function DisplayOverlayResMessage(isSuccessful){
  if (isSuccessful) {
    $(".successfulMessage").css({display:'block'});
  }else{
    $(".errorMessage").css({display:'block'});
  }
  $(".dismissMessageBtn").css({display:'block'});

}

function ValidateDateForReservation(date){ //Validate if day is not Monday..
  var dateCorrect = new Date(date)
  var whatDayIsIt = dateCorrect.getDay(); 
  if (whatDayIsIt == '1') { //if 1 is monday...
    document.getElementById("reservation-date-picker").setCustomValidity("You can't make a reservation on a Monday.");
  }
  else{
    document.getElementById("reservation-date-picker").setCustomValidity("");
  }
}

function ValidateDateForCookingLessons(date){ //Validate if day is not Saturday, Sunday, Monday...
  var dateCorrect = new Date(date)
  var whatDayIsIt = dateCorrect.getDay(); 
  if (whatDayIsIt == '0' || whatDayIsIt == '1' || whatDayIsIt == '6') { //0->sunday, 1-> monday, 6->saterday
    document.getElementById("reservationForCookingClass-date-picker").setCustomValidity("You can't select Saturday, Sunday or Monday.");
  }
  else{
    document.getElementById("reservationForCookingClass-date-picker").setCustomValidity("");
  }
}