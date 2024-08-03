
document.querySelector('button').addEventListener('click',() => {
    let units=Number(document.getElementById('input').value);
    let result=document.getElementById("result");
    let value=0;
    let num=50*0.75;
    let num1=100*1.00;
    let num2=100*1.30 ;
    let num3;
    try{
    if (units>=0 && units<=50){
        value=units*0.75;
     }
     else if(units>50 && units<=150){
         num1=((units-50)*1.00);
         value=num1+num;
     }
     else if(units>150 && units<=250){
         num2=((units-150)*1.30);
         value=num2+num+num1;
     }
     else if(units>250){
         num3=((units-250)*1.50);
         value=num3+num+num2+num1;
     }
    }
    catch(err){
        result.textContent=(`Enter a valid number`,err);
    }

    result.textContent=`The Amount To Be Paid Is ${value} for ${units} Units`
});
