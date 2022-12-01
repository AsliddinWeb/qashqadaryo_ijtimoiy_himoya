const check = document.querySelector('#check');
const selectOpt = document.querySelector('#exampleFormControlSelectOpt2');

selectOpt.style.display = "none";


check.addEventListener('change' , function(){
    if (this.checked) {
        selectOpt.style.display = "block"
    }else {
        selectOpt.style.display = "none";
    }
})

