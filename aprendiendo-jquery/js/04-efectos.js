$(document).ready(function(){
	var caja = $("#caja");
		$ ("#mostrar").hide();		

		$("#mostrar").click(function(){
			$(this).hide();
			$("#ocultar").show();
			//$("#caja").show('normal');//mostrar el elemento haciendo un efecto  
			//$("#caja").fadeIn('slow');
			caja.fadeTo('slow',1)
		});

		$("#ocultar").click(function(){
			$(this).hide();
			$("#mostrar").show();
			//$("#caja").hide('normal');//ocultar el elemento haciendo un efecto  
			caja.slideUp('slow');
			console.log("cartel ocultado")
		});
		$("#todoenuno").click(function(){
			caja.slideToggle('fast');
		});

		$("#animar").click(function(){
			caja.animate({
							marginLeft: '500px',
							fontSize: '40px',
							height: '200px'
						    },'slow')
				.animate({
							borderRadius: '900px',
							marginLeft: '80px'
						}, 'slow')
				.animate({
							borderRadius: '0px',
							marginLeft: '0px'
						}, 'slow')
				.animate({
							borderRadius: '100px',
							marginTop: 'opx'
						}, 'slow')


		});
});