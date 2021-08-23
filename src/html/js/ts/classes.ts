

class Department {
    static fiscalYear = 2020
    // private id: string
    // private name: string
    private employees: string[] = []

    constructor(private readonly id: string,public  name: string) {
       
    }

    static createEmployee(name: string) {
        return { name: name}
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }

}

class AccountingDepart extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    getReports() {
        console.log(this.reports)
    }
}


const it = new ITDepartment('d1', ['Max'])

it.describe()

it.addEmployee('Max')
it.addEmployee('Anna')

it.printEmployeeInformation()


const account = new AccountingDepart('d2', [])
account.addReport('Somthing went wrong...')
account.getReports()

const employee1 = Department.createEmployee('max')
console.log(employee1, Department.fiscalYear)
