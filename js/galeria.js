var num=1;

function adelante () {
    num++;
    if(num>12)
        num=1;
    var foto=document.getElementById("foto");
    foto.src="img/imagen"+num+".jpeg";
    }

    function atras () {
        num--;
        if(num<1)
            num=12;
        var foto=document.getElementById("foto");
        foto.src="img/imagen"+num+".jpeg";
    }