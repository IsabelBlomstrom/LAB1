
function spelaSpel() {
    let name = prompt('Vad heter du?')
    let choice1 = prompt('Hej ' + name + '! Du vaknar plötsligt av ljudet av en nyckel som vrids om. I rummet ser du en byrå och en växt. Vill du utforska byrån eller växten?');



    if (choice1 === 'byrån' || 'byrå') {

        alert('Du försöker öppna byrån men den är låst.')
        choice2 = prompt('Vill du gå till växten?')
    

     if (choice2 === 'ja') {
         alert('Du lyfter upp växten och hittar en liten nyckel')
     }
     else if (choice2 === 'nej') {
         alert('Vetenskapsmannen kom tillbaka och fortsatte experimentera på dig')
     }
     }

    else if (choice1 === 'växt' || 'växten') {
        alert('du lyfter upp växten')
        let choice2 = prompt('Vill du lyfta upp växten?')


        if (choice2 === 'ja') {
            alert('Du lyfter upp växten och hittar en liten nyckel')
        }
        else if (choice2 === 'nej') {
            alert('Du är för långsam på detta och vetenskapsmannen kom tillbaka och fortsatte experimentera på dig')
        }
    }


    else {
        alert('Du väntade för länge med att göra något så du dog.')
    }
}









//MIN URSPRUNGLIGA KOD!!!

/*if(wakeUp == true) {
    alert('Du bestämmer dig för att utforska rummet')
    let utforskaRum1 = prompt('Vad vill du utforska först? Dörr, byrå eller växt?').toLowerCase();

   if(utforskaRum1 == 'Dörr'.toLowerCase()); {
    alert('Dörren är låst, efter en stund kommer vetenskapsmannen tillbaka och fortsätter experimentera på dig..');
   }

    else if(utforskaRum1 == 'Byrå'.toLowerCase()); {
    alert('Byrån är låst och du dog');
    }

     else (utforskaRum1 == 'växt'.toLowerCase()); {
        alert('Du lyfter upp växten och hittar en nyckel');
        prompt('vad vill du utforska nu? (dörr, byrå)');
    }
}


if(utforskaRum1 == 'Byrå'.toLowerCase()) {
    alert('Byrån är låst');
    prompt('Vad vill du utforska nu? (Växt, dörr)')
    if(utforskaRum1 == 'Dörr'.toLowerCase());{
    alert('Dörren är låst');
    }
    if(utforskaRum1 == 'växt') {
        alert('Du lyfter upp växten och hittar en nyckel');
    }
}


else {
    alert('Du har varit utsatt för flera experiment och snart kommer vetenskapsmannen tillbaka för att fortsätta. Lycka till med det!');
}
*/
