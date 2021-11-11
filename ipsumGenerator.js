const chum = {snippets:[
  "mother may I have some wörms",
  "nom",
  "lunge",
  "gill flap",
  "bonk"
]}

window.onload = (event) => {
   setBackgroundImage()
   // TODO: get snippets from Firebase data store,
   // because this is supposed to be a Firebase demo
   const wordPellets = chum.snippets
   const requesterForm = document.getElementById("requester")
   requesterForm.addEventListener("submit", function(event){
      event.preventDefault()
      const count = this.elements['wordCount'].value
      let arrayeyOutput = []
      while(arrayeyOutput.length < count){
         let randomishIndex = Math.floor(Math.random() * wordPellets.length)
         arrayeyOutput.push(`${wordPellets[randomishIndex]} `)
      }
      stringyOutput = arrayeyOutput.join("").split(" ").slice(0, count).join(" ")
      const words = document.querySelector("#words")
      words.innerHTML = stringyOutput
      words.style.padding = "1rem"
   })
}

function setBackgroundImage(){
   // In images directory, there are 11 images named "creatureN" where N is integers 1-11
   const randomish = Math.floor(Math.random() * 11) + 1
   document.getElementById("output").style.background = `url("./images/creatures${randomish}.jpg") center/cover no-repeat`
}