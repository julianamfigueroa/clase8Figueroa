let arr_albums = [];
let new_cancion;
let lista_albums = [];
let lista_temas = [];
let l_count;
let l_album;
let l_cancion; 

class Album{
    constructor(id_album, nombre, temas){
        this.id_album = id_album;
        this.nombre = nombre;
        this.temas = temas;
    }
}

class Tema{
    constructor(id_cancion, nombre, puntaje){
        this.id_cancion = id_cancion;
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
}

arr_albums = [[1, "Taylor Swift (Debut)", ["Picture to Burn", "Our Song", "Invisible"]], 
              [2, "Fearles", ["Fearless", "White Horse", "Untouchable"]],
              [3, "Speak Now", ["Dear John", "Mean", "Enchanted"]], 
              [4, "Red", ["Red", "Girl At Home", "All Too Well"]], 
              [5, "1989",["Style", "Wildest Dreams", "This Love"]], 
              [6, "Reputation", ["Delicate", "Getaway Car", "Call It What You Want"]], 
              [7, "Lover", ["The Man", "Paper Rings", "Cornelia Street"]], 
              [8, "folklore", ["the 1", "seven", "august"]], 
              [9, "evermore", ["willow", "gold rush", "coney island"]]]; 

for (let i = 0; i < arr_albums.length ; i++){
    lista_temas = [];
    for (let x = 0; x < arr_albums[i][2].length ; x++){
        new_cancion = new Tema((x+1), (arr_albums[i][2][x]), 0);
        lista_temas.push(new_cancion);
    }
    let new_album = new Album((i+1), (arr_albums[i][1]), lista_temas);
    lista_albums.push(new_album);
}

 
function verLista(){
    let l_container = document.getElementById("lista-temas");
    l_container.innerHTML = "";

    let ul = document.createElement("ul");
    let li; 
    let l_tema;

    for (let i = 0; i < lista_albums.length ; i++){
        l_count = lista_albums[i].temas.length;
        for (let z = 0; z < l_count; z++) {
            l_tema = lista_albums[i].temas[z].nombre; 
            li = document.createElement("li");
            li.innerText = l_tema;
            ul.append(li); 
        }
    }
    l_container.appendChild(ul);
    ul.className = "lista";

    let l_new = document.getElementById("divagregar");
    l_new.innerHTML = "";
    let l_input1 = document.createElement("input");
    l_input1.placeholder = "Nro de Album (1 al 9)";
    l_input1.className = "input";
    l_input1.id = "wnro";
    l_input1.type = "number";
    l_new.append(l_input1); 

    let l_input2 = document.createElement("input");
    l_input2.placeholder = "Nombre del Tema";
    l_input2.className = "input";
    l_input2.id = "wcancion";
    l_new.append(l_input2); 

    
    let l_btn = document.createElement("button");
    l_btn.innerText = "Agregar";
    l_btn.className = "button";
    l_new.append(l_btn); 

    l_btn.onclick = function valida(){
        let werr = "N";
        if (parseInt(l_input1.value) < 0 || parseInt(l_input1.value) > 9) {
            alert("Dato Inválido. Ingrese un número del 1 al 9");
            werr = "S";
        }
        if (l_input1.value == "") {
            alert("Dato Obligatorio.");
            werr = "S";
        }
        if (l_input2.value == "") {
            alert("Dato Obligatorio.");
            werr = "S";
        }
        if (werr == "N"){
            l_album = parseInt(l_input1.value) - 1;
            l_cancion= l_input2.value;
            l_count = lista_albums[l_album].temas.length;
            new_cancion = new Tema((l_count+1), l_cancion, 0);
            lista_albums[l_album].temas.push(new_cancion);
            alert("Cancion agregada! Haga Click en Ver para actualizar la lista.");
        }   
    }
}

