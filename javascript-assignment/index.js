 window.addEventListener('load',()=>{
     const form =document.querySelector("#todo-form");
     const input=document.querySelector("#new-input");
     const list_element=document.querySelector("#tasks");

     form.addEventListener('submit',(e)=>{
         e.preventDefault();

         const task=input.value;
         if(!task){
             alert("Please add TODO");
             return;
         }
         const task_el=document.createElement("div");
         task_el.classList.add("task");

         const task_content=document.createElement("div");
         task_content.classList.add("content");
        //  task_content.innerText=task;

         task_el.appendChild(task_content);
         const input_element=document.createElement("input");
         input_element.classList.add("text");
         input_element.type="text";
         input_element.value=task;
         input_element.setAttribute("readonly","readonly");
         task_content.appendChild(input_element);
         const actions=document.createElement("div");
         actions.classList.add("actions");

         const edit_button=document.createElement("button");
         edit_button.classList.add("edit");
         edit_button.innerHTML='EDIT';
         const delete_button=document.createElement("button");
         delete_button.classList.add("delete");
         delete_button.innerHTML='DELETE';
         actions.appendChild(edit_button);
         actions.appendChild(delete_button);
         task_el.appendChild(actions);
         list_element.appendChild(task_el);

         input.value="";
         edit_button.addEventListener('click',()=>{
             if(edit_button.innerText.toUpperCase()=='EDIT'){
                input_element.removeAttribute("readonly");
                input_element.focus();
                edit_button.innerText="Save";
             }else{
                 input_element.setAttribute("readonly","readonly");
                 edit_button.innerText="EDIT";
             }       
         });
         delete_button.addEventListener('click',()=>{
             list_element.removeChild(task_el);
         });
     })
 })