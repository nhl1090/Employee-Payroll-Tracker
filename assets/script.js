// Wait for the DOM to fully load before executing JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const addEmployeeButton = document.getElementById("addEmployeeButton");
    const employeeList = document.getElementById("employeeList");

    // Array to store employee data
    const employees = [];

    // Event listener for the 'Add Employee' button
    addEmployeeButton.addEventListener("click", () => {
        let addMore = true; // Control loop for adding multiple employees

        while (addMore) {
            // Collect employee details from user input
            const firstName = prompt("Enter the employee's first name:");
            const lastName = prompt("Enter the employee's last name:");
            const salary = prompt("Enter the employee's salary:");

            // Validate input and add employee to the list
            if (firstName && lastName && salary && !isNaN(salary)) {
                employees.push({ firstName, lastName, salary: parseFloat(salary) });
            } else {
                alert("Invalid input. Please ensure all fields are filled correctly.");
            }

            // Check if the user wants to add another employee
            addMore = confirm("Do you want to add another employee?");
        }

        // Update the displayed employee list and log aggregated data
        displayEmployees();
        logAggregatedData();
    });

    // Function to display the employee list sorted by last name
    function displayEmployees() {
        // Clear the current employee list in the DOM
        employeeList.innerHTML = "";

        // Sort employees by last name
        employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

        // Dynamically create and append each employee's data to the DOM
        employees.forEach(employee => {
            const employeeItem = document.createElement("div");
            employeeItem.classList.add("employee-item");
            employeeItem.innerHTML = `<strong>${employee.lastName}, ${employee.firstName}</strong>: $${employee.salary.toFixed(2)}`;
            employeeList.appendChild(employeeItem);
        });
    }

    // Function to log aggregated data (total employees, total salary, average salary)
    function logAggregatedData() {
        const totalEmployees = employees.length;
        const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
        const averageSalary = (totalEmployees > 0) ? (totalSalary / totalEmployees).toFixed(2) : 0;

        console.log(`Total Employees: ${totalEmployees}`);
        console.log(`Total Salary: $${totalSalary}`);
        console.log(`Average Salary: $${averageSalary}`);
    }
});
