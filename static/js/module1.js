$(function() {
  var success = false;
  var letter = $(".letter__text");
  var start = 97;
  var baseUrl = "../static/images/";

  $(document).on("keypress", function(e) {
    var ascii_val = letter.attr("value");
    var val = String.fromCharCode(start);
    var key = e.key.toLowerCase();
    if (val === key) {
      animRgt();
      setTimeout(animRgt, 500);
      start++;
      setTimeout(() => {
        if (start > 98) {
          showSuccessUI();
        }
        var text = String.fromCharCode(start);
        var newKey = text.toLowerCase();
        $(".letter__text-up").text(text.toUpperCase());
        $(".letter__text-low").text(newKey);
        var newUrl = `${baseUrl}${newKey}.png`;
        document.getElementById("letter-img").setAttribute("src", newUrl);
        document
          .getElementById("letter-img")
          .setAttribute("alt", `image of ${newKey}`);
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
  showSuccessUI = () => {
    var $successEl = `
    <div class="success">
        <div class="star">
            <span> <i class="fa fa-star" style="font-size:48px;"></i></span>
            <span> <i class="fa fa-star" style="font-size:64px;"></i></span>
            <span> <i class="fa fa-star" style="font-size:48px;"></i></span>
            <p class="success-txt">Congratulations</p>
        </div>
    </div>
    <div class="col-sm">
        <button type="button" class="btn btn-primary btn-lg btn-block next-stage-btn">Go to next stage</button>
    </div>`;

    document.getElementById("module1-panel").innerHTML = $successEl;
  };
});
$(".audio-btn").on("click", function() {
  var audio = document.getElementById("player");
  if (audio.paused) {
    audio.play();
    $(".vol-btn__icon").removeClass("fa-volume-up");
    $(".vol-btn__icon").addClass("fa-pause");
  } else {
    audio.pause();
    $(".vol-btn__icon").removeClass("fa-pause");
    $(".vol-btn__icon").addClass("fa-volume-up");
  }
});
