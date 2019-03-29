function verification(entree) {
    var seulement_ceci ="0123456789[]()-+*%/.";
    for (var i = 0; i < entree.length; i++)
     if (seulement_ceci.indexOf(entree.charAt(i))<0 ) return false;
    return true;
   }
  
   function resultat() {
     var x = 0;
    if (verification(window.document.calculatrice.affiche.value))
       x = eval(window.document.calculatrice.affiche.value);
     window.document.calculatrice.affiche.value = x;
   }
  
   function ajouter(caracteres) {
     window.document.calculatrice.affiche.value =
     window.document.calculatrice.affiche.value + caracteres;
   }
  
   function fonction_speciale(fonction) {
     if (verification(window.document.calculatrice.affiche.value)) {
       if(fonction == "sqrt") {
         var x = 0;
       x = eval(window.document.calculatrice.affiche.value);
       window.document.calculatrice.affiche.value = Math.sqrt(x);
     }
     if(fonction == "pow") {
       var x = 0;
       x = eval(window.document.calculatrice.affiche.value);
       window.document.calculatrice.affiche.value = x * x;
     }
     if(fonction == "log") {
       var x = 0;
       x = eval(window.document.calculatrice.affiche.value);
       window.document.calculatrice.affiche.value = Math.log(x);
     }
    } else window.document.calculatrice.affiche.value = 0
  }