class CreateProject{
    constructor(title, description, duedate, priority){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
}

const input = (()=>{
    function cleanInput(){
        document.querySelector("#title").value = "";
        document.querySelector("#description").value = "";
        document.querySelector("#duedate").value = "";
        document.querySelector("#priority").value = "";
    }

    function getInput(){
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const duedate = document.querySelector("#duedate").value;
        const priority = document.querySelector("#priority").value;

        cleanInput();
    
        return [title,description,duedate,priority];
    }
    return {
            cleanInput, 
            getInput
    }
})()

const project = (()=>{

    const projectList = [];

    function saveProject(){
        const projectData = input.getInput();
    
        const project = new CreateProject(projectData[0],projectData[1],projectData[2],projectData[3]);
        projectList.push(project);
        console.log(projectList);
    }

    return { saveProject }
})()

const save = document.querySelector(".save");
save.addEventListener("click",project.saveProject);

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click",input.cleanInput);






