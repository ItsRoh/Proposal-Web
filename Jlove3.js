
const month=document.getElementById("month");
const day=document.getElementById("day");
const datee=document.getElementById("datee");
const year=document.getElementById("year");

const date=new Date();
const month_name=date.getMonth();

month.innerText=date.toLocaleString("en",{month:"long"});
day.innerText=date.toLocaleString("en",{weekday:"long"});
datee.innerText=date.getDate();
year.innertext=date.getFullYear();