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
    //  displayTableHead ();
    $('#button').on('click', collectFormInfo);
    $('#button').on('click', displayFormInfo);
    

};

//need input form that collects _employee first name, last name, ID number, job title, annual salary_.

let formInfoArray =[];

function collectFormInfo ({firstName,lastName,idNumber,jobTitle,annualSalary}){
 console.log('in collectFormInfo: ',{firstName,lastName,idNumber,jobTitle,annualSalary});
 const formInfoObject={
    firstName:$('#firstName').val(),
     lastName:$('#lastName').val(),
     idNumber:$('#idNumber').val(),
     jobTitle:$('#jobTitle').val(),
 annualSalary:$('#annualSalary').val()
};
 //collect form info 
 formInfoArray.push(formInfoObject);

//empty out the values
$('#firstName').val(' ')
$('#lastName').val(' ')
$('#idNumber').val(' ')
$('#jobTitle').val(' ')
$('#annualSalary').val(' ')
console.log('Objects in formInfoArray', formInfoArray)

};
//write displayFormInfo function

function displayFormInfo(){
    console.log('in displayFormInfo');
    event.preventDefault();  
    let table=$('#containerTable');
    let tbody = $('<tbody id="containerTableBody"></tbody>');
    table.append(tbody);
    $('.container').append(table);
    //Display the rows on the DOM
$(tbody).empty();
  let row = $('<tr><td></td></tr>')
  row.empty();
  for (i=0;i<formInfoArray.length;i++){
  tbody.append(`<tr>
                <td>${formInfoArray[i].firstName}</td>,
                <td>${formInfoArray[i].lastName}</td>,
                <td>${formInfoArray[i].idNumber}</td>,
                <td>${formInfoArray[i].jobTitle}</td>,
                <td>${formInfoArray[i].annualSalary}</td>
                </tr>`);

};
}

function onlyDisplay(){
      if(formInfoArray.length>0){
        displayFormInfo();
      };

    };



































