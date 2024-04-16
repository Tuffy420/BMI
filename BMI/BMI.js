window.onload= () => {
const button = document.querySelector('#btn');
button.addEventListener('click',calculateBmi)
}
function calculateBmi(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');
    if(!height||height<0||isNaN(height))
    {
        result.innerText="invalid height value";
        return;
    }
    else if(!weight||weight<0||isNaN(weight))
    {
        result.innerText="invalid weight value";
        return;
    }
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.5)
    {
        result.innerText=`BMI:${bmi} - Under weight`;
    }
    else if(bmi>= 18.5 && bmi<24.9)
    {
        result.innerText=`BMI:${bmi} - Normal`;
    }
    else if(bmi>= 25 && bmi<29.9)
    {
        result.innerText=`BMI:${bmi} - Over weight:`;
    }
    else if(bmi>= 30 && bmi<34.9)
    {
        result.innerText=`BMI:${bmi} - Obesity(class 1)`;
    }
    else if(bmi>= 35 && bmi<39.9)
    {
        result.innerText=`BMI:${bmi} - Obesity(class 2)`;
    }
    else
    {
        result.innerText=`BMI:${bmi} - Extreme Obesity`;
    }


}
