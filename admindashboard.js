document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Sidebar Navigation
    // ===============================

    const navLinks = document.querySelectorAll(".nav-menu a");
    const sections = document.querySelectorAll(".main-content section");

    const showSection = (id) => {

        sections.forEach(section => {
            section.style.display = "none";
        });

        const target = document.getElementById(id);

        if (target) {
            target.style.display = "block";
        }

    };

    navLinks.forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            navLinks.forEach(item => {
                item.parentElement.classList.remove("active");
            });

            link.parentElement.classList.add("active");

            const targetId = link.getAttribute("href").substring(1);

            showSection(targetId);

        });

    });

    // Default Page
    showSection("dashboard");


    // ====================================
    // Employee Table
    // ====================================

    const employeeTableBody = document.getElementById("employeeTableBody");

    const employees = [

        {
            employee_id:"EMP001",
            full_name:"Alex Smith",
            department:"IT",
            designation:"Software Engineer",
            email:"alex@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP002",
            full_name:"Sarah Johnson",
            department:"HR",
            designation:"HR Manager",
            email:"sarah@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP003",
            full_name:"Michael Chen",
            department:"Finance",
            designation:"Accountant",
            email:"michael@hrms.com",
            status:"On Leave"
        },

        {
            employee_id:"EMP004",
            full_name:"Emily Brown",
            department:"Marketing",
            designation:"Marketing Executive",
            email:"emily@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP005",
            full_name:"David Wilson",
            department:"Sales",
            designation:"Sales Manager",
            email:"david@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP006",
            full_name:"Jessica Lee",
            department:"Admin",
            designation:"Administrator",
            email:"jessica@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP007",
            full_name:"Ryan Hall",
            department:"IT",
            designation:"Backend Developer",
            email:"ryan@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP008",
            full_name:"Sophia Green",
            department:"Support",
            designation:"Support Engineer",
            email:"sophia@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP009",
            full_name:"James Miller",
            department:"Accounts",
            designation:"Accounts Officer",
            email:"james@hrms.com",
            status:"Active"
        },

        {
            employee_id:"EMP010",
            full_name:"Olivia White",
            department:"Security",
            designation:"Security Officer",
            email:"olivia@hrms.com",
            status:"On Leave"
        }

    ];

    function renderEmployees(employeeList){

        if(!employeeTableBody) return;

        employeeTableBody.innerHTML="";

        employeeList.forEach(emp=>{

            employeeTableBody.innerHTML += `

            <tr>

                <td>${emp.employee_id}</td>

                <td>${emp.full_name}</td>

                <td>${emp.department}</td>

                <td>${emp.designation}</td>

                <td>${emp.email}</td>

                <td>

                    <span class="status-badge ${emp.status==="Active" ? "present":"leave"}">

                        ${emp.status}

                    </span>

                </td>

                <td>

                    <button class="btn-icon">

                        <i class="fa-solid fa-pen-to-square"></i>

                    </button>

                </td>

            </tr>

            `;

        });

    }

    renderEmployees(employees);
        // ===============================
    // Employee Search
    // ===============================

    const searchInput = document.querySelector(".search-bar input");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase();

            const filteredEmployees = employees.filter(emp =>

                emp.full_name.toLowerCase().includes(keyword) ||
                emp.employee_id.toLowerCase().includes(keyword) ||
                emp.department.toLowerCase().includes(keyword) ||
                emp.designation.toLowerCase().includes(keyword)

            );

            renderEmployees(filteredEmployees);

        });

    }


    // ===============================
    // Leave Approval Buttons
    // ===============================

    document.querySelectorAll(".btn-approve").forEach(button => {

        button.addEventListener("click", () => {

            alert("Leave Approved Successfully!");

        });

    });


    document.querySelectorAll(".btn-reject").forEach(button => {

        button.addEventListener("click", () => {

            alert("Leave Request Rejected!");

        });

    });



    // ===============================
    // Attendance Filter
    // ===============================

    const attendanceDate =
        document.querySelector("#attendance input[type='date']");

    const attendanceBtn =
        document.querySelector("#attendance .btn-secondary");

    if (attendanceBtn) {

        attendanceBtn.addEventListener("click", () => {

            alert("Attendance filtered for : " + attendanceDate.value);

        });

    }



    // ===============================
    // Payroll Button
    // ===============================

    const payrollBtn =
        document.querySelector("#payroll-control .btn-primary");

    if (payrollBtn) {

        payrollBtn.addEventListener("click", () => {

            payrollBtn.disabled = true;

            payrollBtn.innerText = "Processing...";

            setTimeout(() => {

                alert("Payroll Process Completed Successfully.");

                payrollBtn.disabled = false;

                payrollBtn.innerText = "Process Monthly Payroll";

            }, 2000);

        });

    }



    // ===============================
    // Edit Employee Button
    // ===============================

    document.addEventListener("click", function (e) {

        const btn = e.target.closest(".btn-icon");

        if (btn) {

            alert("Edit Employee Feature Coming Soon");

        }

    });


});