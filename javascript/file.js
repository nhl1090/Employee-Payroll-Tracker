document.addEventListener("DOMContentLoaded", () => {
    const addEmployeeButton = document.getElementById("addEmployeeButton");
    const employeeList = document.getElementById("employeeList");

    const employees = [];

function displayPayrollSummary() {
    const totalHours = 40;
    const hourlyRate = 20;
    const totalPay = totalHours * hourlyRate;
    
    alert(`Total Hours: ${totalHours}\nHourly Rate: $${hourlyRate}\nTotal Pay: $${totalPay}`);
}

function init() {
    const button = document.getElementById("payrollButton");
    if (button) {
        button.addEventListener("click", displayPayrollSummary);
    }
}

document.addEventListener("DOMContentLoaded", init);
