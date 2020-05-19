function introAnimation () {
    let body = document.querySelector("body");
    document.addEventListener('DOMContentLoaded',function(event){

        var dataText = [ "pwd", "ls -lha", "./meet-me"];
        
        function typeWriter(text, i, fnCallback) {
            if (i < (text.length)) {
                document.querySelector(".test").textContent = 'heliocm@myPC > ' + text.substring(0, i+1);
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

                for (x of document.querySelectorAll('section')) {
                    // console.log(x);
                    if (x.className == 'home inview'){
                        x.classList.add('wait');
                    }
                }
                
                document.querySelector(".intro-content").classList.add("fading-out");
                setTimeout(()=>document.querySelector(".intro-content").classList.add("display-none"), 1000);
                
                document.querySelector(".menu-content").classList.remove("display-none");
                document.querySelector(".menu-content").classList.add("fading-in");
                
                setTimeout(() => {
                    for (x of document.querySelectorAll('section')) {
                        // console.log(x);
                        if (x.className == 'home inview wait'){
                            x.classList.remove('wait');
                        }
                    }
                }, 2000);


                // setTimeout(function() {
                //     StartTextAnimation(0);
                // }, 5000);
            }
            if (typeof dataText[i] !== "undefined"){
                if ((i < dataText[i].length)) {
    
                    typeWriter(dataText[i], 0, function(){
                        console.log(i);

                        var animacao = document.querySelector('.intro-content');

                        if ( i == 0){
                            var output = document.createElement('span');
                            output.textContent = '/home/heliocm';
                            animacao.appendChild(output);
                            document.querySelector('.test').classList.remove('test');
                            var resultado = document.createElement('span');
                            resultado.classList.add('test');
                            animacao.appendChild(resultado);
                        }
                        if ( i == 1){
                            var output0 = document.createElement('span');
                            output0.textContent = 'total 1.0G';
                            animacao.appendChild(output0);
                            var output1 = document.createElement('span');
                            output1.textContent = 'drwxrwxrwx 1 heliocm heliocm 4.0K May 16 02:11  .';
                            animacao.appendChild(output1);
                            var output2 = document.createElement('span');
                            output2.textContent = 'drwxrwxrwx 1 heliocm heliocm 4.0K May 16 02:11  ..';
                            animacao.appendChild(output2);
                            var output3 = document.createElement('span');
                            output3.textContent = '-rwxrwxrwx 1 heliocm heliocm 1.0G May 16 02:11  meet-me';
                            animacao.appendChild(output3);
                            document.querySelector('.test').classList.remove('test');
                            var resultado = document.createElement('span');
                            resultado.classList.add('test');
                            animacao.appendChild(resultado);                            
                        }
                        if ( i == 2){
                            var output = document.createElement('span');
                            output.textContent = 'Loading ... :)';
                            animacao.appendChild(output);
                            document.querySelector('.test').classList.remove('test');
                            var resultado = document.createElement('span');
                            resultado.classList.add('test');
                            animacao.appendChild(resultado);
                        }
                        
                        // var resultado = document.createElement('span.test');
                        // document.querySelector('.intro-content')
    
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