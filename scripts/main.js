import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// const mainContainer = document.querySelector(".main")
// let applicationHTML = "" 
// mainContainer.innerHTML = applicationHTML

