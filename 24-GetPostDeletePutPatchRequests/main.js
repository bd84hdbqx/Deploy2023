let container=document.querySelector(".container")
let row=document.querySelector(".row")
let url="https://northwind.vercel.app/api/suppliers"
fetch(url)
.then((res)=> res.json())
.then((data)=>{
    console.log(data)
    data.forEach((element,i)=>{
        row.innerHTML+=`<div class="col-3">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.companyName}</h5>
          <p class="card-text">${element.contactName}<br>
          ${element.address?.city}<br>
          ${element.address?.country}</p>
        <button name="${element.id}" class="btn btn-danger deleteBtn">Delete</button>
        </div>
      </div>
      </div>`
});
let deleteBtns=document.querySelectorAll(".deleteBtn");
for(let btn of deleteBtns){
btn.addEventListener("click",function(){
    console.log(this.parentElement.parentElement.remove())
    fetch(url + this.name,{
        metod: "Delete"
    })
})
}
let form = document.querySelector(".sendDataForm");
let company = document.querySelector("#company");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
form.addEventListener("submit",function(){
let obj={}
    obj.companyName = company.value;
  obj.address.city = city.value;
  obj.address.country = country.value;
  fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
})

})

let obj2={
  companyName:"istanbul",
  address:{
    city:"Baku",
    country:"Turkey"
  }
}
fetch(url + "5", {
 method: "PUT",
headers: {
"Content-Type": "application/json",
 },
 body: JSON.stringify(obj2),
})
.then((res) => res.json())
.then((data) => {
  console.log(data);
});

let obj3 = { contactName: "Sevinc" };
fetch(url + "20", {
method: "PATCH",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(obj3),
})
.then((res) => res.json())
.then((data) => {
console.log(data);
});