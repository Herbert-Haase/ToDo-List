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

const buildHtml = (TITLE, DESCRIPTION, DUEDATE, PRIORITY)=>{
    const row = document.createElement("div");
    row.classList.add("row","g-1","mb-2");

    const colCheckbox = document.createElement("div");
    colCheckbox.classList.add("col-1","d-flex","justify-content-center");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.style.transform = "scale(1.5)";

    const title = document.createElement("div");
    title.classList.add("col-5","border","ps-1");
    title.setAttribute("data-bs-toggle","collapse");
    title.setAttribute("data-bs-target",`#${TITLE}`);
    title.textContent = TITLE;
    title.style.backgroundColor = PRIORITY;

    const dueDate = document.createElement("div");
    dueDate.classList.add("col-5","border","ps-1");
    dueDate.setAttribute("data-bs-toggle","collapse");
    dueDate.setAttribute("data-bs-target",`#${TITLE}`),
    dueDate.textContent = DUEDATE;
    dueDate.style.backgroundColor = PRIORITY;

    const colOption = document.createElement("div");
    colOption.classList.add("col-1");

    const option = document.createElement("i");
    option.style.opacity = "0.5";
    option.classList.add("fa-solid","fa-gear","ps-1");

    const description = document.createElement("div");
    description.setAttribute("id",TITLE);
    description.classList.add("border", "collapse");
    description.textContent = DESCRIPTION;
    description.style.backgroundColor = PRIORITY;

    const content = document.querySelector(".content");
    const createP = document.querySelector(".createP");

    row.appendChild(colCheckbox);
    row.appendChild(title);
    row.appendChild(dueDate);
    row.appendChild(colOption);
    row.appendChild(description);

    colCheckbox.appendChild(checkbox);
    colOption.appendChild(option);

    content.insertBefore(row, createP)
}

buildHtml("TITLE", "DESCRIPTION", "DUEDATE", "PRIORITY");







