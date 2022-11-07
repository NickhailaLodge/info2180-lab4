"use strict";
windonw.onload=function(){
    var xhttp;
    var btn = document.getElementsByClassName("btn");
    var findName = document.getElementById("name");
    var result = document.querySelector("#result");

    btn.addEventListener("click", function(e){
        e.preventDefault();
        var findRequest = findName.value;

        xhttp = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab4/superheroes.php?query="+ findRequest +"";
        xhttp.onreadystatechange = showMessage;
        xhttp.open('GET',url);
        xhttp.send();
    });

    function showMessage(){
        if(xhttp .readyState === XMLHttpRequest.DONE){
            if(xhttp.status === 200){
                var res = xhttp.responseText;
                result.innerHTML = res;
            }else{
                alert('There is a problem with the request.');
            }
        }
    }

}





































