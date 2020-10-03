//Employees = JSON.parse(localStorage.getItem("database"))
Employees = []

function addLoginDetails() {

    newRecord = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
        "cpassword": document.getElementById("cpassword").value

    }
    Employees.push(newRecord)
    Employees = localStorage.setItem("database", JSON.stringify(Employees))
}
login() {
    if ()
}