$(document).ready(function(){

reloadlinks();

	$('#add_button').click(function(){
		$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');//añadir links a la lista

		$("#add_link").val('');
		reloadlinks();
	});
 



});

function reloadlinks(){

	$('a').each(function(index){
		var that = $(this)
		var enlace = that.attr("href");

		that.attr('target','_blank');//abrir cada enlace en una pestaña nueva
		that.text(enlace);
	});
}