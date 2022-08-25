interface Retail {
    flavour: string;
    price: string;
    quantity: string;
    getEngineInfo(): string;
}
class FreshJuice implements Retail {
    flavour: string;
    price: string;
    quantity: string;
    constructor(flavour: string, price: string, quantity: string) {
        this.flavour = flavour; 
        this.price = price;
        this.quantity = quantity;
    }
    brand: string = 'FreshJuice';
    getEngineInfo(): string {
        return "juice quantity: " + this.quantity;
    }
}
class MilkShake implements Retail{
    flavour: string;
    price: string;
    quantity: string;
    constructor(flavour: string, price: string, quantity: string) {
        this.flavour = flavour; 
        this.price = price;
        this.quantity = quantity;
    }
    getEngineInfo(): string {
        return this.quantity;
    }
    brand: string = 'Milkshake';
}
var a = new FreshJuice('watermelon', 'Rs.45','20');
var b = new FreshJuice('orange', 'Rs.50','12');
var c = new MilkShake('chocolate','Rs.35','10');
var d = new MilkShake('strawberry','Rs.75','13');
delete d['flavour'];
delete d['price'];
console.log("-----------------------");



function getValue(a,b){
    const arr = [],
    obj = Object.keys(a);
    for (var quantity in obj){
      if(a[obj[quantity]] > 5){
        arr.push(obj[quantity]);
      }
    }
    return arr;
  }
   var x = [{brand:"juice", flavour:"chocolate",price:"Rs.20",quantity:"23"},
   {brand:"juice", flavour:"papaya",price:"Rs.35",quantity:"21"}];
  
   const res = x.filter((obj) => {
    return obj.price > '10';
  
  });
console.log(res);
console.log("Store Details");
console.log(a,b,c,d);
console.log("--------------------------------");
console.log("2.Deduct");
console.log(d);
console.log("-----------------------");
console.log("1.Add");
console.log(x);
console.log("-----------------------");
console.log("4.Threshold");
console.log(getValue(a ,b))
console.log(res);
console.log("-----------------------");