
let toastBox = document.getElementById("toastBox");
let successMsg = "successfully submitted...";
let errorMsg = "Please fix the error...";
let invalidMsg = "Invalid Input please check again...";



function showToast(msg){

    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

}