function calBMI(height, weight){
    height=height/100;
    let result=weight/(height*height);
    return result
}
const btn=document.querySelector(".Calculate")    
const het=document.querySelector("#height")
const wet=document.querySelector("#weight")
const res=document.querySelector(".Result")
const man= document.querySelector(".man")
btn.addEventListener('click',function () {
    console.log("inside");
    
    let var1=het.value
    let var2=wet.value
    let result=calBMI(var1,var2)
    res.innerHTML=`BMI will be Displayed here :${result}`;
    if (result<18.5){
        man.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOxcZbuhW4a6OKuDYyEdfReBbpGQIrXKsNA&s"
    
    }
    else if (result>= 18.24 && result<= 24.9){
        man.src="https://img.freepik.com/premium-photo/graphic-designer-isolated-cartoon-character_934475-17520.jpg"
    }
    else if (result>= 25.0 && result<= 29.9){
        man.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloWPmIUMVTOLAWEIYMs-AbosXMFVvQ6epAg&s"
    }
    else if (result>= 30.0 && result<= 34.9){
        man.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNw1YpaEnzZ7MfdBYfMnzfzUFkbNQGLULHg&s"
    }
    else {
        man.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7NVm6w7DVqmd91-wRMTa7ONaEkM1YMYdqg&s"
    }
 })
 