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
//prevent page from refreshing due to form tag
    event.preventDefault();  
//set 
    let table=$('#containerTable');
    let tbody = $('<tbody id="containerTableBody"></tbody>');
    table.append(tbody);
    $('.container').append(table);
    //Display the rows on the DOM
$(tbody).empty();
  let row = $('<tr><td></td></tr>')
  row.empty();
  for (i=0;i<formInfoArray.length;i++){
      if(formInfoArray.length>0){    
  tbody.append(`<tr>
                <td>${formInfoArray[i].firstName}</td>,
                <td>${formInfoArray[i].lastName}</td>,
                <td>${formInfoArray[i].idNumber}</td>,
                <td>${formInfoArray[i].jobTitle}</td>,
                <td>${formInfoArray[i].annualSalary}</td>
                <td><button id="delButton">Delete</button></td>
                </tr>`);
      };

};
}
//create a function that will prevent addition of emppty objects
// function onlyDisplay(){
//       if(formInfoArray.length>0){
//         displayFormInfo();
//       };

//     };
//create a function for total monthly cost

function totalMonthly(){
 ('in totalMonthly');
 //initialize total Monthly salary
 let totalMonthlySum=$('#totalMonthly');
 //set total Monthly cost equal to zero
 let totalMonthlyCost=0
 //write for loop with a conditional
 for(i=0;i<formInfoArray.length;i++){
     totalMonthlyCost+=Number(formInfoArray[i].annualSalary/12);
     if(totalMonthlyCost>20000){
         $('#totalMonthly').css("background-color","red");
     };
 };
 //empty totalMonthlySum
 totalMonthlySum.empty();
 //append totalMonthlyCost to totalMonthlySum
 totalMonthlySum.append(totalMonthlyCost);
};

//delete a whole row function
 $(document).on('click', '#delButton', function(e){
    $(this).closest('tr').remove()
 })






























