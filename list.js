 const put =document.getElementById("put");
const save =document.getElementById("save");
const ul = document.getElementById("myList");

 let next =false;

 
 
save.onclick =function(){  
  const a = put.value;
    if(!next){ 
      if(a ===""){
        window.alert("Please write something")
      } else { 
      const firstli = ul.querySelector("li");
      firstli.textContent = a;
      next=true;
      }
    } else {
      if(a ===""){
        window.alert("Please write something")
      } else { 
      const newItem = document.createElement('li'); 
      newItem.textContent = a;
      ul.appendChild(newItem);
      }
    }
      put.value = "";
  
 
    
  


}
