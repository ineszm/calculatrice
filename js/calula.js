const resultat = document.getElementById('resultat')
let operande_a = 0;
let operation = null;
let currentInput = "";

// La fonction qui doit changer le contenu de resultat pour afficher la currentInput
function render(){
    resultat.textContent = currentInput
}

// La fonction qui se déclenchera sur le clique d'un élément "write"
function writeOnClick(e){
    switch(e.target.id){
        case "C": // si C alors vider la chaine
            currentInput = "" 
            break;
        case "CE": // si CE alors copier la chaine jusqu'à l'avant dernier élement
            currentInput = currentInput.slice(0, currentInput.length -2) 
            break;
        default: // autrement, on ajoute la valeur actuelle à la chaine
            currentInput = currentInput + e.target.textContent 
    }
    render()
}

// La fonction qui se déclenchera sur le clique d'un élément "set"
function setOnClick(e){
    switch(e.target.id){
        case "Delete": // si delete on vide tout
            operande_a = 0
            currentInput = ""
            operation = null
            break;
        default: // autrement on rempli
            operande_a = Number(currentInput)
            currentInput = ""
            operation = e.target.textContent
    }
    render()
}

// La fonction qui se déclenchera sur le clique d'"égal"
function egalOnClick(e){    
    switch(operation){
        case "+":
            currentInput = operande_a + Number(currentInput) + "";
            break;
             
        case "-":
            currentInput = operande_a - Number(currentInput) + "";
            break;
             
        case "*":
            currentInput = operande_a * Number(currentInput) + "";
            break;
             
        case "/":
            currentInput = operande_a * Number(currentInput) + "";
            break;
    }
    render()
}

// La fonction qui va maintenant attacher les events aux éléments du dom
function setDigit(){
    const writeDOM = document.getElementsByClassName("write")
    const setDOM = document.getElementsByClassName("set")

    for(let i = 0; i < writeDOM.length; i++){
        writeDOM[i].addEventListener("click", writeOnClick)
    }

    for(let i = 0; i < setDOM.length; i++){
        setDOM[i].addEventListener("click", setOnClick)
    }

    document.getElementById("egal").addEventListener("click", egalOnClick)
}

setDigit()