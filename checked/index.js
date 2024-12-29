const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");


mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = `You Subcribed`;
    }
    else{
        subresult.textContent = `You did not subcribe`;
    }

    if(visabtn.checked){
        paymentresult.textContent = `You are paying with Visa Card`;
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent = `You are paying with Mastercard`;
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = `You are paying with Paypal`;
    }
    else{
        paymentresult.textContent = `You must select a payment method`;
    }
}