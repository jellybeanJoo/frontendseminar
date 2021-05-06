let itemList=[];
let inputButton=document.querySelector(".input__button")
inputButton.addEventListener("click",addItem)

function addItem(){
    let itemm=document.querySelector(".item").value
    if (itemm != null){
        itemList.push(itemm);
        document.querySelector(".item").value = ""
        document.querySelector(".item").focus()
    }
    showList()
}
            
function showList() {
    let list="<ul>"
    for (let i=0; i<itemList.length;i++){
        list += "<li>" +itemList[i] + "<span class='close' id="+i+">"+"  \u00D7"+ "</span></li>"
    }
    list+="</ul>"
    document.querySelector(".item__list").innerHTML = list                    
                
    let deleteButtons = document.querySelectorAll(".close")
    for(let k=0; k < i; k++){
        deleteButtons[k].addEventListener("click",deleteItem)
    }
}
function deleteItem() {
    let id=this.getAttribute("id")
    itemList.splice(id,1)
    showList()
}