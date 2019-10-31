
/*function spelaSpel() {
    alert('Du vaknar till ljudet av en nyckel som vrids om.\
    Du sätter dig upp och tittar runt. I rummet finns,\
    förutom dörren, en byrå och en växt.')

    let rumEttSaker = prompt('Vad vill du utforska? Byrån eller växten?').toLowerCase()

    let decision;
    let decision2;

    function byrån() {
        alert('Du går fram till byrån men den är tom, översta lådan är låst.')
        decision = prompt('Vill du gå till växten?').toLowerCase()
    }

    function växten() {
        alert('Du lyfter upp växten och hittar en liten nyckel')
        decition2 = prompt('Vill du gå till byrån?').toLowerCase()
    }

    if(rumEttSaker === 'byrå' || 'byrån') {
        byrån()
    } else if (rumEttSaker === 'växt' || 'växten') {
        växten()
    } else {
        alert('Detta ska inte dyka upp!')
    }

}*/
function spelaSpel() {
    alert('Välkommen till The Escape From Madness!')
  
    alert('Du vaknar till ljudet av en nyckel som vrids om. När du sätter dig upp ser du att det i rummet finns en byrå och en växt.');

  
    
    let utforska = prompt('Vad vill du utforska, byrån eller växten?').toLowerCase()  
    let decision;
    let decision2;
    let decision3;
    let decision4;
    let decision5;
    let decision6;
    let decision7;

    
    if (utforska === "byrån" || utforska === "byrå") {
      byrån();
    } else if (utforska === "växten" || utforska === "växt") {
      växten();
    } else {
        alert("du dog")
    }
  
  
    function byrån() {
      alert("I byråns översta låda hittar du en kofot.");
      decision = prompt("Vill du försöka bryta upp dörren?").toLowerCase();

      if(decision === "ja") {
        hallway();
      } else {
        alert("Du är för långsam och vetenskapsmannen hann tillbaka")
      }
    }
    

  
    function växten() {
      alert("Du kikar ner i jorden och ser att där ligger en nyckel.");
      decision2 = prompt("Vill du öppna dörren med nyckeln?").toLowerCase();

      if(decision2 === "ja") {
        hallway();
      } else {
        alert("Du är för långsam och vetenskapsmannen hann tillbaka")
      }
    }
  

    function hallway() {
      alert("Du är i stora hallen. Här finns en stor ytterdörr med fingeravtryckslås, ett akvarium och en till dörr.")
      decision3 = prompt("Vill du gå till ytterdörren, akvariumet eller lilla dörren?").toLowerCase()

      if(decision3 === "ytterdörren" || decision3 === "ytterdörr") {
        alert("Ytterdörren är låst och ditt finger kan inte låsa upp den")
        hallway()
      } else if(decision3 === "akvarium" || decision3 === "akvariumet") {
        decision3 = true
        alert("Du stoppar ner handen och ser en piraya. Snabbt fiskar du upp den lilla skattkistan, däri ligger en nyckel..")
        hallway()
      } else if(decision3 === "lilla dörren" || decision3 === "liten dörr" || decision3 === "dörren") {
        salongen() 
      }
    }
  
    function salongen() {
      alert("När du kommer in i salongen hittar du en butler fastkedjad vid en stol.")
      decision4 = prompt("Vill du försöka hjälpa butlern att komma loss?").toLowerCase()

      if(decision4 === "ja"/* && decision3 === "akvarium"*/ ) {
        alert("Du hjälper butlern att komma loss och han är mycket tacksam. Han berättar att en galen\
        vetenskapsman har experimenterat på dig, men nu ska han hjälpa dig att komma ut. Han tar dig med\
        tillbaka ut i stora hallen och håller sitt finger på avläsaren. Det klickar till och dörren öppnas.\
        Du är FRI!")

      } else {
        alert("Du har ingen nyckel som passar till låset")
        hallway()
      }
    }
  
  
}
    