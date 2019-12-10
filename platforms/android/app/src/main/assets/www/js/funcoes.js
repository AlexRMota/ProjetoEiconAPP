$(document).ready(function() {
	
		//ajusta altura da tela
		//$("body").css("overflow", "hidden");
		$varAltura = $(window).height();
		$('#dino').height($varAltura);


		//controla a abertura das divs (telas)
		$("#bot1, #bot3").click(function(){
			var varBox = $(this).attr("data-box");		
			$("div").scrollTop(0);
			$(".geral").hide();
			$(".geral3").hide();
			$("#"+varBox).show();
			if (varBox=="tela06") {
				//console.log (cordova);
				listDir(cordova.file.applicationDirectory + "www/cards/");
			}
		});	


		//Fecahr
		$("#botFecha").click(function(){
			$("#push1").hide();
		});	


		//Sair
		$("#sair").click(function(){
			/*document.addEventListener("deviceready", this.onDeviceReady, false);*/
			/*navigator.app.exitApp();*/
			var retVal = confirm("Do you want to Exit the Program ?"); 
			if(retVal) { 
				localStorage.clear(); 
					if(navigator.app){ 
						navigator.app.exitApp(); 
					} 
					else if(navigator.device){ 
						navigator.device.exitApp(); 
					} 
				} 
			else { 
				return false; 
			} 
		});


		//controla os menus esquerdos
		$('body').click(function (event) {
			if(event.target.id=='menuSvg'){
				$('#menuApp').show();
			} 
			if(event.target.id=='menuApp'){
				$('#menuApp').show();
			} 
			if((event.target.id!='menuSvg')&&(event.target.id!='menuApp')){
				$('#menuApp').hide();
			}
			if((event.target.id=='tamX')&&(event.target.id!='menuApp')){
				$('#menuApp').hide();
			}
		});	

	
});
