
function toggleHeaderFixed() {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 100) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Run on scroll
document.addEventListener("scroll", toggleHeaderFixed);

// Run on page load (fix refresh issue)
window.addEventListener("load", toggleHeaderFixed);


 document.addEventListener("DOMContentLoaded", function () {
  const videoBox = document.getElementById("videoBox");
  if (!videoBox) return; // <-- prevent error if not found

  const video = document.getElementById("myVideo");
  const playBtn = videoBox.querySelector(".play-btn");
  const poster = videoBox.querySelector("img");

  playBtn.addEventListener("click", () => {
    poster.style.display = "none";   // hide poster
    playBtn.style.display = "none";  // hide play button
    video.style.display = "block";   // show video
    video.play();                    // auto-play
  });
});


  
  document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.querySelector('img[src="assets/images/icons/mdrt/upload.svg"]');
  const textInput = document.getElementById("formFileSm");
  const hiddenInput = document.getElementById("hiddenFileInput");

  if (!trigger) {
    console.error("Upload SVG not found");
    return;
  }

  // make image clickable
  trigger.style.cursor = "pointer";

  // open file dialog
  trigger.addEventListener("click", function () {
    hiddenInput.click();
  });

  // show file name in text box
  hiddenInput.addEventListener("change", function () {
    if (this.files.length > 0) {
      textInput.value = this.files[0].name;
    }
  });
});
 



