var $form = $("#myform"),
  url =
    "https://script.google.com/macros/s/AKfycbxwdLiQmSdAjnw6WcgugMGv1d-Y1j6MqI9WeQgmo964JwCh9dzv/exec";
function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(
    /^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i
  );
  return pattern.test(emailAddress);
}
var $form2 = $("#myform2");
var isopen = false;
$("#submit").on("click", function(e) {
  e.preventDefault();
  mixpanel.track("interactedwithemailbutton");
  if (isopen) {
    if (isValidEmailAddress($("#myforminput")[0].value)) {
      mixpanel.identify($("#myforminput")[0].value);
      mixpanel.people.set({
        $email: $("#myforminput")[0].value,
        $name: $("#myforminput")[0].value.split("@")[0]
      });
      mixpanel.track("sentemail");
      $("#submit i").removeClass("fas fa-paper-plane");
      $("#submit i").addClass("fas fa-sync-alt");
      $("#submit").addClass("spinmyloader");
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: function() {
          $("#myforminput").animate(
            { opacity: 0, width: 0, paddingLeft: 0 },
            800
          );

          $("#submit i").removeClass("fas fa-sync-alt");
          $("#submit").removeClass("spinmyloader");
          $("#submit span").text(":)");
          $("#submit span").css("opacity", 0);
          $("#submit").animate(
            { borderRadius: "5px", padding: "0.5rem 2rem", width: "155px" },
            800,
            "linear",
            function() {
              $("#submit span").text("Thank You :)");
              $("#submit span").animate({ opacity: 1 });
            }
          );
          isopen = false;
          $("#submit").prop("disabled", true);
        }
      });
    } else {
      $("#myforminput")[0].value = "";
      $("#myforminput").attr("placeholder", "Enter Valid Email");
    }
  } else {
    $("#submit span").text("");
    $("#submit i").addClass("fas fa-paper-plane");
    $("#submit").animate({ borderRadius: "100%", padding: "10px 14px" });
    $("#myforminput").animate(
      { opacity: 1, width: "80%", paddingLeft: "7px" },
      700
    );

    isopen = true;
  }
});

$("#submit2").on("click", function(e) {
  e.preventDefault();

  if (true) {
    if (isValidEmailAddress($("#myforminput2")[0].value)) {
      mixpanel.identify($("#myforminput2")[0].value);
      mixpanel.people.set({
        $email: $("#myforminput2")[0].value,
        $name: $("#myforminput2")[0].value.split("@")[0]
      });
      mixpanel.track("sentemail2");
      $("#submit2 i").removeClass("fas fa-paper-plane");
      $("#submit2 i").addClass("fas fa-sync-alt");

      $("#submit2").addClass("spinmyloader");
      var jqxhr2 = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form2.serializeObject(),
        success: function() {
          $("#myforminput2").animate(
            { opacity: 0, width: 0, paddingLeft: 0 },
            800
          );

          $("#submit2 i").removeClass("fas fa-sync-alt");
          $("#submit2").removeClass("spinmyloader");
          $("#submit2 span").text(":)");
          $("#submit2 span").css("opacity", 0);
          $("#submit2").animate(
            { borderRadius: "5px", padding: "0.5rem 2rem", width: "155px" },
            800,
            "linear",
            function() {
              $("#submit2 span").text("Thank You :)");
              $("#submit2 span").animate({ opacity: 1 });
            }
          );
          $("#submit2").prop("disabled", true);
        }
      });
    } else {
      $("#myforminput2")[0].value = "";
      $("#myforminput2").attr("placeholder", "Enter Valid Email");
    }
  }
});
