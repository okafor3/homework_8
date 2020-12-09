// // UIkit CSS
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/css/uikit.min.css" />

// // UIkit JS
// <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit-icons.min.js"></script>


var togglestate = "normal"

function toggleButton(togglebutton) {

    let b1 = document.getElementById("button1")
    let b2 = document.getElementById("button2")
    let c = document.getElementById("colorbox")
    let d = document.getElementById("colorbox2")


    if(togglestate == "normal"){
        togglestate = "colorblind";
        b1.classList.add("toggled");
        b2.classList.remove("toggled");
    }
    else{
        togglestate ="normal";
        b2.classList.add("toggled");
        b1.classList.remove("toggled");
    }

    if(togglestate == "normal" && togglebutton == "normal"){
        b1.classList.add("toggled");
        b2.classList.remove("toggled");
    }
    
    if(togglestate == "colorblind" && togglebutton == "colorblind"){
        b2.classList.add("toggled");
        b1.classList.remove("toggled");
    }

    if(togglebutton == "colorblind"){
        c.classList.remove("normal");
        c.classList.add("colorblind");
        d.classList.remove("normal");
        d.classList.add("colorblind2");
    }
    
    if(togglebutton == "normal"){
        c.classList.remove("colorblind");
        c.classList.add("normal");
        d.classList.remove("colorblind2");
        d.classList.add("normal");
    }

    console.log(togglebutton)
}

function transferDetails() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    let page_title = urlParams.get("page_title")  
    var more = JSON.parse(localStorage.getItem(page_title));

    document.getElementById("head").innerHTML = more.header;
    document.getElementById("sum").innerHTML = more.summary;
    console.log(more)

    document.getElementById("colorbox").classList.add(more.id);
    document.getElementById("colorbox2").classList.add(more.id);

    document.getElementById("fact").innerHTML = more.funfact;

}


class Eyes{
    constructor (fact){
      this.fact = fact;
    }
  }
  
function funFact() {
    var fact = document.getElementById("fact").value;
    var website = new Eyes(fact);

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    let page_title = urlParams.get("page_title")
    console.log(page_title)

    if(page_title=="redgreen"){
        console.log('ije');
    }
}

