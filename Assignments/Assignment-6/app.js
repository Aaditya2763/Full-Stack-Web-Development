let button=document.querySelectorAll('button');
let playBtn=document.querySelector('#playBtn');
let audioElement= new Audio('./Assets/song1.mp3');
let songList=document.querySelector('.songList');
let songPlayIcon=document.querySelector('.songPlayIcon');
let playRange=document.querySelector('#playRange');
let volume='false';
let volumeBtn=document.querySelector('#volumeBtn');
let forwardBtn=document.querySelector('#forwardBtn');
let backwardBtn=document.querySelector('#backwardBtn');
let songIndex=0;
let repeatBtn=document.querySelector('#repeatBtn');
let audioLoop='false';
let i=document.querySelector('i');
let allSongs=document.querySelector('#allSongs');
let firstSong=document.querySelector('#listSong');
let songs=[
       {songname:'song1', id:"1"},
       {songname:'song2', id:"2"},
       {songname:'song3', id:"3"},
       {songname:'song4', id:"4"},
       {songname:'song5', id:"5"},
       {songname:'song6', id:"6"},
]


//Master playBtn code
playBtn.addEventListener('click',function(){
       
          
    if(audioElement.paused|| audioElement.currentTime<=0)
     {
            audioElement.play();
       playBtn.children[0].classList.remove('fa-play-circle');
       playBtn.children[0].classList.add('fa-pause-circle');
     }

else if(audioElement.played || audioElement.currentTime>=0  ){
       audioElement.pause();
       playBtn.children[0].classList.remove('fa-pause-circle');
       playBtn.children[0].classList.add('fa-play-circle');
}


})


// code for progressBar

audioElement.addEventListener('timeupdate', function () {
       const currentProgress = audioElement.currentTime * 100 / audioElement.duration;
       playRange.value = currentProgress;
   });
   
   playRange.addEventListener('change', function () {
       const updatedTime = parseInt(audioElement.duration * playRange.value/ 100);
       audioElement.currentTime = updatedTime;
       
   });
   
   // code for  volumeBtn
   volumeBtn.addEventListener('click',function(){
      
          if(volume=='false'){
          volumeBtn.children[0].classList.remove('fa-volume-up');
          volumeBtn.children[0].classList.add('fa-volume-mute');
          audioElement.muted=true;
          volume='true';
          }
          else {

              volumeBtn.children[0].classList.remove('fa-volume-mute');
              volumeBtn.children[0].classList.add('fa-volume-up');
              audioElement.muted=false;
              volume='false';
              
   }
           
   })

   //code for forwardBtn
   forwardBtn.addEventListener('click',function(){
          if( songIndex>=6){
                 songIndex=0;
          }
          else{
                 songIndex +=1;
             
          }
          audioElement.src=`./Assets/song${songIndex+1}.mp3`;
          audioElement.currentTime=0;
          audioElement.play();
          playBtn.children[0].classList.remove('fa-play-circle');
          playBtn.children[0].classList.add('fa-pause-circle');
                         
   })

   ///code for bakwardBtn 
   backwardBtn.addEventListener('click',function(){
       if( songIndex<=1){
              songIndex=6;
       }
       else{
              songIndex -=1;
          
       }
       audioElement.src=`./Assets/song${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       playBtn.children[0].classList.remove('fa-play-circle');
       playBtn.children[0].classList.add('fa-pause-circle');
          
   })
       
  //code  to repeat song
  repeatBtn.addEventListener('click',function(){
         if(audioLoop=='false'){
 
       audioElement.loop=true;
              repeatBtn.children[0].classList.remove('fa-redo');
              repeatBtn.children[0].classList.add('fa-retweet');
              audioLoop='true';

     
         }
         else{
              audioElement.loop=false;
              repeatBtn.children[0].classList.remove('fa-retweet');
              repeatBtn.children[0].classList.add('fa-redo');
              audioLoop='false';


          }
        
        
 
         
  })

    
   

  
   
   Array.from(document.getElementsByClassName('List')).forEach((element)=>{
       element.addEventListener('click', (e)=>{ 
       
           songIndex=e.target.id;
           audioElement.src = `./Assets/song${songIndex}.mp3`;
           audioElement.currentTime = 0;
           audioElement.play();


           playBtn.children[0].classList.remove('fa-play-circle');
           playBtn.children[0].classList.add('fa-pause-circle');
           
           
       })
   })
   

  

