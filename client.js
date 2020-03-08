console.log('js');//check client.js is sourced correctly

$(document).ready(onReady);

function onReady(){
    //check jquery.js sourced correctly
    console.log('Hello!');
    collectFormInfo();
};

//need input form that collects _employee first name, last name, ID number, job title, annual salary_.

let formInfoArray =[];
let formInfoObject={
       firstName:'First Name',
        lastName:'Last Name',
        idNumber:'ID Number',
        jobTitle:'Job Title',
    annualSalary:'Annual Salary'
};

function collectFormInfo (formInfoObject){
 console.log('in collectFormInfo')
 //collect form info 
for (i=0;i<formInfoArray.length;i++){
   formInfoArray.push(formInfoObject);
};


};
