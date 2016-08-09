var cont=0;
var cont1=0;
var cont2=0;
var oID=0;
$(document).ready(function() {

         //A la hora de dar click derecho se quita el dialog
         $(document).bind("contextmenu", function(e){
                  $("#dialog").css('display','none');
                   $("#dialog2").css('display','none');
            }); 
      //Valida si el usuario está escribiendo para poner el label en balnco 
      $("#nombre").on('keyup', function(){
        $('#labelmsj').text("");
       });
      //Desaparece el dialog si toca el boton cancelar
     $('#cancel').click(function(event) {
      $("#dialog").css('display','none');
     });
      //Desaparece el dialog si toca el boton cancelar2
     $('#cancel2').click(function(event) {
      $("#dialog2").css('display','none');
     });
    //Agrega un proyecto a la pantalla.
	var listaProyectos = $('.prin');
	var texto= '';	
    $('.guardar').click(function(event) {
    	 $('#labelmsj').text("");
    	if ($('#nombre').val().length <	 1) {
            $('#labelmsj').text("Inserte el nombre del proyecto");
            $("#nombre").focus();
    	}else{
    		$("#dialog").css('display','none');
        texto=$('#nombre').val();
        cont1++;
		    listaProyectos.append('<div class="proyectos" id=del'+cont1+'><div class="cerrar"><button class="close" id=del' + cont1 +'>X</button></div><div class="titulos">'+texto+'</div></div>');		
        $('#nombre').val('');	
    	}   	
	});

    //Agrega una persona a la pantalla.
	var listaPersonas = $('.listaPersonas')
	var texto2= '';	
	 $('.guardar2').click(function(event) {
	 	$('#labelmsj2').text("");
	 	if ($('#nombre2').val().length < 1) {
            $('#labelmsj2').text("Inserte el nombre de la persona");
            $("#nombre2").focus();
	 	} else { 		
         $("#dialog2").css('display','none');
        texto2=$('#nombre2').val();
        cont2++;
		listaPersonas.append('<div class="personas" id=eli'+cont2+'><div class="cerrar"><button class="close" id=eli' + cont2+'>X</button></div><div class="titulos">'+texto2+'</div></div>');		
		cont++;
		$('#nombre2').val('');	
	 	}	
	});
	  $('#mostrar').click(function(){
	  	if (cont>0) {
	  	     var stringA = $(this).text();
                 if (stringA==='Mostrar Personas'){
                   $('.listaPersonas').css({'height':'200px'});
                   $('.personas').css('display','block');
                   $(this).text('Ocultar Personas');
                } else if(stringA==='Ocultar Personas'){
                   $('.listaPersonas').css({'height':'20px'});
                   $('.personas').css('display','none');
                   $(this).text('Mostrar Personas');
                }
        } else {
        	 $('#msj').css('display','block');
        }        
	 });
    //Eliminar Proyectos
     var eliminarPro;
  $('.prin').on('click', '.close', function(event){
      eliminarPro = $(this).attr('id');
      $('#'+eliminarPro).remove();
  }); 
  var eliminarPer;
   $('.listaPersonas').on('click', '.close', function(event){
      eliminarPer = $(this).attr('id');
      $('#'+eliminarPer).remove();
  }); 
});