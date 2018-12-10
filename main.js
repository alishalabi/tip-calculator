// Your scripts here

const n = Math.random() * 100;

console.log(n)
const m = n.toFixed(2)
console.log(m);
console.log(m * 2);
console.log(Number(m) + 3);
console.log(typeof m);
if (typeof m === 'string') {

}

const amount = document.getElementById("amount")
const percent = document.getElementById("percent")
const calculate = document.getElementById("calculate")
const tip = document.getElementById("tip")
const total = document.getElementById("total")
const people = document.getElementById("people")
const personTip = document.getElementById("person-tip")
const personTotal = document.getElementById("person-total")

// let tipAmount = 0
// let totalAmount = 0

calculate.addEventListener("click", function() {
  //  tipAmount = (amount*percentage/100)
  tipAmount = percent.value * amount.value / 100
  tip.innerHTML = tipAmount
  totalAmount = parseFloat(tipAmount) + parseFloat(amount.value)
  total.innerHTML = totalAmount
  tipPer =  tipAmount / people.value
  personTip.innerHTML = tipPer
  totalPer = totalAmount / people.value
  personTotal.innerHTML = totalPer

})
