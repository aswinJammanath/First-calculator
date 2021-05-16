var check = false
function clickDisplay(val) {
    if(check == true)
    {
        document.getElementById('ScreenOutput').value = ""
        check = false
    }
    document.getElementById('ScreenOutput').value+=val
}

function clearScreen() {
    document.getElementById('ScreenOutput').value = ""
}

function resultClick() {
    var text = document.getElementById("ScreenOutput").value
    var result = eval(text)
    document.getElementById("ScreenOutput").value=result
    check = true
}