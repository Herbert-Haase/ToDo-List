/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
        document.querySelector(".error").textContent = "";
        document.querySelector(".save").removeAttribute("disabled");

    }

    function getInput(){
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const duedate = document.querySelector("#duedate").value;
        const priority = document.querySelector("#priority").value;

    
        return [title,description,duedate,priority];
    }

    // function showERROR(){
    //     const ERROR = document.querySelector(".error");
    //     const save = document.querySelector(".save");

    //     save.createAttribute("disabled");
    //     ERROR.textContent = "Project with this title already exist";
    // }

    return {
            cleanInput, 
            getInput,
            // showERROR
    }
})()

const project = (()=>{

    const projectList = [];

    function checkForDoubles(input){
        return projectList.some((item)=>item.title === input[0]);
    }

    function saveProject(){
        const projectData = input.getInput();

        input.cleanInput();
    
        const project = new CreateProject(projectData[0],projectData[1],projectData[2],projectData[3]);
        projectList.push(project);
        console.log(projectList);
    }

    return { saveProject,
             checkForDoubles
    }
})()

const save = document.querySelector(".save");
save.addEventListener("click",project.saveProject);

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click",input.cleanInput);

// const title = document.querySelector("#title");
// title.addEventListener("blur",validateTitle);

// function validateTitle(){
//     if(project.checkForDoubles(this.value)){
//         input.showERROR();
//         return;
//     }
//     document.querySelector(".save").removeAttribute("disabled");
// }




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

buildHtml("TITLE", "DESCRIPTION", "DUEDATE", "white");








/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE1BQU07QUFDcEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3JlYXRlUHJvamVjdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNvbnN0IGlucHV0ID0gKCgpPT57XG4gICAgZnVuY3Rpb24gY2xlYW5JbnB1dCgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXZlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXQoKXtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcblxuICAgIFxuICAgICAgICByZXR1cm4gW3RpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHldO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dFUlJPUigpe1xuICAgIC8vICAgICBjb25zdCBFUlJPUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XG4gICAgLy8gICAgIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmVcIik7XG5cbiAgICAvLyAgICAgc2F2ZS5jcmVhdGVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAvLyAgICAgRVJST1IudGV4dENvbnRlbnQgPSBcIlByb2plY3Qgd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RcIjtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xlYW5JbnB1dCwgXG4gICAgICAgICAgICBnZXRJbnB1dCxcbiAgICAgICAgICAgIC8vIHNob3dFUlJPUlxuICAgIH1cbn0pKClcblxuY29uc3QgcHJvamVjdCA9ICgoKT0+e1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yRG91YmxlcyhpbnB1dCl7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdC5zb21lKChpdGVtKT0+aXRlbS50aXRsZSA9PT0gaW5wdXRbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVQcm9qZWN0KCl7XG4gICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gaW5wdXQuZ2V0SW5wdXQoKTtcblxuICAgICAgICBpbnB1dC5jbGVhbklucHV0KCk7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdChwcm9qZWN0RGF0YVswXSxwcm9qZWN0RGF0YVsxXSxwcm9qZWN0RGF0YVsyXSxwcm9qZWN0RGF0YVszXSk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzYXZlUHJvamVjdCxcbiAgICAgICAgICAgICBjaGVja0ZvckRvdWJsZXNcbiAgICB9XG59KSgpXG5cbmNvbnN0IHNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmVcIik7XG5zYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHByb2plY3Quc2F2ZVByb2plY3QpO1xuXG5jb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixpbnB1dC5jbGVhbklucHV0KTtcblxuLy8gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuLy8gdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIix2YWxpZGF0ZVRpdGxlKTtcblxuLy8gZnVuY3Rpb24gdmFsaWRhdGVUaXRsZSgpe1xuLy8gICAgIGlmKHByb2plY3QuY2hlY2tGb3JEb3VibGVzKHRoaXMudmFsdWUpKXtcbi8vICAgICAgICAgaW5wdXQuc2hvd0VSUk9SKCk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICB9XG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXZlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuLy8gfVxuXG5cblxuXG5jb25zdCBidWlsZEh0bWwgPSAoVElUTEUsIERFU0NSSVBUSU9OLCBEVUVEQVRFLCBQUklPUklUWSk9PntcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIsXCJnLTFcIixcIm1iLTJcIik7XG5cbiAgICBjb25zdCBjb2xDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29sQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNvbC0xXCIsXCJkLWZsZXhcIixcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuNSlcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiY29sLTVcIixcImJvcmRlclwiLFwicHMtMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLFwiY29sbGFwc2VcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIixgIyR7VElUTEV9YCk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBUSVRMRTtcbiAgICB0aXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBQUklPUklUWTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImNvbC01XCIsXCJib3JkZXJcIixcInBzLTFcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLFwiY29sbGFwc2VcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLGAjJHtUSVRMRX1gKSxcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gRFVFREFURTtcbiAgICBkdWVEYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFBSSU9SSVRZO1xuXG4gICAgY29uc3QgY29sT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2xPcHRpb24uY2xhc3NMaXN0LmFkZChcImNvbC0xXCIpO1xuXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgb3B0aW9uLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xuICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIixcImZhLWdlYXJcIixcInBzLTFcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIixUSVRMRSk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImJvcmRlclwiLCBcImNvbGxhcHNlXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gREVTQ1JJUFRJT047XG4gICAgZGVzY3JpcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gUFJJT1JJVFk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnN0IGNyZWF0ZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVBcIik7XG5cbiAgICByb3cuYXBwZW5kQ2hpbGQoY29sQ2hlY2tib3gpO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcm93LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjb2xPcHRpb24pO1xuICAgIHJvdy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb2xDaGVja2JveC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgY29sT3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShyb3csIGNyZWF0ZVApXG59XG5cbmJ1aWxkSHRtbChcIlRJVExFXCIsIFwiREVTQ1JJUFRJT05cIiwgXCJEVUVEQVRFXCIsIFwid2hpdGVcIik7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==