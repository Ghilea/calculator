export default class Check{
    constructor(){}

    input(checking){

        //regex
        //starts with mul or div?
        const bRegex = new RegExp("^[*/]"); 
        
        //end with any of the operators?
        const eRegex = new RegExp("([*+-/])$"); 

        //operators are next to each other?
        const nToRegex = new RegExp("([-][*/+-])|([+][*/+-])|([*][*/+])|([/][*/+])", "g"); 

        try {
            if (checking.length <= 0) {
                throw 'Om grisar kunde flyga, ge mig något att räkna ut.';
            }

            if (bRegex.test(checking)) {
                throw 'Du kan inte börja med multiplikation eller division.';
            }

            if (eRegex.test(checking)) {
                throw 'Du kan inte sluta med ett räknesätt.';
            }

            if (nToRegex.test(checking)) {
                throw 'Ogiltigt räknesätt bredvid varandra.';
            }

            /*TODO
            
            * sub and add need also to be checked with other conditions than mul and div
            * need to add pattern so users can´t eval with only a digits in place
            * need a pattern so users cant write letters
            */
        }
        catch (error) {
            console.log(error);
            return error;
        }

    }
    
}