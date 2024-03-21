var outputDate = document.getElementById("daysAns");
var outputMonth = document.getElementById("monthAns"); 
var outputYear = document.getElementById("yearAns");


const getDaysInMonth = (year, month) => {
    let days = new Date(year, month, 0).getDate();
    // console.log(days);
    return days;
}
const submitForm = (event) => {
    event.preventDefault();
    outputDate.textContent = '__';
    outputMonth.textContent = '__';
    outputYear.textContent = '__';
    const form = document.querySelectorAll('input');
    let donotCalculate = false;

    form.forEach(input => {
        input.nextElementSibling.style.display = 'none';
        input.nextElementSibling.nextElementSibling.style.display = 'none';
        input.style.borderColor = 'rgba(211, 211, 211, 0.836)';
        input.previousElementSibling.style.color = 'rgb(89, 94, 94)';
        if(!input.value.trim()){
            donotCalculate = true;
            input.style.borderColor = 'red';
            input.nextElementSibling.style.display = 'block';
            input.previousElementSibling.style.color = 'red';
        }
        else if(input.id!='year' &&(parseInt(input.value)>parseInt(input.max) || parseInt(input.value)<parseInt(input.min))){
            donotCalculate = true;
            input.style.borderColor = 'red';
            input.nextElementSibling.nextElementSibling.style.display = 'block';
            input.previousElementSibling.style.color = 'red';
        }

        else if(input.id=='year'){
            console.log('year check');
            if(parseInt(input.value)>new Date().getFullYear()){
                donotCalculate = true;
                console.log(input.value);
                input.style.borderColor = 'red';
                input.nextElementSibling.nextElementSibling.style.display = 'block';
                input.previousElementSibling.style.color = 'red';
            }
        }
    });

    
    if(!donotCalculate) {
        calculateAge(event);
    }
}

const calculateAge = (e) => {
    // console.log("function called");
    var inputDate = parseInt(document.getElementById("date").value);
    var inputMonth = parseInt(document.getElementById("month").value); 
    var inputYear = parseInt(document.getElementById("year").value);
    
    var today = new Date();

    var currentDate = today.getDate();
    var currentMonth = today.getMonth()+1; //January starts form 0
    var currentYear = today.getFullYear();
    console.log(currentDate, currentMonth, currentYear);

    let date, month, year;

    year = currentYear-inputYear;

    if(currentMonth >= inputMonth) {
        month = currentMonth - inputMonth;
    }else {
        year--;
        month = 12 + currentMonth - inputMonth;
    }

    if(currentDate >= inputDate) {
        date = currentDate - inputDate;
    }else {
        month--;
        let days = getDaysInMonth(inputYear, inputMonth);
        console.log(days);
        date = days + currentDate - inputDate;
    }

    outputDate.textContent = date;
    outputMonth.textContent = month;
    outputYear.textContent = year;
}