function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}
setInputFilter(document.getElementById("phonenumber"), function(value) {
    return /^\d*$/.test(value); });

function getNumber(number){
    var value=document.getElementById('phonenumber').value;
    value+=number.getAttribute('value');
    document.getElementById('phonenumber').value=value;
    console.warn("value",value);
    console.warn("number",number.getAttribute('value'));
}
function removeLastIndex(){
    var str= document.getElementById('phonenumber').value
    var newStr = str.substring(0, str.length - 1);
    document.getElementById('phonenumber').value=newStr;
}
function numberCall(){
    var PhoneNumber=document.getElementById('phonenumber').value;
    console.warn("arama: ",PhoneNumber);
    //window.location.href="tel://"+PhoneNumber;
}
function activeButton(id){
    var getElement=document.getElementById(id);
    var classes=getElement.getAttribute("class");
    classes+=" active"
    getElement.setAttribute("class",classes);
    setTimeout(function(){ getElement.setAttribute("class","numpad"); }, 100);
}
function getkeyValue(event) {
    var x = event.which || event.keyCode;
    console.warn("key", x);
    switch (event.which) {
        case 49:
            activeButton(1);
            break;
        case 50:
            activeButton(2);
            break;
        case 51:
            activeButton(3);
            break;
        case 52:
            activeButton(4);
            break;
        case 53:
            activeButton(5);
            break;
        case 54:
            activeButton(6);
            break;
        case 55:
            activeButton(7);
            break;
        case 56:
            activeButton(8);
            break;
        case 57:
            activeButton(9);
            break;
        case 48:
            activeButton(0);
            break;
        case 42:
            activeButton('*');
            break;
        case 35:
            activeButton('#');
            break;
        case 8:
            activeButton('backspace');
            break;
        default:
    }
}
