/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var obj = {
//    titre: "Kung Fu Panda",
//    anneeProd: 2000,
//    nbLiens: 20,
//    realisateurs: [{nom: "Pixar"}, {nom: "Disney"}],
//    affiche: function () {
//        return this.titre + ", " + this.anneeProd + ", " + this.nbLiens
//                + ", realisateurs: [ " + this.realisateurs[0].nom + ", "
//                + this.realisateurs[1].nom + " ]";
//    }
//};
//
//alert(obj.affiche());

var randomNumber = Math.ceil(Math.random() * 100);

var guess = prompt("Entrez un nombre");
var n = 1;
while (guess != randomNumber) {
    if (guess > randomNumber) {
        guess = prompt(guess + " est trop grand !");
    } else {
        guess = prompt(guess + " est trop petit !");
    }
    n++;
}

var res = "";

switch (n) {
    case 1, 2:
        res = "GG !";
        break;
    case 3, 4:
        res = "Super !";
        break;
    case 5, 6:
        res = "Pas mal !";
        break;
    default :
        res = "T'es mauvais HAHAHAHAHAHAHAHAHAHA !"

}

alert(res + "Le nombre était bien " + randomNumber + " ! Trouvé en " + n + " coups!");