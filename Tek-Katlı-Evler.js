document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}
    
    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";}  
    
    
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    

                    
    




   
    {
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}    
   
    var lang=localStorage.getItem('lang');
    localStorage.getItem('lang');   
    if(lang==("en")){
    $('[lang="en"]').show();
    $('[lang="tr"]').hide();
    $('[lang="ar"]').hide();}
    
    
    if(lang==("tr")){
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}
    
    if(lang==("ar")){
    $('[lang="ar"]').show();
    $('[lang="en"]').hide();
    $('[lang="tr"]').hide();}});


    


    
    $(document).ready(function () {
        $('#switch-lang-en').click(function() {
            $('[lang="tr"]').hide();
            $('[lang="en"]').show();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'en');
        });
    });
    

    $(document).ready(function () {
        $('#switch-lang-tr').click(function() {
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');
        });
    });


    $(document).ready(function () {
        $('#switch-lang-ar').click(function() {
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');
        });
    });

    
    
    function filter00 (){

        $('[filtet="50"]').show();
        $('[filtet="100"]').show();
        $('[filtet="200"]').show();

        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "#1A4990";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter.png)";
        
        document.querySelector(".M50").style.backgroundColor= "white";
        document.querySelector(".M50 p").style.color= "#1A4990";

        document.querySelector(".M100").style.backgroundColor= "white";
        document.querySelector(".M100 p").style.color= "#1A4990";

        document.querySelector(".M200").style.backgroundColor= "white";
        document.querySelector(".M200 p").style.color= "#1A4990";
        
    }
    
    
    function filter50 (){
        
        $('[filtet="50"]').show();
        $('[filtet="100"]').hide();
        $('[filtet="200"]').hide();

        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "white";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter-SE.png)";
        
        document.querySelector(".M50").style.backgroundColor= "#1A4990";
        document.querySelector(".M50 p").style.color= "white";

        document.querySelector(".M100").style.backgroundColor= "white";
        document.querySelector(".M100 p").style.color= "#1A4990";

        document.querySelector(".M200").style.backgroundColor= "white";
        document.querySelector(".M200 p").style.color= "#1A4990";
       
        
        
        
        

    }
    function filter100 (){

        $('[filtet="50"]').hide();
        $('[filtet="100"]').show();
        $('[filtet="200"]').hide();

        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "white";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter-SE.png)";
        
        document.querySelector(".M50").style.backgroundColor= "white";
        document.querySelector(".M50 p").style.color= "#1A4990";

        document.querySelector(".M100").style.backgroundColor= "#1A4990";
        document.querySelector(".M100 p").style.color= "white";

        document.querySelector(".M200").style.backgroundColor= "white";
        document.querySelector(".M200 p").style.color= "#1A4990";

    }
    function filter200 (){

        $('[filtet="50"]').hide();
        $('[filtet="100"]').hide();
        $('[filtet="200"]').show();


        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "white";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter-SE.png)";
        
        document.querySelector(".M50").style.backgroundColor= "white";
        document.querySelector(".M50 p").style.color= "#1A4990";

        document.querySelector(".M100").style.backgroundColor= "white";
        document.querySelector(".M100 p").style.color= "#1A4990";

        document.querySelector(".M200").style.backgroundColor= "#1A4990";
        document.querySelector(".M200 p").style.color= "white";


    }

    function setIMG(IMGURL) {
            
            
        var imglink=IMGURL
                   
        
        $('.imgXX').css({'content' : 'url(' + imglink + ')'});
        $('.backgrund').css({'opacity': '100%'});
        $('.backgrund').css({'z-index': '1000'});
        
       

        
    }

       document.querySelector(".closex").addEventListener("click", close, false);
       
       document.querySelector(".backgrund-black").addEventListener("click", close, false);
    
    
        function close() {
        
        
        {myVar  = setTimeout(zindex, 300);}
        
        
        $('.backgrund').css({'opacity': '0%'});
        }

        
        
        
        function zindex() {
            $('.backgrund').css({'z-index': '-1000'});



        }

    
    function selected (S){
        

        for( var i=1 ; i <= 40; i++ ){



            $('[filtet='+"SS"+i+']').hide();
            
            $('[filtet='+"SS"+S+']').show();

           
           document.querySelector(".NN"+i).style.color= "#8f8f8f";
           document.querySelector(".NN"+S).style.color= "white";
         
           

        }
        




    }
        selected (1)


