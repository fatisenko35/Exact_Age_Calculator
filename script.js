let countdown = document.getElementById("countdown");

let spinner = document.getElementById("loading");

let dateYear = document.getElementsByClassName("time")[0];

let dateMonth = document.getElementsByClassName("time")[1];

let dateDay = document.getElementsByClassName("time")[2];

let dateHour = document.getElementsByClassName("time")[3];

let dateMinute = document.getElementsByClassName("time")[4];

let dateSecond = document.getElementsByClassName("time")[5];

let birthdayPicker = document.querySelector("[name = birthday]");




birthdayPicker.addEventListener("change",() =>{
 if (new Date() < new Date(birthdayPicker.value)) {
     alert("Please enter valid date");
 }else{
     countdown.style.transform = "scale(2)";
     document.body.style.backgroundImage = "url(./img/balloons.jpg)";
    setInterval(() =>{

    countdown.style.display = "flex";
   
  
    // Year

    if ((new Date().getMonth() > new Date(birthdayPicker.value).getMonth() && new Date().getDate() > new Date(birthdayPicker.value).getDate()) || new Date().getFullYear() == new Date(birthdayPicker.value).getFullYear() ){
        
        dateYear.innerText = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear() + "\n" + " years";
   
    }else{
      dateYear.innerText = (new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear() ) - 1  + "\n" + " years";
    }

    // Month
    
    if (new Date().getMonth() < new Date(birthdayPicker.value).getMonth()){
        
        dateMonth.innerText = 12 - Math.abs( new Date().getMonth() - new Date(birthdayPicker.value).getMonth()) + "\n" + " months";
        
        if (new Date().getDate() < new Date(birthdayPicker.value).getDate()){
            dateMonth.innerText = 12 - Math.abs( new Date().getMonth() - new Date(birthdayPicker.value).getMonth()) - 1 + "\n" + " months"; 
        }
  
    } else{
       
        dateMonth.innerText =  new Date().getMonth() - new Date(birthdayPicker.value).getMonth() + "\n" + "months";
        
        if (new Date().getDate() < new Date(birthdayPicker.value).getDate()){
            dateMonth.innerText = new Date().getMonth() - new Date(birthdayPicker.value).getMonth() - 1 + "\n" + " months";
        }
    }
    

    // Day
    if (new Date().getDate() < new Date(birthdayPicker.value).getDate()){
        dateDay.innerText = 30 - Math.abs(new Date().getDate() - new Date(birthdayPicker.value).getDate()) + "\n" + " days";
   
    }else{
        
        dateDay.innerText = new Date().getDate() - new Date(birthdayPicker.value).getDate() + "\n" + " days";
    }
   
    // Hour
    dateHour.innerText = new Date().getHours() - new Date(birthdayPicker.value).getHours() + "\n" + " hours";
    
   // Minute
    dateMinute.innerText = new Date().getMinutes() - new Date(birthdayPicker.value).getMinutes() + "\n" + " minutes";
    
    // Second
    dateSecond.innerText = new Date().getSeconds() - new Date(birthdayPicker.value).getSeconds() + "\n" + " seconds";
    

    

}
    ,500);
    spinner.style.display = "none";
   


}

})
