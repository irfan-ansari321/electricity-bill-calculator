let billCalculated = false;

window.onload = function () {
    document.getElementById("cid").value = "";
    document.getElementById("cname").value = "";
    document.getElementById("prev").value = "";
    document.getElementById("curr").value = "";
    document.getElementById("result").innerHTML = "";

    document.getElementById("printBtn").disabled = true;
};

function calculate() {

    let cid = document.getElementById("cid").value;
    let cname = document.getElementById("cname").value;
    let prev = Number(document.getElementById("prev").value);
    let curr = Number(document.getElementById("curr").value);

    if (cid === "" || cname === "" || document.getElementById("prev").value === "" || document.getElementById("curr").value === "") {
        alert("Please fill all details");
        return;
    }

    if (curr < prev) {
        alert("Current reading cannot be less than previous reading");
        return;
    }

    let units = curr - prev;

    // Energy charge (monthly slab)
    let energyCharge = 0;
    if (units <= 100) {
        energyCharge = units * 4;
    } else if (units <= 200) {
        energyCharge = (100 * 4) + ((units - 100) * 5);
    } else {
        energyCharge = (100 * 4) + (100 * 5) + ((units - 200) * 6);
    }

    let fixedCharge = 150;
    let fca = units * 0.5;
    let tax = energyCharge * 0.05;

    let subsidy = 0;
    if (units <= 100) subsidy = 100;
    else if (units <= 200) subsidy = 50;

    let totalBill = energyCharge + fixedCharge + fca + tax - subsidy;

    let dateTime = new Date().toLocaleString();

    document.getElementById("result").innerHTML = `
        <b>Electricity Bill Receipt</b><br><br>

        <b>Consumer Name:</b> ${cname}<br>
        <b>Consumer ID:</b> ${cid}<br>
        <b>Billing Type:</b> Monthly<br>
        <b>Date & Time:</b> ${dateTime}<br><br>

        <b>Units Consumed:</b> ${units}<br>
        <b>Energy Charges:</b> ₹${energyCharge.toFixed(2)}<br>
        <b>Fixed Charge:</b> ₹${fixedCharge}<br>
        <b>FCA / PPCA:</b> ₹${fca.toFixed(2)}<br>
        <b>Tax (5%):</b> ₹${tax.toFixed(2)}<br>
        <b>Subsidy:</b> -₹${subsidy}<br><br>

        <b>Total Bill Amount:</b> ₹${totalBill.toFixed(2)}
    `;

    billCalculated = true;
    document.getElementById("printBtn").disabled = false;
}

function printBill() {
    if (!billCalculated) {
        alert("Please calculate the bill first");
        return;
    }
    window.print();
}
