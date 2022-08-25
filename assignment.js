var FreshJuice = /** @class */ (function () {
    function FreshJuice(flavour, price, quantity) {
        this.brand = 'FreshJuice';
        this.flavour = flavour;
        this.price = price;
        this.quantity = quantity;
    }
    FreshJuice.prototype.getEngineInfo = function () {
        return "juice quantity: " + this.quantity;
    };
    return FreshJuice;
}());
var MilkShake = /** @class */ (function () {
    function MilkShake(flavour, price, quantity) {
        this.brand = 'Milkshake';
        this.flavour = flavour;
        this.price = price;
        this.quantity = quantity;
    }
    MilkShake.prototype.getEngineInfo = function () {
        return this.quantity;
    };
    return MilkShake;
}());
var a = new FreshJuice('watermelon', 'Rs.45', '20');
var b = new FreshJuice('orange', 'Rs.50', '12');
var c = new MilkShake('chocolate', 'Rs.35', '10');
var d = new MilkShake('strawberry', 'Rs.75', '13');
delete d['flavour'];
delete d['price'];
console.log("-----------------------");
function getKey(a, b) {
    var arr = [], obj = Object.keys(a);
    for (var quantity in obj) {
        if (a[obj[quantity]] > 5) {
            arr.push(obj[quantity]);
        }
    }
    return arr;
}
var x = [{ brand: "juice", flavour: "chocolate", price: "Rs.20", quantity: "23" },
    { brand: "juice", flavour: "papaya", price: "Rs.35", quantity: "21" }];
var res = x.filter(function (obj) {
    return obj.price > '5';
});
console.log(res);
console.log("Store Details");
console.log(a, b, c, d);
console.log("--------------------------------");
console.log("2.Deduct");
console.log(d);
console.log("-----------------------");
console.log("1.Add");
console.log(x);
console.log("-----------------------");
console.log("4.Threshold");
console.log(getKey(a, b));
console.log(res);
console.log("-----------------------");
