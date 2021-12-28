function Sum(x: number, y: number): number;
function Sum(x: string, y: string): string;

function Sum(x: any, y: any): any {
    if (typeof (x) == "number" && typeof (y) === "number") {
        return x + y;
    }
    else return x + " " + y;
}


let r1 = Sum(2, 3);
console.log(r1);
let r2 = Sum('Hello', 'World')
console.log(r2);