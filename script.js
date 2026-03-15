const start = document.getElementById('start_button')
const homescreen = document.getElementById('homescreen')
const thankYou = document.getElementById('thankYou')

const game = document.getElementById('game_menu')
const btn = document.getElementById('btn')
const imgLeft = document.getElementById('random_image1')
const imgRight = document.getElementById('random_image2')
//Store path to images in an array
const srcArray = ['Cat Holder/Cat_1.jpg', 'Cat Holder/Cat_2.jpg', 'Cat Holder/Cat_3.jpg', 'Cat Holder/Cat_4.jpg', 'Cat Holder/Cat_5.jpg', 'Cat Holder/Cat_6.jpg', 'Cat Holder/Cat_7.jpg', 'Cat Holder/Cat_8.jpg', 'Cat Holder/Cat_9.jpg', 'Cat Holder/Cat_10.jpg', 'Cat Holder/Cat_11.jpg', 'Cat Holder/Cat_12.jpg', 'Cat Holder/Cat_13.jpg', 'Cat Holder/Cat_14.jpg', 'Cat Holder/Cat_15.jpg', 'Cat Holder/Cat_16.jpg', 'Cat Holder/Cat_17.jpg', 'Cat Holder/Cat_18.jpg', 'Cat Holder/Cat_19.jpg', 'Cat Holder/Cat_20.jpg', 'Cat Holder/Cat_21.jpg', 'Cat Holder/Cat_22.jpg', 'Cat Holder/Cat_23.jpg', 'Cat Holder/Cat_24.jpg', 'Cat Holder/Cat_25.jpg', 'Cat Holder/Cat_26.jpg', 'Cat Holder/Cat_27.jpg', 'Cat Holder/Cat_28.jpg', 'Cat Holder/Cat_29.jpg', 'Cat Holder/Cat_30.jpg', 'Cat Holder/Cat_31.jpg', 'Cat Holder/Cat_32.jpg']



//Hide homescreen and display the game menu
start.addEventListener('click', event => {
  homescreen.style.display = 'none';
  game.style.display = 'block';
});


// Thank you tarkh from stack overflow for this
// Group your set of images randomly
const groupRandom = ([...arr]) => {
  // Suffle array method
  const shuffle = (a) => {
    for(let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  // Re-group
  const regroup = ([...arr]) => {
    let newArr = [], temp = [];
    for(let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
      if(temp.length === 2) newArr.push(temp), temp = [];
    }
    return newArr;
  }
  
  // Do suffle and regroup
  arr = shuffle(arr);
  arr = regroup(arr);
  return arr;
}

const round_1 = groupRandom(srcArray);

console.log(round_1);


function getRandomImage() {

  if(round_1.length === 0) {
    game.style.display = 'none';
    thankYou.style.display = 'block';
    return false;
  }

  
  // Pop new group of images from array
  var newGroup = round_1.pop();
  // Paste new images to img tags
  imgLeft.src = newGroup[0];
  imgRight.src = newGroup[1];

}

//Text saying "Left wins!" or "Right wins!"
const winnerLeft = document.getElementById('winnerLeft')
const winnerRight = document.getElementById('winnerRight')

//Clicking the left image
imgLeft.addEventListener('click', () => {

  winnerLeft.style.display='block';

  //The image moves left to the center
  //"loser" makes it fade away
  imgLeft.classList.add("winnerLeft");
  imgRight.classList.add("loser");

  //disabling the mouse
  imgLeft.classList.add("disabled");
  imgRight.classList.add("disabled");

  setTimeout(()=>{
    winnerLeft.style.display='none';

    //enabling the mouse
    imgLeft.classList.remove("disabled");
    imgRight.classList.remove("disabled");
    
    //making the moved image go to its original place
    //the other image fade back
    imgLeft.classList.remove("winnerLeft");
    imgRight.classList.remove("loser");

    getRandomImage();
  },2000) //wait for 2 seconds then do all the stuff listed inside setTimeout
});

//Clicking the right image
imgRight.addEventListener('click', () => {

  winnerRight.style.display='block';

  imgLeft.classList.add("loser");
  imgRight.classList.add("winnerRight");

  imgLeft.classList.add("disabled");
  imgRight.classList.add("disabled");

  setTimeout(()=>{
    winnerRight.style.display='none';

    imgLeft.classList.remove("disabled");
    imgRight.classList.remove("disabled");
    
    imgLeft.classList.remove("loser");
    imgRight.classList.remove("winnerRight");

    getRandomImage();
  },2000)
});

document.addEventListener("DOMContentLoaded", function() { getRandomImage(); });
//tbh I give up on trying to make it a bracket system, then I pivoted to making a left or right wins thingy
