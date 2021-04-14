//get inputs
const nameInput = document.getElementById("name")
const dateInput = document.getElementById("date")
const amountInput = document.getElementById("amount")

const errorDiv = document.getElementById("error"); // get error div


console.log()


//adds input values to the table
const submitHandle = () => {

    //check if input value is empty and add an error text
    if (nameInput.value == 0 && dateInput.value == 0 && amountInput.value == 0){
        let t = document.createTextNode("Please fill in all the information!")
        errorDiv.appendChild(t)
        return false;   
    }else{
        errorDiv.remove()
    }

    //get table
    const table = document.getElementById("myTable") 
    // add rows and cells
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    //take input values to cells
    cell1.innerHTML = nameInput.value;
    cell2.innerHTML = dateInput.value;
    cell3.innerHTML = amountInput.value;
    
    //add a delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBTN')
    deleteBtn.innerHTML = '<i class="fa fa-trash-alt"></i>';
    cell3.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteHandle);

    //refresh the input fields after submiting
    nameInput.value = "";
    dateInput.value = "";
    amountInput.value = "";    
}

//delete table row 
const deleteHandle = (e) => {
    
    let item = e.currentTarget;
    let cell = item.parentElement;
    let expenseRow = cell.parentElement;
    console.log(cell)
    expenseRow.remove()
}
