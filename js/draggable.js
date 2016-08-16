var selected = $([]), offset = {top:0, left:0}; 
 function movergrupo() {
$( ".proyectos" ).draggable({
    start: function(event, ui) {
        if ($(this).hasClass("ui-selected")){
            selected = $(".ui-selected").each(function() {
               var el = $(this);
               el.data("offset", el.offset());
            });
        }
        else {
            selected = $([]);
            $("#proyectos").removeClass("ui-selected");
        }
        offset = $(this).offset();
    },
    drag: function(event, ui) {
        var dt = ui.position.top - offset.top, dl = ui.position.left - offset.left;
            selected.not(this).each(function() {
             var p=$(this);
             var elOffset = p.data("offset");
            p.css({top: elOffset.top + dt, left: elOffset.left + dl});
        });
    }
});
}



$( "#proyectos" ).selectable();
$( "#proyectos" ).on("click", ".proyectos",function(e){
    if (e.ctrlKey == false) {
        // if command key is pressed don't deselect existing elements
        $( "#proyectos" ).removeClass("ui-selected");
        $(this).addClass("ui-selecting");
    }
    else {
        if ($(this).hasClass("ui-selected")) {
            // remove selected class from element if already selected
            $(this).removeClass("ui-selected");
        }
        else {
            // add selecting class if not
            $(this).addClass("ui-selecting");
        }
    }
    
    
});

// starting position of the divs
var i = 0;
$("#proyectos").each( function() {
    $(this).css({
        top: i * 42 
    });
    i++;
});
