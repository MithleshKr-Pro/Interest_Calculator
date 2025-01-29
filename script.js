const btn = document.querySelector("#btn");

const container = document.querySelector(".container");
const newDiv=document.createElement("div");
newDiv.classList.add("newAmt");

btn.addEventListener("click", () => {
  
  const amt = parseFloat(document.querySelector("#principle").value);
  const rate = parseFloat(document.querySelector("#rate").value);
  const time = parseFloat(document.querySelector("#time").value);

if (isNaN(amt) || isNaN(rate) || isNaN(time)) {
    alert("Please Fill all the fields !!");
    return;
  }
  
  const newAmt = amt + (amt * time * rate) / 100;
  
  
  newDiv.innerHTML = `
  <b>Principle Amount : ${amt},</b> 
  <br>
  <b>Rate of Interest :${rate} % per Month,</b>
  <br>
  <b>Time : ${time} Years,</b>
  <br>
  <b>Final Amount :
  ${newAmt}</b>
  `;
    container.appendChild(newDiv);
  }
);