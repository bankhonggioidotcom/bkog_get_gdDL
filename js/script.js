/**
* Google Drive Link Generator
*/
$(function () {
	$('#generar').click(function () {
		var sharingurl = $.trim($('#sharingurl').val());
		if (sharingurl.length <= 0){
			$('#modalerror').modal('show'); 
			$('#errormsg').text('No has introducido ningún enlace en el cuadro de texto');
			return;
		}
		var googleid = '';
		var regexp = /https:\/\/drive\.google\.com\/file\/d\/(.*?)\/(edit|view)/;
		var match = sharingurl.match(regexp);
		if ( match ){
			googleid = match[1];
		}
		else{
			regexp = /https:\/\/drive\.google\.com\/open\?id\=(.*?)$/;
			match = sharingurl.match(regexp);
			if ( match ){
				googleid = match[1];
			}
		}
		if (googleid){
			$('#googlelink').val('https://drive.google.com/uc?export=download&id=' + googleid);
		}
		else{
			$('#modalerror').modal('show');
			$('#errormsg').text('Por favor, introduce un enláce de para compartir de Google Drive válido');
			$('#sharingurl').val("");
			$('#googlelink').val("");
		}
	});
});
$("#borrar").click(function () {
	$('#sharingurl').val("");
	$('#googlelink').val("");

});

$("#descargar").click(function () {
	
});

tippy('#copiar', {
	content: "Copiado!",
	placement: 'top',
	animation: 'shift-away',
	theme: 'material',
	trigger: 'click',
	delay: [0, 100],
});
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
	console.info('Action:', e.action);
	console.info('Text:', e.text);
	console.info('Trigger:', e.trigger);

	e.clearSelection();
});

clipboard.on('error', function(e) {
	console.error('Action:', e.action);
	console.error('Trigger:', e.trigger);
});