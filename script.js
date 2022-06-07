let text =document.querySelector("#text");
let add = document.querySelector(".add");
let list=document.querySelector(".list");
let warning=document.querySelector(".warning");
let clearBtn=document.querySelector("#clearBtn");


    list.addEventListener("click" ,(e)=>{
        if(e.target.classList.contains("checkbox")){
            if(e.target.checked){
                e.target.nextElementSibling.style.textDecoration="line-through";
            }else{
                e.target.nextElementSibling.style.textDecoration="none";
            }
        }
        else if(e.target.classList.contains("remove")){
            (e.target.closest(".line").remove());
            
        }
        // console.log(checkedCount);
        // console.log(totalCount);
        // if(e.target.classList.contains("checkbox")){
        //     e.target.nextElementSibling.classList.toggle("checked")
        // }
        // else if(e.target.classList.contains("remove")){
        //     (e.target.closest(".line").remove())
        // }
    })
    add.addEventListener("click",addition)
    
    text.addEventListener("keydown",(e)=>{
        if(e.code==="Enter"){
            addition()
        }
    });
    function addition(){
        if(text.value){
            let element=document.createElement("div");
            element.classList.add("element")
        element.innerHTML= 
        `<div class="line">
            <div class="subline">
                <input class="checkbox" type="checkbox"> 
                <span>${text.value}</span>
            </div>
            <div><button class="removeBtn"><i class=" remove fa-solid fa-trash-can"></i></button></div>
        </div>`;
        list.appendChild(element);
        text.value="";
    }else{
        alert("Please fill in the blank field")
    }
    };
    
    clearBtn.addEventListener("click",()=>{
        list.innerHTML=""
        confirm("Do you want to remove all content?")
        
    });
