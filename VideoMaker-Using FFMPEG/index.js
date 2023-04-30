var videoShow = require('videoshow');
var images = [
    {
        path: './imgs/mask.png',
        loop : 3
    },
    {
        path: './imgs/mask1.png',
        loop : 3
    },
    {
        path: './imgs/mask2.png',
        loop : 4
    },
    {
        path: './imgs/mask3.png',
        loop : 2

    },
    {
        path: './imgs/mask4.png',
        loop : 2
    }
]

var audio = './audio.mp3'
// var audioParams = {
//     fade: true,
//     delay: 2 // seconds
//   }

var videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: false,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
}

videoShow(images, videoOptions)
.audio(audio)
.save("slide_2.mp4")
.on('start', function (command) {
    console.log('ffmpeg process started:', command);
}).on('error', function (err, stdout, stderr) {
    console.error('Error:', err);
    console.error('ffmpeg stderr:', stderr);
}).on('end', function (output) {
    console.error('Video created in:', output);
});