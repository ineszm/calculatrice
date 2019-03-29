var operande_a;
        var operande_b;
        var operation;
            
        /*
            Cette fonction permet de recuperer les id des touches lors des clics.
            Dans la même fonction nous allons prendre executer les evenement.
        */
            function setDigit(){
                //Variable des boutons à recuperer
                var zero = document.getElementById("zero");
                var un = document.getElementById("un");
                var deux = document.getElementById("deux");
                var trois = document.getElementById("trois");
                var quatre = document.getElementById("quatre");
                var cinq = document.getElementById("cinq");
                var six = document.getElementById("six");
                var sept = document.getElementById("sept");
                var huit = document.getElementById("huit");
                var neuf = document.getElementById("neuf");
                var resultat = document.getElementById("resultat");
                var initZero = document.getElementById("initZero");
                var reset = document.getElementById("reset");
                var del = document.getElementById("modulo");
                var mult = document.getElementById("mult");
                var moins = document.getElementById("moins");
                var plus = document.getElementById("plus");
                var dot = document.getElementById("virgule");
                var division = document.getElementById("division");
                var egal = document.getElementById("egal");
                
                //Évenements des boutons
                //e dans la fonction veut dire evenements
                /*
                La propriété innerHTML renvoie le texte, y compris toutes les balises d'espacement et d'élément interne.

                innerHTML renvoie: "Cet élément a un espacement supplémentaire et contient <span> un élément span </ span>."
                */
                //Fonction pour les chiffres
                zero.onclick = function(e){
                    resultat.textContent = resultat.textContent + "0";
                }
                
                un.onclick = function(e){
                    resultat.textContent = resultat.textContent + "1";
                }
                
                deux.onclick = function(e){
                    resultat.textContent = resultat.textContent + "2";
                }
                
                trois.onclick = function(e){
                    resultat.textContent = resultat.textContent + "3";
                }
                
                quatre.onclick = function(e){
                    resultat.textContent = resultat.textContent + "4";
                }
                
                cinq.onclick = function(e){
                    resultat.textContent = resultat.textContent + "5";
                }
                
                six.onclick = function(e){
                    resultat.textContent = resultat.textContent + "6";
                }
                
                sept.onclick = function(e){
                    resultat.textContent = resultat.textContent + "7";
                }
                
                huit.onclick = function(e){
                    resultat.textContent = resultat.textContent + "8";
                }
                
                neuf.onclick = function(e){
                    resultat.textContent = resultat.textContent + "9";
                }
                
                dot.onclick = function(e){
                    resultat.textContent = resultat.textContent + ".";
                }
                
                //Partie operation
                reset.onclick = function(e){
                    resetCalc();
                }
                
                plus.onclick = function(e){
                    //On saisit le premier operande
                    operande_a = resultat.textContent;
                    //On saisit l'operation
                    operation = "+";
                    //On efface
                    clear();
                }
                
                moins.onclick = function(e){
                    operande_a = resultat.textContent;
                    operation = "-"
                    clear();
                    
                }
                mult.onclick = function(e){
                    operande_a = resultat.textContent;
                    operation = "*";
                    clear();
                }
                division.onclick = function(e){
                    operande_a = resultat.textContent;
                    operation = "/"
                    clear();
                }
                egal.onclick = function(e){
                    operande_b = resultat.textContent;
                    calcul();
                }
            
            }
            //fonction resetCalc, permet d'effacer l'écran 
            function resetCalc(){
                    resultat.textContent = "";
                }
            
            function clear(){
                resultat.textContent = "";
                operande_a = 0;
                operande_b = 0;
                operation = "";
            }
            
            function calcul(){
                var resu = 0;
                switch(operation){
                    case "+":
                        resu = parseFloat(operande_a) + parseFloat(operande_b);
                        break;
                        
                    case "-":
                        resu = parseFloat(operande_a) - parseFloat(operande_b);
                        break;
                        
                    case "*":
                        resu = parseFloat(operande_a) * parseFloat(operande_b);
                        break;
                        
                    case "/":
                        resu = parseFloat(operande_a) / parseFloat(operande_b);
                        break;
                    
                        defaut:
                            break;
                }
                clear();
                resultat.textContent = resu;
            }
            
     