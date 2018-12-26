// $(document).ready(function() {
//   var options = {
//     strings: [
//       "files. ",
//       "tasks. ",
//       "notes. ",
//       "reports. ",
//       "folders. ",
//       "snaps. "
//     ],
//     typeSpeed: 70,
//     loop: true,
//     backDelay: 1000,
//     backSpeed: 60,
//     loopCount: Infinity
//   };
//   var typed = new Typed(".typewriteText", options);

var flicker = function() {
  setTimeout(function() {
    $(".one").css("background-image", "url('Asset 11.svg')");
  }, 1300);
  setTimeout(function() {
    $(".one").css("background-image", "url('Asset 10.svg')");
  }, 1400);
  setTimeout(function() {
    $(".one").css("background-image", "url('Asset 11.svg')");
  }, 1700);
};

flicker();
