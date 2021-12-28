class Parent {
    name: string;
    address: string;
    content: string;
}

class Child extends Parent {
    id: number;
    constructor(_id: number, _name: string, _address: string) {
        super();
        this.id = _id;
        this.name =
            _name;
        this.address = _address;
    }
    ShowDetails() {
        console.log(`Id:${this.id},Name:${this.name}, Address:${this.address}`);
    }
}

const emp: Child = new Child(1, 'Mohan', 'Delhi');
emp.ShowDetails()