function toggleReadMore(postId) {
  var contentPreview = document.querySelector(
    "#" + postId + " .content-preview"
  );
  var contentFull = document.querySelector("#" + postId + " .content-full");
  var readMoreBtn = document.querySelector("#" + postId + " .read-more-btn");

  // Check if elements were found before accessing their properties
  if (contentPreview && contentFull && readMoreBtn) {
    if (contentFull.style.display === "none") {
      contentPreview.style.display = "none";
      contentFull.style.display = "block";
      readMoreBtn.innerText = "Read Less";
    } else {
      contentPreview.style.display = "block";
      contentFull.style.display = "none";
      readMoreBtn.innerText = "Read More";
    }
  }
}
