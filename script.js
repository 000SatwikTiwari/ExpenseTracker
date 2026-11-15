let Total_Expense = 0;
let Total_Income = 0;
let Total_avail = 0;

document.querySelector(".bt").addEventListener("click", (e) => {

    let inp = Number(document.querySelector(".ammount").value);
    let type = document.querySelector("#type").value;
    let sign=""; 
    if (inp <= 0 || isNaN(inp)) return;

    if (type == "Income") {
        Total_Income += inp;
        sign="+";
        
    }
    else {
        Total_Expense += inp;

        sign="-";
    }
     // Update available balance
    Total_avail = Total_Income - Total_Expense;
  // Update table
    document.querySelector(".ci").innerText = Total_Income;
    document.querySelector(".ce").innerText = Total_Expense;
    document.querySelector(".ca").innerText = Total_avail;
   
    let amount = document.querySelector(".ammount");

   amount.value="";
   
   let con=document.querySelector(".container");
   con.insertAdjacentHTML("beforeend", ` <div class="i">
        <button id="cut"><img src="cut.svg" alt=""></button>
        <div class="money"> ${sign}${inp} ₹</div>
        
        <div class="date">${new Date().toLocaleDateString()}</div>
        
    </div>`)

    

    
  let mn = con.lastElementChild.querySelector(".money");
  

if (sign == "+") {
    mn.style.color = "green";
}
else {
    mn.style.color = "red";
}
});
    
