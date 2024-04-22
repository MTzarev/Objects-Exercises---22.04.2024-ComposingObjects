
function transportPeoples(){
    console.log(`${this.brand} is transporting peoples`);
}

function transportProducts(){
    console.log(`${this.brand} is transporting everythyng`);

}
let car = {
    brand: `Subaru`,
    transportPeoples,
} 
let bus = {
    brand: `Mercedes`,
    transportProducts,
    transportPeoples,
}
let truck = {
    brand: `Man`,
    transportPeoples,
    transportProducts,
}

car.transportPeoples();
truck.transportProducts(), bus.transportProducts();
//bus.transportProducts();
