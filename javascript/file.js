document.addEventListener("DOMContentLoaded", () => {
    const addEmployeeButton = document.getElementById("addEmployeeButton");
    const employeeList = document.getElementById("employeeList");

    const employees = [];

    addEmployeeButton.addEventListener("click", () => {
        let addMore = true;

        while (addMore) {
            const firstName = prompt("Enter the employee's first name:");
            const lastName = prompt("Enter the employee's last name:");
            const salary = prompt("Enter the employee's salary:");

            if (firstName && lastName && salary) {
                employees.push({ firstName, lastName, salary });
            }

            addMore = confirm("Do you want to add another employee?");
        }

        displayEmployees();
        logAggregatedData();
    });

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
