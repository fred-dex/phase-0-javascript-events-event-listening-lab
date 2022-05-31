function addingEventListener() {
}
const main = document.getElementById('main');
// const input = document.getElementById("button")
// input.addingEventListener("click", =>
//     alert("I was clicked")
// )

const input = document.querySelector("input")

input.addEventListener("keydown", function(f) {
    if (f.which === 100) {
      console.log("default prevented")
      return f.preventDefault()
    } else {
      console.log('Not a "g"')
    }
  })