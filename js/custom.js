/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });


  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 5000,
  });
});


// Send email Asynch

$(document).ready(function () {
  var form = $("#form"),
    name = $("#name"),
    phone = $("#phone"),
    email = $("#email"),
    subject = $("#subject"),
    message = $("#message"),
    info = $("#info"),
    submit = $("#submit");

  form.on(
    "input",
    "#name, #phone, #email, #subject, #message",
    function () {
      $(this).css("border-color", "");
      info.html("").slideUp();
    }
  );

  submit.on("click", function (e) {
    e.preventDefault();
    if (validate()) {
      $.ajax({
        type: "POST",
        url: "email.php",
        data: form.serialize(),
        dataType: "json",
      }).done(function (data) {
        if (data.success) {
          name.val("");
          phone.val("");
          email.val("");
          subject.val("");
          message.val("");
          info.html("Message sent, we will get in touch!").css("color", "green").slideDown();
        } else {
          info
            .html("Could not send mail! Sorry!")
            .css("color", "red")
            .slideDown();
        }
      });
    }
  });

  function validate() {
    var valid = true;
    var regex =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(email.val())) {
      email.css("border-color", "red");
      valid = false;
    }
    if ($.trim(subject.val()) === "") {
      subject.css("border-color", "red");
      valid = false;
    }
    if ($.trim(message.val()) === "") {
      message.css("border-color", "red");
      valid = false;
    }

    return valid;
  }
});