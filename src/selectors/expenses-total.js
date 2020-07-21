export default (expenses) =>{
   let sum = 0
    expenses.map((expense) =>{
       sum += expense.amount
    })
    return sum
}