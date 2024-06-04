// Function to display a payroll summary alert
function displayPayrollSummary() {
    const totalHours = 40; // Example data
    const hourlyRate = 20; // Example data
    const totalPay = totalHours * hourlyRate;
    
    alert(`Total Hours: ${totalHours}\nHourly Rate: $${hourlyRate}\nTotal Pay: $${totalPay}`);
}

// Function to add event listener to a button
function init() {
    const button = document.getElementById("payrollButton");
    if (button) {
        button.addEventListener("click", displayPayrollSummary);
    }
}

// Initialize event listeners when the document is fully loaded
document.addEventListener("DOMContentLoaded", init);
