$(function() {
  var success = false;
  var letter = $(".letter__text");
  var start = 97;

  $(document).on("keypress", function(e) {
    var ascii_val = letter.attr("value");
    var val = String.fromCharCode(start);
    var key = e.key.toLowerCase();
    if (val === key) {
      animRgt();
      setTimeout(animRgt, 500);
      start++;
      setTimeout(() => {
        var text = String.fromCharCode(start);
        $(".letter__text-up").text(text.toUpperCase());
        $(".letter__text-low").text(text.toLowerCase());
      }, 500);
    } else {
      animWrg();
      setTimeout(animWrg, 1000);
    }
  });
  animRgt = () => {
    letter.toggleClass("rgt");
  };

  animWrg = () => {
    letter.toggleClass("wrg");
  };
});
