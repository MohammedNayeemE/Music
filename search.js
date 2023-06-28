const dabba = document.querySelector(".container");
//const btn = document.querySelectorAll("button");
const next = document.querySelector(".nxt");
//const prev = document.querySelector(".prv");
const add = document.querySelector(".add");
const viwerList = document.querySelector(".view-list");
const inputBox = document.querySelector(".inputbox");
const butt = document.querySelector(".buttons");
const searchButton = document.querySelector(".search");
const searchName = document.getElementById("searchName");

const MyPlayList = [];
const SavedSongs = [];
const LikedSongs = [];

const arr = [
    {
      song : `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2WH4oy1SYppZrcdgKwSA0j?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "Make It Right"
    },
    {
      song:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4a9tbd947vo9K8Vti9JwcI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "Boy With Luv"
    },
    {
      song:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5YMXGBD6vcYP7IolemyLtK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "Euphoria"
    },{
      song:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1WjGvMbHE23jEipydV80Mu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "Fake Love"
    },{
      song:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0fZRNhPJ4AGmwY7rkpdbqK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "ON"
      
    },{
      song:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/54azQnjuDYDFfImXimGFsA?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "Idol"

    },{
      song:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/37nOpaUof3d4Xsmr6moAiI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "Magic shop"

    },{
      song:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1mWdTewIgB3gtBM3TOSFhB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
      Name : "Butter"

    }
    
]
let previousbuttoncheker = null;
function createPrevButton(){
  if(previousbuttoncheker){
    return;
  }
  
  const PreviousButton = document.createElement("button");
  PreviousButton.textContent = 'prev';
  PreviousButton.classList.add("btn");
  PreviousButton.classList.add("prv");
  butt.appendChild(PreviousButton);
  PreviousButton.addEventListener('click',PrevbuttonFunction);
  previousbuttoncheker = PreviousButton;

  //console.log(PreviousButton.classList);

}
let counter =0;
next.addEventListener('click',()=>{
  if(counter == arr.length) counter =0;
  createPrevButton();
  createMusic(counter);
  counter++;
  console.log(counter);

})

let prediv = null;
function createMusic(n){
  if(prediv) dabba.removeChild(prediv);

  let holder = document.createElement("div");
  holder.innerHTML = arr[n].song;
  dabba.appendChild(holder);
  next.textContent = 'Next';
  createPrevButton();
  prediv = holder;

}


function PrevbuttonFunction(){
  
   if(counter < 0) counter = arr.length-1;
   if(prediv) dabba.removeChild(prediv);

  let holder2 = document.createElement("div");
  holder2.innerHTML = arr[counter].song;
  dabba.appendChild(holder2);
  
  prediv = holder2;
  counter--;
  console.log(counter);
 }


function displayList() {
 
  viwerList.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let songNameHolder = document.createElement("li");
    viwerList.appendChild(songNameHolder);

    songNameHolder.textContent = arr[i].Name;

    
    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    songNameHolder.appendChild(buttonsContainer);

    
    const buttons = ["Like", "Delete", "Save"];
    for (let j = 0; j < buttons.length; j++) {
      let button = document.createElement("button");
      button.classList.add("feedButtons");
      button.textContent = buttons[j];
      buttonsContainer.appendChild(button);

      
      button.addEventListener("click", buttonClickHandler);
    }
  }
}

function buttonClickHandler(event){
   const buttonTxt = event.target.textContent;
   const listItemName = event.target.parentNode.parentNode.firstChild.textContent;
   const matchedObject = arr.find(obj => obj.Name === listItemName);
   switch(buttonTxt){
    case "Like":
      LikedSongs.push(matchedObject);
      break;
    case "Save":
      SavedSongs.push(matchedObject);
      break;
    case "Delete":
      let index = arr.indexOf(matchedObject);
      arr.splice(index,1);
      const listItem = event.target.parentNode.parentNode;
      listItem.parentNode.removeChild(listItem);
      break;
   }
}






























  add.addEventListener('click',()=>{
      const NameOfSong = document.getElementById("sname").value;
      if(NameOfSong.length == 0) alert("YOU THINK I AM FOOL");
      let obj = {
        song : `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5QDLhrAOJJdNAmCTJ8xMyW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        Name : NameOfSong
      }

      arr.push(obj);
      document.getElementById("sname").value = "";
      //displayList();

  })

  const showButton = document.createElement("button");
  showButton.textContent = 'Show';
  showButton.classList.add("btn");
  showButton.classList.add("shw");
  butt.appendChild(showButton);
  
  let check = false;
 
  showButton.addEventListener('click', () => {
    if (check) {
      showButton.textContent = 'Close';
      viwerList.classList.remove("hide");
    } else {
      showButton.textContent = 'Show';
      viwerList.classList.add("hide");
      displayList(); 
    }
    check = !check; 
  });

  
  
  function shuffleArray(array) {
    
  }


  const shuffleButton = document.createElement("button");
  shuffleButton.textContent = 'Shuffle';
  shuffleButton.classList.add("btn");
  shuffleButton.classList.add("sfb");
  butt.appendChild(shuffleButton);
  
  shuffleButton.addEventListener('click', () => {
    shuffleArray(arr);
  });
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    counter = 0; // Reset the counter after shuffling
  }

   let SearchBox = document.querySelector(".search-bar");

   let Selectitems = document.createElement("select");
   SearchBox.appendChild(Selectitems);
    

   

   

  const Options = [
    {
      value:"alloftheabove",
      text:"All of The Above"
    },
    
    {value:"MyPlayList",
    text:"My play List"
    },
    {
      value:"Saved",
      text:"Saved"
    },
    {
      value:"Liked Songs",
      text:"Liked Songs"
     },
                    
    ];

  for(let i=0;i<Options.length;i++){
     option = document.createElement("option");
     option.value = Options[i].value;
     option.textContent = Options[i].text;
     Selectitems.appendChild(option);
  }


  


  

  let selector = document.querySelector("select");
 
   
  searchButton.addEventListener('click',()=>{

    
    let selectedOption = selector.selectedOptions;
    let SelectedValue = selectedOption[0].value;



    if(SelectedValue === 'alloftheabove') search(arr);
    else if(SelectedValue === 'MyPlayList') search(MyPlayList);
    else if(SelectedValue === 'Saved') search(SavedSongs);
    else search(LikedSongs);
   

    
  })
  function search(array) {
    // Get the search term from the input field
    const searchInput = searchName.value;
    
    // Convert the search term to lowercase and remove leading/trailing spaces
    const searchTerm = searchInput.toLowerCase().trim();
    
    // Filter the array of songs based on the search term
    const filteredSongs = array.filter(function(song) {
      // Convert the song name to lowercase for case-insensitive matching
      const songName = song.Name.toLowerCase();
      
      // Check if the song name includes the search term
      console.log(songName.includes(searchTerm));
      return songName.includes(searchTerm);
    });
    console.log(filteredSongs);
    console.log(filteredSongs.length);

    // Display the filtered songs
    if(filteredSongs.length ===0){
      displayNoneMessage();
    }
    else{
    displayFilteredSongs(filteredSongs);
    }
  }
  function displayFilteredSongs(songs) {
    viwerList.innerHTML = "";
    


    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      const songNameHolder = document.createElement("li");
      viwerList.appendChild(songNameHolder);
      songNameHolder.textContent = song.Name;
  
      const buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("buttons-container");
      songNameHolder.appendChild(buttonsContainer);
  
      const buttons = ["Like", "Delete", "Save"];
      for (let j = 0; j < buttons.length; j++) {
        const button = document.createElement("button");
        button.classList.add("feedButtons");
        button.textContent = buttons[j];
        buttonsContainer.appendChild(button);
  
        button.addEventListener("click", buttonClickHandler);
      }
    }
  }
  function displayNoneMessage(){
    viwerList.innerHTML = "";
    let message = document.createElement("li");
    message.textContent = "Nothing is found";
    viwerList.appendChild(message);
  }
  
  
 

  const feedBackButtons = document.querySelectorAll(".feedButtons");


  
