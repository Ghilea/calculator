export default class Check{
    constructor(){}

    input(checking){
        //starts with mul or div?
        const bRegex = new RegExp('^[\*\/]'); 
        
        //end with any of the operators?
        const eRegex = new RegExp('([\*\+\-\/])$'); 

        //operators are next to each other?
        const nToRegex = new RegExp('([\-][\*\/\+\-])|([\+][\*\/\+\-])|([\*][\*\/\+])|([\/][\*\/\+])', 'g');

        //dont have any operators?
        const noOpRegex = new RegExp('[\+|\*|\/|\-]');

        try {
            if ((checking.length < 0) || (checking == '') || (!noOpRegex.test(checking))) {
                throw 'Om grisar kunde flyga... Ge mig något att räkna.';
            }

            if (bRegex.test(checking)) {
                throw 'Du kan inte börja med multiplikation eller division.';
            }

            if (eRegex.test(checking)) {
                throw 'Du kan inte sluta med ett räknesätt.';
            }

            if (nToRegex.test(checking)) {
                throw 'Räknesätt kan inte vara bredvid varandra.';
            }

            /*TODO
            * sub and add need also to be checked with other conditions than mul and div
            */
        }
        catch (error) {
            let elm = $('#error');

            elm.css('display', 'flex');
            elm.html('<p>' + error + '</p>');
            
            setTimeout(function() { 
                elm.fadeOut();
            }, 1500);

            console.log(error);
            return error;
        }
    }
}