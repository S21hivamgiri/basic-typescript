"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    User.prototype.ShowDetails = function () {
        console.log("Id:".concat(this.id, ",Name:").concat(this.name));
    };
    return User;
}());
exports["default"] = User;
