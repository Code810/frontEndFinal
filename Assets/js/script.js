$(document).ready(function () {
    chevron=$(".navbartopright i");
chevron.on("click", function () {
    $(`#${$(this).attr("data-id")}`).toggle();
});
 $(".ctgbtn").on("click", function () {    
    console.log($(".chevronlg"));
    $(".chevronlg").toggleClass("rotate");
 })
























});