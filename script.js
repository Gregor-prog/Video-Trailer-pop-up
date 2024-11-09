let play = document.querySelector("#play")
let cancel = document.querySelector("p")
let videoDiv = document.querySelector("#video")
let video = document.querySelector("video")
console.log(video);

play.addEventListener("click", playVideo);
cancel.addEventListener("click", cancelVideo)

function playVideo(){
    videoDiv.classList.toggle("videoInactive")
    videoDiv.classList.toggle("videoActive")
    video.play()
}
function cancelVideo(){
    videoDiv.classList.toggle("videoInactive")
    videoDiv.classList.toggle("videoActive")
    video.pause()
    video.currentTime = 0
}