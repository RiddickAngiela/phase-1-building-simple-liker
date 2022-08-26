//Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById("modal")
modal.classList.add("hidden")
console.log(modal)
console.log()
document.querySelectorAll(".like-glyph").forEach(li => li.addEventListener("click" ,(e)=>{
  mimicServerCall().then(() => {
    let Like = e.target
    if(Like.textContent === FULL_HEART){
      Like.textContent = EMPTY_HEART
      Like.classList.remove('activated-heart')
    }
    else{
      Like.textContent = FULL_HEART
      Like.classList.add(`activated-heart`)
    }
    

  })
  .catch((error) =>{
    modal.textContent = error
    modal.classList.remove("hidden")
    setTimeout(() =>{
      modal.classList.add("hidden")
    },3000
  ) })

}))


-//-----------------------------------------------------------------------------
//Don't change the code below: this function mocks the server response
-//-----------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
