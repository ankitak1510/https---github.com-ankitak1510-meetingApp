document.addEventListener("DOMContentLoaded", () => {
    var but = document.getElementById("but");
    var video = document.getElementById("vid");
    var mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    but.addEventListener("click", () => {

        // Accessing the user camera and video.
        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {

                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
    });
});