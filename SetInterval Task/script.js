//// Set Interval Task

var button = document.getElementById("downloadBtn");
    var bar = document.getElementById("bar");

    button.addEventListener("click", function () {

    var progress = 0;

    button.disabled = true;
    button.textContent = "Downloading...";

    bar.style.width = "0%";
    bar.textContent = "0%";

    var timer = setInterval(() => {
    progress++;

    bar.style.width = progress + "%";
    bar.textContent = progress + "%";

      if (progress >= 100) {
          clearInterval(timer);
          bar.textContent = "100%";
          button.textContent = "DOWNLOADED";
          button.disabled = false;
      }

  }, 40);
});
