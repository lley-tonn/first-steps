const parser = new DOMParser();
const serializer = new XMLSerializer();

let employeeXML = `
<employees>
</employees>`;

function displayEmployees(){
    const xmlDoc = parser.parseFromString(employeeXML, "application/xml");
    const employees = xmlDoc.getElementsByTagName("employee");
    const tablebody = document.querySelector("#employeetable tbody");
    tablebody.innerHTML = "";

    Array.from(employees).forEach((employee)=>{
        const id = employee.getElementsByTagName("id")[0].textContent;
        const name = employee.getElementsByTagName("name")[0].textContent;
        const age = employee.getElementsByTagName("age")[0].textContent;
        const department = employee.getElementsByTagName("department")[0].textContent;
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${id}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${department}</td>`;

        tablebody.appendChild(row);
    });
}

document.getElementById("addbtn").addEventListener("click",()=>{
    const id = prompt("Enter Employee ID: ");
    if(!id){
        alert("Employee ID is required!");
        return;
    }

    const name = prompt("Enter Employee Name: ");
    if(!name){
        alert("Employee Name is required!");
        return;
    }

    const age = prompt("Enter Employee Age: ");
    if(!age || isNaN(age)){
        alert("Please Enter a Valid Age!");
        return;
    }

    const department = prompt("Enter Employee Department: ");
    if(!department){
        alert("Employee Department is required!");
        return;
    }

    const xmlDoc = parser.parseFromString(employeeXML, "application/xml");
    const newEmployee = xmlDoc.createElement("employee");

    const idElement = xmlDoc.createElement("id");
    idElement.textContent = id;
    newEmployee.appendChild(idElement);

    const nameElement = xmlDoc.createElement("name");
    nameElement.textContent= name;
    newEmployee.appendChild(nameElement);

    const ageElement = xmlDoc.createElement("age");
    ageElement.textContent= age;
    newEmployee.appendChild(ageElement);

    const departmentElement = xmlDoc.createElement("department");
    departmentElement.textContent= department;
    newEmployee.appendChild(departmentElement);

    xmlDoc.documentElement.appendChild(newEmployee);
    employeeXML = serializer.serializeToString(xmlDoc);

    displayEmployees();
});

displayEmployees();