function introAnimation () {
    var body = document.querySelector("body");
    document.addEventListener('DOMContentLoaded',function(event){

        var dataText = [ "Frase1", "Frase2", "Frase3", "Frase4"];
        
        function typeWriter(text, i, fnCallback) {
            if (i < (text.length)) {
                document.querySelector(".test").textContent = 'heliocm$ ' + text.substring(0, i+1);
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback)
                }, 100);
            }

            else if (typeof fnCallback == 'function') {
                setTimeout(fnCallback, 700);
            }
        }
        function StartTextAnimation(i) {
            //console.log(dataText[i]);
            if (typeof dataText[i] == "undefined"){
                
                document.querySelector(".intro-content").classList.add("fading-out");
                setTimeout(()=>document.querySelector(".intro-content").classList.add("display-none"), 1000);
                
                document.querySelector(".menu-content").classList.remove("display-none");
                document.querySelector(".menu-content").classList.add("fading-in");

                // setTimeout(function() {
                //     StartTextAnimation(0);
                // }, 5000);
            }
            if (typeof dataText[i] !== "undefined"){
                if ((i < dataText[i].length)) {
    
                    typeWriter(dataText[i], 0, function(){
    
                        StartTextAnimation(i + 1);
                    });
                }
            }

        }
        StartTextAnimation(0);
    });
    body.addEventListener("keydown", clearEffect);
}

function clearEffect() {
    var intro = document.querySelector(".div-intro");
    var paragrafos = document.querySelectorAll(".terminal");

    paragrafos.forEach(function(paragrafo){
        paragrafo.remove();
    });

    var newParagrafo = document.createElement("p");
    var span = document.createElement("span");
    
    newParagrafo.classList.add("terminal");
    span.classList.add("cursor");


    newParagrafo.textContent = "heliocm@myPortfolio:/home/heliocm $"
    span.textContent = "_";

    newParagrafo.appendChild(span);
    intro.appendChild(newParagrafo);

}

introAnimation();