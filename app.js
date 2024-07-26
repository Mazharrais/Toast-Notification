
let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i>successfully submitted...';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error...';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input please check again...';



function showToast(msg){

    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

}