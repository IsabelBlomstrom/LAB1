
const gameState = {
  hasFoundKey: false,
  hasFoundSmallKey: false,
}

function spelaSpel() {
    alert('Välkommen till The Escape From Madness!')
  
    alert('Du vaknar till ljudet av en nyckel som vrids om. När du sätter dig upp ser du att det i rummet finns en byrå och en växt.');

    let decision;
    let decision2;
    let decision3;
    let decision4;
  
    
    let utforska = prompt('Vad vill du utforska, byrån eller växten?').toLowerCase()  
    
    
    
    if (utforska === "byrån" || utforska === "byrå" && gameState.hasFoundSmallKey) {
      byrån()
    } else if (utforska === "växten" || utforska === "växt") {
      hasFoundSmallKey = true
      växten()
    } else {
        alert("Du har ingen nyckel till byrån.")
        spelaSpel()
    }
  
  
    function byrån() {
      alert("I byråns översta låda hittar du en kofot.");
      decision = prompt("Vill du försöka bryta upp dörren?").toLowerCase();

      if(decision === "ja") {
        hallway();
      } else {
        alert("du dog")
        
      }
    }
    

  
    function växten() {
      alert("Du kikar ner i jorden och ser att där ligger en nyckel.");
      decision2 = prompt("Vill du gå till byrån?").toLowerCase();

      if(decision2 === "ja") {
        byrån()
      } else {
        alert("Det var ett dåligt beslut. Du har blivit inlåst av en galen vetenskapsman som \
har experimenterat på dig och nu kommer han tillbaka.\
")
      }
    }
  

    function hallway() {
      alert("Du är i stora hallen. Här finns en stor ytterdörr med fingeravtryckslås, ett akvarium och en till dörr.")
      decision3 = prompt("Vill du gå till ytterdörren, akvariumet eller lilla dörren?").toLowerCase()

      if(decision3 === "ytterdörren" || decision3 === "ytterdörr") {
        alert("Ytterdörren är låst och ditt finger kan inte låsa upp den")
        hallway()
      } else if(decision3 === "akvarium" || decision3 === "akvariumet") {
        gameState.hasFoundKey = true
        alert("Du stoppar ner handen och ser en piraya. Snabbt fiskar du upp den lilla skattkistan, däri ligger en nyckel..")
        hallway()
      } else if(decision3 === "lilla dörren" || decision3 === "liten dörr" || decision3 === "dörren") {
        salongen() 
      }
    }
  
    function salongen() {
      alert("När du kommer in i salongen hittar du en butler fastkedjad vid en stol.")
      decision4 = prompt("Vill du försöka hjälpa butlern att komma loss?").toLowerCase()

      if(decision4 === "ja" && gameState.hasFoundKey) {
        alert("Du hjälper butlern att komma loss och han är mycket tacksam. Han berättar att en galen\
 vetenskapsman har experimenterat på dig, men nu ska han hjälpa dig att komma ut. Han tar dig med\
 tillbaka ut i stora hallen och håller sitt finger på avläsaren. Det klickar till och dörren öppnas.\
 Du är FRI!")

      } else if(decision4 === "nej") {
        alert("Plötsligt stormar en galen vetenskapsman in. Han har experimenterat på dig en tid \
och är väldigt sugen på att fortsätta. Du blir inlåst i rummet igen. Karma.")
      }
      
      else {
        alert("Du har ingen nyckel som passar till låset")
        hallway()
      }
    }
  
  
}
    