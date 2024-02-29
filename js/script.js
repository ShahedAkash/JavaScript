function textStyleBTN(btn){
    if(btn.target.id === "bold"){
        btn.target.classList.toggle('active');
        console.log("bold");
    }
    if(btn.target.id === "italic"){
        btn.target.classList.toggle('active');
        console.log("italic");
    }
    if(btn.target.id === "underline"){
        btn.target.classList.toggle('active');
        console.log("underline");
    }
}

const styleBTN = document.querySelector('.font-Style');
styleBTN.addEventListener('click', textStyleBTN);