$(document).ready(function(){
  $("#errorText1").hide();
  $("#errorText2").hide();
  $("#errorText3").hide();
  $("#confirmDiv").hide();

  $(document).on('click', '#submitButton', function(){
    $("#errorText1").hide();
    $("#errorText2").hide();
    $("#errorText3").hide();

    if (validate()) {
      $("#formDiv").hide();
      $("#confirmDiv").show();
    }
  });

  function validate() {
    var userName = document.forms["form"]["name"].value;

    var month = $("#month option:selected").text();
    var day = $("#day option:selected").text();
    var year = $("#year option:selected").text();

    var ssn1 = document.forms["form"]["ssn1"].value;
    var ssn2 = document.forms["form"]["ssn2"].value;
    var ssn3 = document.forms["form"]["ssn3"].value;

    var ccNumber = document.forms["form"]["ccn"].value;

    var ccReg = /^\d{4}-\d{4}-\d{4}-\d{4}$|^\d{16}$/;
    var ssnReg1 = /^\d{3}$/;
    var ssnReg2 = /^\d{2}$/;
    var ssnReg3 = /^\d{4}$/;

    var ret = true;

    if (userName === '' || month === 'Month' || month === '-----' || day === 'Day' || day === '---' || year === 'Year' || year === '----'
      || ssn1 === '' || ssn2 === '' || ssn3 === '' || ccNumber === '') {
      $("#errorText1").show();
      ret = false;
    }

    if (!ccReg.test(ccNumber)) {
      $("#errorText2").show();
      ret = false;
    }

    if (!ssnReg1.test(ssn1) || !ssnReg2.test(ssn2) || !ssnReg3.test(ssn3)) {
      $("#errorText3").show();
      ret = false;
    }

    return ret;
  }

});
