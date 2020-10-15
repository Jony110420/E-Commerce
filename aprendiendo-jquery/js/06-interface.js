$(document).ready(function(){
//mover el elemnto por la pagina
	$(".elemento").draggable();

	//redimencionar 
	$(".elemento").resizable();

	//Seleccionar y ordenar elementos
	//$(".lista-seleccionable").selectable();
		$(".lista-seleccionable").sortable({
			update: function(event, ui){
				console.log("A cambiado la lista");
			}
		});


//DROP
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Has soltado algo dentro del area");
		}
	});


	//efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("shake",4000);
	});


	//ToolTip
	$(document).tooltip();

	//Dialog
	$("#lanzar-popup").click(function(){
		$("#popup").dialog();
	})

	//Datepicker
	$("#calendario").datepicker();

	//tabs
	$("#pestanas").tabs();
	
});