/*
Concevoir et réaliser un algorithme qui initialise deux variables entières a
et b avec les valeurs
respectives 2 et 3 puis effectue les 4 opérations arithmétiques de base
(addition, soustraction,
multiplication et division) en stockant pour chacune le résultat dans une
variable entière c, et en
affichant ce résultat sous la forme valeur de a - opérateur - valeur de b -
signe ’=’ - valeur de c.
Interpréter le résultat obtenu pour la division.

algorithme Calculatrice()
déclaration de variables :
c = 0
a = 2
b = 3
//addition
Début : 
    c = a+b
    afficher a+" + "+b+" = "+c
Fin

*/



var c = 0, a= 2, b=3;
//ADDITION :
c = a+b;
console.log(a+' + '+b+' = '+c);
//SOUSTRACTION :
c = a-b;
console.log(a+' - '+b+' = '+c);
//MULTIPLICATION :
c = a*b;
console.log(a+' x '+b+' = '+c);
//DIVISION :
c = a / b;
console.log(a+' + '+b+' = '+c);

