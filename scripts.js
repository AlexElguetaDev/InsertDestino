function draw_destinos(){
  let allDestinos =[
    "Chanchito 1",
    "Chanchito 2",
    "Chanchito 3",
    "Chanchito 4",
    "Chanchito 5",
  ]
    for(let i = 0; i < allDestinos.length; i++){
      InsertDestino(allDestinos[i])
    }
}

function InsertDestino(destinosName){
  const selectElemend = document.getElementById("destinos") //
  let htmlToInser = `<option> ${destinosName} </option>`
  selectElemend.insertAdjacentHTML("beforeend", htmlToInser)
}

draw_destinos()