console.log("Welcome");

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songIems= Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs = [
    {songName: "Pravi Hip Hop",filePath:"songs/1.mp3",coverPath:"images/cover.jpg"},
    {songName: "Konstantno kretanje",filePath:"songs/2.mp3",coverPath:"images/cover.jpg"},
    {songName: "Kocija od mesa",filePath:"songs/3.mp3",coverPath:"images/cover.jpg"},
    {songName: "Volim",filePath:"songs/4.mp3",coverPath:"images/cover.jpg"},
    {songName: "Nedodirljiv",filePath:"songs/5.mp3",coverPath:"images/cover.jpg"},
    {songName: "Mostarski stil",filePath:"songs/6.mp3",coverPath:"images/cover.jpg"},
    {songName: "Mala maci",filePath:"songs/7.mp3",coverPath:"images/cover.jpg"},
    {songName: "Podrumski sound",filePath:"songs/8.mp3",coverPath:"images/cover.jpg"},
]

songIems.forEach((element,i) => {
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        masterSongName.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=7){
    songIndex=0;
}else{
    songIndex+=1;
}
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=7;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
    })