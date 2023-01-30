let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_symb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~', "'", '*', "/", ']', '[', ':', ';', '_', '&', '}', '{'];


const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
    let arr = [];
    if (document.querySelector('#arr_num').checked) arr = arr.concat(arr_num);
    if (document.querySelector('#arr_en').checked) arr = arr.concat(arr_en);
    if (document.querySelector('#arr_EN').checked) arr = arr.concat(arr_EN);
    if (document.querySelector('#arr_symb').checked) arr = arr.concat(arr_symb);


    let password = '';
    let password1 = '';
    let password2 = '';
    let password3 = '';
    let password4 = '';
    let password5 = '';
    let password6 = '';
    let password7 = '';

    let passLenght = document.querySelector('#passLenght').value;
    let unipass=[]
    for (let i = 0; i < passLenght; i++) {
        password  += arr[randomInteger(0, arr.length - 1)];
        password1 += arr[randomInteger(0, arr.length - 1)];
        password2 += arr[randomInteger(0, arr.length - 1)];
        password3 += arr[randomInteger(0, arr.length - 1)];
        password4 += arr[randomInteger(0, arr.length - 1)];
        password5 += arr[randomInteger(0, arr.length - 1)];
        password6 += arr[randomInteger(0, arr.length - 1)];
        password7 += arr[randomInteger(0, arr.length - 1)];
    }
    unipass.push(password, password1, password2, password3, password4, password5, password6, password7,)
    console.log(unipass)
    let b = document.getElementById("result");
    unipass.forEach(e => b.innerHTML += "<p>" + e + "</p>");
}

document.querySelector('#pass_start').addEventListener('click', generatePassword);