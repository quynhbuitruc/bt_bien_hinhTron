
function chuvi() {
    let bankinh = Number(document.getElementById("bankinh").value);
    let chuVi = 2 * bankinh * Math.PI;
    document.getElementById("chuVi").innerHTML = chuVi;
}

function dienTich() {
    let bankinh = Number(document.getElementById("bankinh").value);
    let dienTich = bankinh * bankinh * Math.PI;
    document.getElementById("dienTich2").innerHTML = dienTich;
}