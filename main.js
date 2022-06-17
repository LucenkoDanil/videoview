const video = document.getElementById("video");
const params = new URLSearchParams(window.location.search);
video.src = params.get("url");
