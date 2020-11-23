$(document).ready(function(){
	$("#slide img:eq(0)").addClass("ativo").show();
	$("#indicadores-slide span:eq(0)").addClass("indicador-ativo");
	setInterval(slide,10000);

	function slide(){
		if($(".ativo").next().length){
			$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
			$(".indicador-ativo").removeClass("indicador-ativo").next().addClass("indicador-ativo");
		} else{
			$(".ativo").fadeOut().removeClass("ativo");
			$("#slide img:eq(0)").fadeIn().addClass("ativo");
			$(".indicador-ativo").removeClass("indicador-ativo");
			$("#indicadores-slide span:eq(0)").addClass("indicador-ativo");
		}
	}

	$("#passar").click(function(){
		slide()
	});

	$("#voltar").click(function(){
		if($(".ativo").prev().length){
			$(".ativo").fadeOut().removeClass("ativo").prev().fadeIn().addClass("ativo");
			$(".indicador-ativo").removeClass("indicador-ativo").prev().addClass("indicador-ativo");
		} else{
			$(".ativo").fadeOut().removeClass("ativo");
			$("#slide img:eq(2)").fadeIn().addClass("ativo");
			$(".indicador-ativo").removeClass("indicador-ativo");
			$("#indicadores-slide span:eq(2)").addClass("indicador-ativo");
		}
	});


	$("#ver-equipe").click(function(){
		$(this).next().toggle("#quadros");
	});
	
});

