const btn = document.querySelector('.btn');
const img = document.querySelector('.img')
const video = document.querySelector('#video');

const constraints = {video: {width: 320, height: 240, facingMode: 'user'}};

function startVideoFromCamera() {
     navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        
        video.srcObject = stream;

     }).catch(error => console.log(error))
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera);

function takeSnapshot(){

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    var ctx = canvas.getContext('2d');

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    var dataUri = canvas.toDataURL('image/jpeg');
    img.src = dataUri;

}

function openGit(){
    console.log('openGit');
}