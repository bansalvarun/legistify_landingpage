function changeActivePag(i){
	for (var j = 3; j > 0; j--) {
		a = document.getElementById("pag"+j);
		a.setAttribute("src","img/inactive.png");
	};
	a = document.getElementById("pag"+i);
	a.setAttribute("src","img/active.png");

}
$(document).ready(function(){
	var s = $( document ).width();
	if(s<900 )
		$('.hideMeOnTablet').hide();
	if(s<500)
		$('.hideMeOnMobile').hide();
	if(s<360){
		$(".floatCenterOnMobileAll").attr("style","float:left;margin-left:15%");
	}
	if(s<800 && s>500)
		$('.hideMeOnyOnTablet').hide();
	// if(s<540 && s>375)b
		// $(".floatCenterOnMobileAll").attr("style","float:left;margin-left:5%");
	if(s<540 && s>350){
		$('.floatCenterOnMobileLawyers').attr("style","float:left;margin-left:25%");
	}
	if(s<1000 && s>500)
		$('.floatCenterOnMobile').attr("style","float:center");
	
	// $( "#findLawyersBlock" ).mouseover(function() {
	//   $( "#findLawyers" ).attr( "style","display:block" );
	//   $( "#ourServices" ).attr( "style","display:none" );
	//   $( "#findLawyersBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	//   // $( "#findLawyersBlock1" ).css({ "display": "none", "opacity": "1" }).animate({ "opacity": "0" }, 1000);
	//   $( "#findLawyersBlock1" ).attr( "style","display:none" );
	// });
	// $( "#findLawyersBlock" ).mouseout(function() {
	//   $( "#findLawyers" ).attr( "style","display:none" );
	//   $( "#ourServices" ).attr( "style","display:block" );
	//   $( "#findLawyersBlock1" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	//   // $( "#findLawyersBlock2" ).css({ "display": "none", "opacity": "1" }).animate({ "opacity": "0" }, 1000);
	//   $( "#findLawyersBlock2" ).attr( "style","display:none" );
	// });
	$( "#findLawyersBlock" ).hover(function() {
	  if(s>500){
		  $( "#findLawyers" ).attr( "style","display:block" );
		  $( "#ourServices" ).attr( "style","display:none" );
	  }
	  $( "#findLawyersBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#findLawyersBlock1" ).attr( "style","display:none" );
	},function(){
	  if(s>500){
		  $( "#findLawyers" ).attr( "style","display:none" );
		  $( "#ourServices" ).attr( "style","display:block" );
	  }
	  $( "#findLawyersBlock1" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#findLawyersBlock2" ).attr( "style","display:none" );
	});


	$( "#makeDocumentsBlock" ).hover(function() {
	  if(s>500){		
		  $( "#makeDocuments" ).attr( "style","display:block" );
		  $( "#ourServices" ).attr( "style","display:none" );
	  }
	  $( "#makeDocumentsBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#makeDocumentsBlock1" ).attr( "style","display:none" );
	 },function() {
	  if(s>500){
		  $( "#makeDocuments" ).attr( "style","display:none" );
		  $( "#ourServices" ).attr( "style","display:block" );
	  }
	  $( "#makeDocumentsBlock1").css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#makeDocumentsBlock2" ).attr( "style","display:none" );
	});	
	$( "#startResearchBlock" ).hover(function() {
	  if(s>500){
		  $( "#startResearch" ).attr( "style","display:block" );
		  $( "#ourServices" ).attr( "style","display:none" );
	  }
	  $( "#startResearchBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 2000);
	  // $( "#startResearchBlock2" ).css({ "display": "block", "width": "0" }).animate({ "width": "100%" }, 1000);
	  $( "#startResearchBlock1" ).attr( "style","display:none" );
	},function() {
	  if(s>500){
		  $( "#startResearch" ).attr( "style","display:none" );
		  $( "#ourServices" ).attr( "style","display:block" );
	  }
	  $( "#startResearchBlock1" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 2000);
	  // $( "#startResearchBlock1" ).css({ "display": "block", "width": "0" }).animate({ "width": "100%" }, 1000);
	  $( "#startResearchBlock2" ).attr( "style","display:none" );
	});
});