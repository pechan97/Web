var cont=0;
var cont1=0;
var cont2=0;
var oID=0;
var cont3=0;
var boleano=false;
var eliperpro=false;
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
        var posx = Math.floor((Math.random() * 380) + 220); 
        var posy = Math.floor((Math.random() * 875) + 25);  
		    listaProyectos.append('<div class="proyectos" id=del'+cont1+' style="top: ' + posx + 'px; left: ' + posy + 'px;"><div class="cerrarpro"><button class="closepro" id=del' + cont1 +'>X</button><button class="editpro" id=edi' + cont1+'>=</button></div><div class=edi'+cont1+' id="titulospro">'+texto+'</div><div class="acomoda"></div></div>');
        $('#nombre').val('');	
        $( ".proyectos" ).draggable();
          $( ".acomoda" ).droppable({ 
             accept: '.personas',            
              drop: function(event, ui) { 
                  boleano=true;
                  eliperpro=true;
                  $(ui.draggable).remove();
                  var droppedDiv=$(ui.draggable).clone().css('display','block');;
                  $(this).append(droppedDiv);
                  $('.personas').draggable({helper:'clone',
                    containment: '.principal',
                    stack: '.personas div',
                    cursor: 'move',
                    revert: true});
              }
    	    });   	
	    }
    });

    //Agrega una persona a la pantalla.
	var listaPersonas = $('.listaPersonas');
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
		listaPersonas.append('<div class="personas" id=eli'+cont2+'><div class="cerrar"><button class="close" id=eli' + cont2+'></button><button class="edit2" id=edi2' + cont2+'></button></div><div class=edi2'+cont2+' id="titulos">'+texto2+'</div></div>');		
		cont++;
    if (cont3>0) {
      $('.personas').css('display','block');
    }
     $( ".personas" ).draggable({helper:'clone'});
		$('#nombre2').val('');	
	 	}	
	});
	  $('#mostrar').click(function(){
      cont3++;
	  	if (cont>0) {
	  	     var stringA = $(this).text();
                 if (stringA==='Mostrar Personas'){
                   $('.listaPersonas').css({'height':'200px'});
                   $('.personas').css('display','block');
                   $(this).text('Ocultar Personas');                
                } else if(stringA==='Ocultar Personas'){
                   $('.listaPersonas').css({'justify-content':'20px'});
                   $('.personas').css('display','none');
                   $(this).text('Mostrar Personas');
                   cont3=0;
                }
        } else {
        	 $('#msj').css('display','block');
        }        
	 });
     if (!boleano) {
      $( ".listaPersonas" ).droppable({ 
             accept: '.personas',            
              drop: function(event, ui) { 
                  var droppedDiv2=$(ui.draggable).clone().css('display','block');
                  $(this).append(droppedDiv2);  
                  $(ui.draggable).remove();
                  $( ".personas" ).draggable({helper:'clone'});         
                }
          });
    }
    //Eliminar Proyectos
     var eliminarPro;
  $('.prin').on('click', '.closepro', function(event){
      eliminarPro = $(this).attr('id');
      $('#'+eliminarPro).remove();
  }); 
  //Eliminar Personas
  var eliminarPer;
   $('.listaPersonas').on('click', '.close', function(event){
      eliminarPer = $(this).attr('id');
      $('#'+eliminarPer).remove();
  });
  var eliminarPermov;
   $('.principal').on('click', '.close', function(event){
      eliminarPermov = $(this).attr('id');
      alert('eliminarPermov');
      $('#'+eliminarPermov).remove();
  });  
   var editarProyecto;
  $('.prin').on('click', '.editpro', function(event){
      $("#dialog3").css('display','block');
      $("#nombre3").focus();
      editarProyecto = $(this).attr('id');
     $('.guardar3').click(function(event) {  
       $('#labelmsj').text("");
       if ($('#nombre3').val().length <  1) {
            $('#labelmsj3').text("Inserte el nombre del proyecto");
            $("#nombre3").focus();
        }else{
         $("#dialog3").css('display','none');
         texto=$('#nombre3').val();
         $('.'+editarProyecto).html(texto);
         $('#nombre3').val(''); 
        }
      });    
  }); 
     var editarPersona;
  $('.listaPersonas').on('click', '.edit2', function(event){
      $("#dialog4").css('display','block');
      $("#nombre4").focus();
      editarPersona = $(this).attr('id');
     $('.guardar4').click(function(event) {  
       $('#labelmsj').text("");
       if ($('#nombre4').val().length <  1) {
            $('#labelmsj4').text("Inserte el nombre de la persona");
            $("#nombre4").focus();
        }else{
         $("#dialog4").css('display','none');
         texto=$('#nombre4').val();
         $('.'+editarPersona).html(texto);
         $('#nombre4').val(''); 
        }
      });    
  });
     //Desaparece el dialog si toca el boton cancelar3
     $('#cancel3').click(function(event) {
      $("#dialog3").css('display','none');
     });
      //Desaparece el dialog si toca el boton cancelar4
     $('#cancel4').click(function(event) {
      $("#dialog4").css('display','none');
     });
   
});