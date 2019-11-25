var modal = document.getElementById("formModal");
var mBtn = document.getElementById("signUpBtn");
var span = document.getElementsByClassName("close")[0];


mBtn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}