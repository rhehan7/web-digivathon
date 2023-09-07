//Hook up the tweet display

$(document).ready(function () {
  $(".countdown").countdown(
    {
      date: "11 sept 2023 00:00:00",
      format: "on",
    },

    function () {
      // callback function
    }
  );
});
