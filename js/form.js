$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        age: $("#AgeInput").val(),
        cabin: $("#CabinInput").val(),      };
  
      $.ajax({
        type: "POST",
        url: "https://km31wuco84.execute-api.ap-northeast-2.amazonaws.com/test/titanic-survivor-prediction/titanic",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });