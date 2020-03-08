console.log('js');//check client.js is sourced correctly
$(document).ready(onReady);
//write down element selectors to be used
let firstName=$('#firstName');
let lastName=$('#lastName');
let idNumber=$('#idNumber');
let jobTitle=$('#jobTitle');
let annualSalary=$('#annualSalary');


function onReady(){
    //check jquery.js sourced correctly
    console.log('Hello!');
     collectFormInfo();
     displayFormInfo();
    $('#addButton').on('click', collectFormInfo());
    $('#addButton').on('click', displayFormInfo());

};

//need input form that collects _employee first name, last name, ID number, job title, annual salary_.

let formInfoArray =[];

function collectFormInfo (firstName,lastName, idNumber, jobTitle, annualSalary){
 console.log('in collectFormInfo: ',firstName,lastName, idNumber, jobTitle, annualSalary );
 let formInfoObject={
    firstName:$('#firstName').val(),
     lastName:$('#lastName').val(),
     idNumber:$('#idNumber').val(),
     jobTitle:$('#jobTitle').val(),
 annualSalary:$('#annualSalary').val(),
};

 //collect form info 
 formInfoArray.push(formInfoObject);

//empty out the values 
 

};

function displayFormInfo(){
    console.log('in displayFormInfo');
//empty and append the header
let header= $('<h1>salary Calculator</h1>')
$('.container').append(header);
//append the table heading
let table = $('<table></table>');
table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID Name</th><th>Job Title</th><th>Annual Salary</th></thead>');
//append the table body element
let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);
//empty the table body and append row
$(tbody).empty();
let row = $('<tr><td></td></tr>')
row.empty();
for(i=0;i<formInfoArray.length;i++){
console.log('in displayFormInfo');

tbody.append(`<tr><td>${formInfoArray[i].firstName}</td>,
                       <td>${formInfoArray[i].lastName}</td>,
                       <td>${formInfoArray[i].idNumber}</td>,
                       <td>${formInfoArray[i].jobTitle}</td>,
                       <td>${formInfoArray[i].annualSalary}</td>
                       </tr>`)
};

};

