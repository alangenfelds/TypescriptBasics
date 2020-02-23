class Department {
  //   name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins: string[];

  constructor(id: string, public admins: string[]) {
    super(id, "IT Department");
    this.admins = admins;
  }
}

const itDept = new ITDepartment("it1", ["Artur", "Max"]);
console.log(itDept);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super("acc1", "Accounting Department");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(report: string) {
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
