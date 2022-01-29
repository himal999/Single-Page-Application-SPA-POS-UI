


document.getElementById("cuView").style.display = "none";
document.getElementById("cuAdd").style.display = "none";
document.getElementById("cuDelete").style.display = "none";
document.getElementById("cuUpdate").style.display = "none";


document.getElementById("itView").style.display = "none";
document.getElementById("itAdd").style.display = "none";
document.getElementById("itDelete").style.display = "none";
document.getElementById("itUpdate").style.display = "none";

document.getElementById("order").style.display = "none";

document.getElementById("home").addEventListener("click",function () {
    document.getElementById("cuView").style.display = "none";
    document.getElementById("cuAdd").style.display = "none";
    document.getElementById("cuDelete").style.display = "none";
    document.getElementById("cuUpdate").style.display = "none";


    document.getElementById("itView").style.display = "none";
    document.getElementById("itAdd").style.display = "none";
    document.getElementById("itDelete").style.display = "none";
    document.getElementById("itUpdate").style.display = "none";

    document.getElementById("order").style.display = "none";
});
document.getElementById("customer").addEventListener("click",function (){

    document.getElementById("cuView").style.display = "block";
    document.getElementById("cuAdd").style.display = "block";
    document.getElementById("cuDelete").style.display = "block";
    document.getElementById("cuUpdate").style.display = "block";


    document.getElementById("itView").style.display = "none";
    document.getElementById("itAdd").style.display = "none";
    document.getElementById("itDelete").style.display = "none";
    document.getElementById("itUpdate").style.display = "none";

    document.getElementById("order").style.display = "none";

});

document.getElementById("item").addEventListener("click",function () {
    document.getElementById("cuView").style.display = "none";
    document.getElementById("cuAdd").style.display = "none";
    document.getElementById("cuDelete").style.display = "none";
    document.getElementById("cuUpdate").style.display = "none";


    document.getElementById("itView").style.display = "block";
    document.getElementById("itAdd").style.display = "block";
    document.getElementById("itDelete").style.display = "block";
    document.getElementById("itUpdate").style.display = "block";

    document.getElementById("order").style.display = "none";
})

document.getElementById("orderNav").addEventListener("click",function () {
    document.getElementById("cuView").style.display = "none";
    document.getElementById("cuAdd").style.display = "none";
    document.getElementById("cuDelete").style.display = "none";
    document.getElementById("cuUpdate").style.display = "none";


    document.getElementById("itView").style.display = "none";
    document.getElementById("itAdd").style.display = "none";
    document.getElementById("itDelete").style.display = "none";
    document.getElementById("itUpdate").style.display = "none";

    document.getElementById("order").style.display = "block";
})

