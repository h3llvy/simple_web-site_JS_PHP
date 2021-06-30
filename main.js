const butt = document.getElementById("butt");
const input = document.getElementById("input");
const main = document.getElementById("main")
const content = document.getElementById("content")



function sleep(ms) {
    return new Promise((accept) => {
        setTimeout(() => { accept() }, ms);
    })
}

class B {
    constructor(elems) {
        this.elems = elems;
    }
    async miss() {
        for (let elem of this.elems) {
            // alert(1234);
            elem.style.cssText = `animation-name: o_of; 
                animation-duration: 400ms;`;
        }
        await sleep(400);
        for (let elem of this.elems) {
            elem.style.cssText = `
            display:none;`;
        }
    }
    async unmiss() {
        for (let elem of this.elems) {

            elem.style.cssText = `animation-name: o_on; 
            animation-duration: 400ms;`;
        }
        await sleep(400);
        for (let elem of this.elems) {
            elem.style.display = ``;
        }
    }

}

async function change_main(text) {
    const _content = content.cloneNode(true);
    let content_input = new B([input, butt]);
    let content_response = new B([document.getElementById("response")]);

    await content_input.miss();

    document.getElementById("response").innerHTML = text;

    await content_response.unmiss();
    await sleep(2000);
    await content_response.miss();
    await content_input.unmiss();
}

function request(number) {

    let formData = new FormData();
    formData.append("number", number);

    let http = new XMLHttpRequest();

    http.open("POST", "./server.php");

    var data = new FormData();
    http.onload = function() {
        if (http.readyState == 4 && http.status == 200) {
            change_main(http.responseText);
        }
    };

    http.send(formData);
}

function runScript(e) {
    if (e.keyCode == 13) {
        a();
    }
}

function a() {
    let num = parseInt(document.getElementById("input").value);
    document.getElementById("input").value = '';
    request(num);

}