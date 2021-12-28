var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent() {
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(_id, _name, _address) {
        var _this = _super.call(this) || this;
        _this.id = _id;
        _this.name =
            _name;
        _this.address = _address;
        return _this;
    }
    Child.prototype.ShowDetails = function () {
        console.log("Id:".concat(this.id, ",Name:").concat(this.name, ", Address:").concat(this.address));
    };
    return Child;
}(Parent));
var emp = new Child(1, 'Mohan', 'Delhi');
emp.ShowDetails();
