function Sum(x, y) {
    if (typeof (x) == "number" && typeof (y) === "number") {
        return x + y;
    }
    else
        return x + " " + y;
}

var r1 = Sum(2, 3);
console.log(r1);

var r2 = Sum('Hello', 'World');
console.log(r2);
