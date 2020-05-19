let body = document.querySelector("body");
let section = document.querySelectorAll

function inView (el) {
    var sb = body.getBoundingClientRect();
    var eb = el.getBoundingClientRect();
    // console.log("ebtop" + eb.top);
    // console.log("sbtop" + sb.top);
    // console.log(window.innerHeight);
    // console.log(window.scrollY);
    // console.log("Condicao1: " + (eb.top + eb.height <= sb.top));
    // console.log("Condicao2: " + (eb.top >= sb.top + window.innerHeight ));
    return !((eb.top + eb.height <= 0) || (eb.top >= window.innerHeight ));
}
  
function updateInView() {
    for (x of document.querySelectorAll('section')) {
        // console.log(x);
        if (inView(x)) x.classList.add('inview')
        else x.classList.remove('inview');
    }
}

body.onscroll = updateInView;

updateInView();

document.querySelector('.menu-content').querySelector('i').onclick = () => {
    document.querySelector('.menu-links').classList.remove('menu-inativo');
    document.querySelector('.menu-links').classList.add('menu-ativo');
}
document.querySelector('.menu-links').querySelector('i').onclick = () => {
    document.querySelector('.menu-links').classList.remove('menu-ativo');
    document.querySelector('.menu-links').classList.add('menu-inativo');
}

for (x of document.querySelector('.menu-links').querySelectorAll('a')){
    x.onclick = () => {
        document.querySelector('.menu-links').classList.remove('menu-ativo');
        document.querySelector('.menu-links').classList.add('menu-inativo');
    }
}