function order(){
    var bill = document.form;
    var sandwichesPrice = 45000 * eval(bill.swPrice.value);
    var burgerPrice = 40000 * eval(bill.bgPrice.value);
    var chickenPrice = 30000 * eval(bill.fcPrice.value);
    var icecreamPrice = 10000 * eval(bill.icPrice.value);
    var totalPrice = sandwichesPrice + burgerPrice + chickenPrice + icecreamPrice;

    if (totalPrice >= 100000){
        bill.subTotal.value = totalPrice;
        bill.discount.value = 10000;
        bill.total.value = totalPrice - eval(bill.discount.value);
        } else {
        bill.subTotal.value = totalPrice;
        bill.discount.value = 0;
        bill.total.value = totalPrice - eval(bill.discount.value);
    }
    var change = bill.change.value;
    bill.change.value = eval(bill.paid.value) - totalPrice;
}

function resetForm(){
    document.form.reset();
}