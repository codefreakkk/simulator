// logic
let battery_cont_js = document.getElementById("battery_cont_js");
battery_cont_js.style.opacity = 0

let switch_cont = document.getElementById("switch_cont");
switch_cont.style.opacity = 0;

let wireline1 = document.getElementById("wireline1");
wireline1.style.display = "none";

let relay_cont = document.getElementsByClassName("r1");
Array.from(relay_cont, (ele) => {
    ele.style.display = "none"
})

let wire2_line = document.getElementById("wire2_line")
wire2_line.style.display = "none"

let wire5_line1 = document.getElementById("wire5_line1")
wire5_line1.style.display = "none"

let motor_png = document.getElementById("motor_png")
motor_png.style.display = "none"

let b1 = document.getElementsByClassName("b1");
Array.from(b1, (ele) => {
    ele.style.display = "none"
})


let b2 = document.getElementsByClassName("b2");
Array.from(b2, (ele) => {
    ele.style.display = "none"
})


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id)
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    let id = document.getElementById(data).id;


    if (id == "relay") {
        let relay_cont = document.getElementsByClassName("r1");
        Array.from(relay_cont, (ele) => {
            ele.style.display = "block"
        })
    }

    if (id == "motor") {
        motor_png.style.display = "block"
        wire5_line1.style.display = "block"
    }

    if (id == "switch") {
        switch_cont.style.opacity = 100;
    }

    // if(id == "battery") {
    //     battery_cont_js.style.opacity = 100
    // }

    const battery_cont = document.getElementById("battery_cont")
    battery_cont.onmouseenter = function () {
        if (id == "battery") {
            battery_cont_js.style.opacity = 100
        }
    }

    const wire4 = document.getElementById("wire4")
    wire4.onmouseenter = function () {
        if (id == "battery") {
            Array.from(b2, (ele) => {
                ele.style.display = "block"
            })
        }
    }

    const wire3 = document.getElementById("wire3")
    wire3.onmouseenter = function () {
        if (id == "battery") {
            Array.from(b1, (ele) => {
                ele.style.display = "block"
            })
        }
    }

    const wire2 = document.getElementById("wire2")
    wire2.onmouseenter = function () {
        if (id == "wire_is_here") {
            wire2_line.style.display = "block"
        }
    }

    const wire1 = document.getElementById("wire1")
    wire1.onmouseenter = function () {
        if (id == "wire_is_here") {
            wireline1.style.display = "block"
        }
    }
}

let start = 0;

function startC() {
    let middleLine1 = document.getElementById("abc");
    if (start == 0) {
        start = 1;
        const relay_toggle = document.getElementById("relay_toggle");
        relay_toggle.style.transform = "rotate(15deg)"
        relay_toggle.style.position = "relative"
        relay_toggle.style.left = "-15px"
        middleLine1.style.transform = "rotate(0deg)";
        middleLine1.style.position = "relative"
        middleLine1.style.top = 0;
        middleLine1.style.left = 0;
        
    } else {
        start = 0;
        const relay_toggle = document.getElementById("relay_toggle");
        relay_toggle.style.transform = "rotate(0deg)"
        relay_toggle.style.position = "relative"
        relay_toggle.style.left = "-5px"
        middleLine1.style.transform = "rotate(-45deg)"
        middleLine1.style.position = "relative"
        middleLine1.style.top = "-14px";
        middleLine1.style.left = "-6px";
    }
}