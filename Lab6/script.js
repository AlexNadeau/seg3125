var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";
function disableDates(date) {
    var t1 = document.getElementById('flexRadioDefault6');
    var t2 = document.getElementById('flexRadioDefault7');
    var t3 = document.getElementById('flexRadioDefault8');
    if (!t1.checked && !t2.checked && !t3.checked){
      return [false];
    }
    if (t1.checked){
      if (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 3 || date.getDay() === 4)
        return [false];
    }
    if (t2.checked){
      if (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 1 || date.getDay() === 5)
        return [false];
    }
    if (t3.checked){
      if (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 2 || date.getDay() === 4)
        return [false];
    }
    if (date.getDay() === 0 || date.getDay() === 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}
function validateCredit(a) {
    var number = document.getElementById('card').value;
    var regex = new RegExp("^[0-9]{4}[\ ][0-9]{4}[\ ][0-9]{4}[\ ][0-9]{4}$");
    if (!regex.test(number))
        return false;

    return true;
}
function validPhone(a){
  var number = document.getElementById('phonenumber').value;
  var regex = new RegExp("^[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}");
  if (!regex.test(number)){
    return false;
  }
  return true;
}


$(document).ready(function(){
  $("#card").on("change", function(){
        if (!validateCredit("#card")){
            alert("Wrong format for creditcard, it must be 16 digits with spaces.");
            $("#card").val("");
            $("#card").addClass("error");
        }
        else {
            $("#card").removeClass("error");
        }
    });
    $("#card").on("mouseenter", function(){
        $("#card").addClass("showInput");
    });

    $("#card").on("mouseleave", function(){
        $("#card").removeClass("showInput");
    });
    $("#card").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });


    $("#phonenumber").on("change", function(){
          if (!validPhone("#phonenumber")){
              alert("Wrong format for phone number, it must be xxx-xxx-xxxx");
              $("#phonenumber").val("");
              $("#phonenumber").addClass("error");
          }
          else {
              $("#phonenumber").removeClass("error");
          }
      });


    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            beforeShowDay: disableDates
        }
    );
    document.getElementById('booking').onsubmit = submit;
    function submit(){
      var t1 = document.getElementById('flexRadioDefault6');
      var t2 = document.getElementById('flexRadioDefault7');
      var t3 = document.getElementById('flexRadioDefault8');
      if (t1.checked){
        alert("Your appointment has been booked with Dr. Ric on " + $('#dateInput').val());
      }
      else if (t2.checked){
        alert("Your appointment has been booked with Dr. Kaylee on " + $('#dateInput').val());
      }
      else{
        alert("Your appointment has been booked with Dr. Jeff on " + $('#dateInput').val());
      }
      document.getElementById("close").click();
    };


});
