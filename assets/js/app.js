
var cl=console.log;

const selectColor= document.getElementById('selectColor');
const alldivs= [...document.querySelectorAll(".all")];


const onColorChange = (eve) =>{
    let selectedColor = eve.target.value;
    // cl(selectedColor);
 
     alldivs.forEach(div => div.classList.add('d-none'));

     let selectedDiv = [...document.querySelectorAll('.'+selectedColor)];
    //   cl(selectedDiv)

    selectedDiv.forEach(div => div.classList.remove('d-none'))

}


selectColor.addEventListener('change', onColorChange);