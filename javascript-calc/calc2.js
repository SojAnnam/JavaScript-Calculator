function c(val) {
    document.getElementById("display").value = val;
}
function math(val) {
    document.getElementById("display").value += val;
}
function equal(val) {
    try {
        c(eval(document.getElementById("display").value));
    } catch (e) {
        c(error)

    }

}