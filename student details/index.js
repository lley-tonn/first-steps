let studentcount=0;

document.getElementById('addbtn').addEventListener('click', ()=>{
    const name = prompt('Enter the Sudent Name: ');

    if (!name) {
        alert('Name cannot be empty!');
        return;
    }

    const age = prompt('Enter the student age: ');

    if(!age || isNaN(age)){
        alert('Please enter a valid age!');
        return;
    }

    const grade = prompt('Enter the student grade: ');

    if(!grade){
        alert('Grade cannot be empty!')
        return;
    }

    studentcount++;

    const tablebody = document.querySelector('#studenttable tbody');
    const row = document.createElement('tr');
    row.innerHTML=`
    <td>${studentcount}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${grade}</td>`;
    tablebody.appendChild(row);
});