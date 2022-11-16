console.log("about to fetch an image")


// async/await version

async function fetchImage() {
    const response = await fetch("party.png");
    const blob = await response.blob();
    partyImg.src = URL.createObjectURL(blob);
}

fetchImage()
.then(response => {
  console.log("success")
})
.catch(error => {
  console.error("oh no!");
  console.error(error);
});

async function fetchText() {
  const response = await fetch("sample.txt");
  console.log(response);
  const text = await response.text();
  console.log(text);
  myText.textContent = text;
}

fetchText()
.then(() => {
  console.log("got text")
})
.catch(error => {
  console.error("oh no");
  console.error(error);
});




// regular promises version

// fetch("party.png").then(response => {
//   console.log(response)
//   return response.blob();
// })
// .then(blob => {
//   console.log(blob);
//   partyImg.src = URL.createObjectURL(blob);
// })
// .catch(error => {
//   console.error(error);
// });