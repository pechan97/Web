$(document).ready(function(){
            $("#menu").hide();     
            /* Se muestra el menu a la hora de darle click derecho */
            $(document).bind("contextmenu", function(e){
                  $('#msj').css('display','none');
                  $("#menu").css({'display':'block', 'left':e.pageX, 'top':e.pageY});
                  return false;
            });      
            //cuando hagamos click, el menú desaparecerá
            $(document).click(function(e){
                  if(e.button == 0){
                        $("#menu").css("display", "none");
                  }
            });        
            //controlamos los botones del menú
            $("#menu").click(function(e){           
                  // El switch utiliza los ids de los <li> del menú
                  switch(e.target.id){
                        case "proyecto":                   	
                              $("#dialog").css("display", "block");
                              $("#nombre").focus();
                              $('#labelmsj').text("");
                              break;      
                        case "persona":
                             $("#dialog2").css("display", "block");
                             $('#labelmsj2').text("");
                              $("#nombre2").focus();
                              break;
                    }
                   
            });  
}); 