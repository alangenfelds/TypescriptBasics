"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   name: string;
        this.employees = [];
        // this.name = name;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    // admins: string[];
    constructor(id, admins) {
        super(id, "IT Department");
        this.admins = admins;
        this.admins = admins;
    }
}
const itDept = new ITDepartment("it1", ["Artur", "Max"]);
console.log(itDept);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super("acc1", "Accounting Department");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const management = new Department("1", "Management");
management.describe();
management.addEmployee("Artur");
management.addEmployee("Max");
management.printEmployeeInformation();
// const managementCopy = { name: "ttt", describe: management.describe };
// managementCopy.describe();
//# sourceMappingURL=app.js.map