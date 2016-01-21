console.log("hello");


$(document).ready(function() {

    $("#amount").keypress(function() {
        var amount = $("#amount").val();

        console.log("in function", amount + 0);

        splitBill(amount);
    });

});

function splitBill (fullAmount) {
    var amountWomanPays;
    var amountManPays;

    var amount = parseFloat(fullAmount).toFixed(2);

    console.log(amount);

    amountWomanPays = fullAmount/20*7;
    amountManPays = fullAmount/20*13;

    $("#she-pays").html("$" + amountWomanPays);
    $("#he-pays").html("$" + amountManPays);
}
