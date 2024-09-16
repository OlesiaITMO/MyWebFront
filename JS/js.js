/*первая функция подразумевает изменение на стандартный, белый оттенок*/
function checkButton(mainElement, section) {
    var section = document.getElementById(section);
    var mainElement = document.getElementById(mainElement);
    if (section.style.display == "none" || section.style.display == "") {
        section.style.display = "block";
        mainElement.style.backgroundColor = "#fff";
    } else {
        section.style.display = "none";
        mainElement.style.backgroundColor = "";
    }
}


function checkButtonWithBlack(mainElement, section) {
    var section = document.getElementById(section);
    var mainElement = document.getElementById(mainElement);
    if (section.style.display == "none" || section.style.display == "") {
        section.style.display = "block";
        mainElement.style.backgroundColor = "#000";
        mainElement.style.color = "#4b9fba";
    } else {
        section.style.display = "none";
        mainElement.style.backgroundColor = "";
    }
}

function checkSecretButton(mainElement, section) {
    var section = document.getElementById(section);
    var mainElement = document.getElementById(mainElement);
    if (section.style.display == "none" || section.style.display == "") {
        section.style.display = "block";
        mainElement.style.backgroundColor = "#000";
        mainElement.style.color = "#4b9fba";
    } else {
        section.style.display = "none";
        mainElement.style.backgroundColor = "";
    }
}
