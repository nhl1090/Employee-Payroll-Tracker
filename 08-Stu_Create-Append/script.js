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

    function displayEmployees() {
        employeeList.innerHTML = "";

        employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

        employees.forEach(employee => {
            const employeeItem = document.createElement("div");
            employeeItem.classList.add("employee-item");
            employeeItem.innerHTML = `<strong>${employee.lastName}, ${employee.firstName}</strong>: $${employee.salary}`;
            employeeList.appendChild(employeeItem);
        });
    }

    function logAggregatedData() {
        const totalEmployees = employees.length;
        const totalSalary = employees.reduce((sum, employee) => sum + parseFloat(employee.salary), 0);
        const averageSalary = (totalEmployees > 0) ? (totalSalary / totalEmployees).toFixed(2) : 0;

        console.log(`Total Employees: ${totalEmployees}`);
        console.log(`Total Salary: $${totalSalary}`);
        console.log(`Average Salary: $${averageSalary}`);
    }
});
