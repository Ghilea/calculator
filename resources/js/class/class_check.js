export default class Check{
    constructor(){}

    input(checking){

        //regex
        //börjar det med gånger eller multiplikation?
        const bRegex = new RegExp("^[*/]"); 
        
        //slutar det med något av räknesätten?
        const eRegex = new RegExp("([*+-/])$"); 

        //är något räknesätt bredvid varandra?
        const nToRegex = new RegExp("([-][*/+-])|([+][*/+-])|([*][*/+])|([/][*/+])", "g"); 

        try {
            if (checking.val().length <= 0) {
                throw 'Om grisar kunde flyga, ge mig något att räkna ut.';
            }

            if (bRegex.test(checking.val())) {
                throw 'Du kan inte börja med multiplikation eller division.';
            }

            if (eRegex.test(checking.val())) {
                throw 'Du kan inte sluta med ett räknesätt.';
            }

            if (nToRegex.test(checking.val())) {
                throw 'Ogiltigt räknesätt bredvid varandra.';
            }

        }
        catch (error) {
            console.log(error);
            return;
        }

    }
    
}