//let password=document.getElementById("pwd").type="password"


// document.getElementById("show").onclick=function(){
//     if(document.getElementById("pwd").type =="password")
//     {
//        // document.getElementById("show").innerText="hide"
//         document.getElementById("pwd").type="text"
//     }
//     else
//     {
//           // document.getElementById("show").innerText="show"
//         document.getElementById("pwd").type="password"
//     }
// }
$('#show').click(function(){
    if ($("#pwd").attr("type")=="password")
    {
        $('#show').text("hide")
        $("#pwd").attr("type","text")
    }
    else
    {
        $('#show').text("show")
        $("#pwd").attr("type","password")
    }

})

$('#textarea').on('input',function(){
    var charCount=$(this).val().length;
    $('#charCount').text(charCount);

    if(charCount>=20)
    {
        $(this).css('border-color','red')
        $(this).css('outline-color','red')
    }
    else
    {
        $(this).css('border-color','black')
        $(this).css('outline-color','black')
    }


})

