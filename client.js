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
for (i=0;i<formInfoArray.length;i++){
   formInfoArray.push(formInfoObject);
};
//empty out the values 
 $('#firstName').val(' ');
 $('#lastName').val(' ');
 $('#idNumber').val(' ');
 $('#jobTitle').val(' ');
 $('#annualSalary').val(' ');

};

function displayFormInfo(){
    console.log('in displayFormInfo');
//

};