'use strict';

document.querySelector('#push').addEventListener('click',(event)=>{

    // input
    const taskText = document.querySelector('#task-text');
    const taskDate = document.querySelector('#task-date');

    if( taskText.value.length == 0 || taskDate.value.length == 0){
        alert("請輸入任務內容與時間")
        return;
    }

    // add taks item
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span class="taskname">
                <label>任務內容：</label>
                <label>${taskText.value}</label>
                <br>
                <label>任務時間：</label>
                <label>${taskDate.value}</label>
            </span>
            <button class="delete">
                X
            </button>
        </div>
    `;    

    const current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){

        current_tasks[i].onclick = function(){
            // this.parentNode.remove();
        }
        
        current_tasks[i].addEventListener('click',(event)=>{
            event.target.parentNode.remove();
            //console.log(event.target.parentNode);
        });

    }

});
