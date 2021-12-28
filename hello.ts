class User {
    id: number;
    name: string;
    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
    ShowDetails() {
        console.log(`Id:${this.id},Name:${this.name}`);
    }
}
export default User;