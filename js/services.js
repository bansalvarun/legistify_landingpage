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
	if(s<900)
		$('.hideMeOnTablet').hide();
	if(s<500)
		$('.hideMeOnMobile').hide();
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
	  $( "#findLawyers" ).attr( "style","display:block" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#findLawyersBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#findLawyersBlock1" ).attr( "style","display:none" );
	},function(){
	  $( "#findLawyers" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block" );
	  $( "#findLawyersBlock1" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#findLawyersBlock2" ).attr( "style","display:none" );
	});


	$( "#makeDocumentsBlock" ).hover(function() {
	  $( "#makeDocuments" ).attr( "style","display:block" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#makeDocumentsBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#makeDocumentsBlock1" ).attr( "style","display:none" );
	 },function() {
	  $( "#makeDocuments" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block" );
	  $( "#makeDocumentsBlock1").css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#makeDocumentsBlock2" ).attr( "style","display:none" );
	});	
	$( "#startResearchBlock" ).hover(function() {
	  $( "#startResearch" ).attr( "style","display:block" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#startResearchBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 2000);
	  // $( "#startResearchBlock2" ).css({ "display": "block", "width": "0" }).animate({ "width": "100%" }, 1000);
	  $( "#startResearchBlock1" ).attr( "style","display:none" );
	},function() {
	  $( "#startResearch" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block" );
	  $( "#startResearchBlock1" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 2000);
	  // $( "#startResearchBlock1" ).css({ "display": "block", "width": "0" }).animate({ "width": "100%" }, 1000);
	  $( "#startResearchBlock2" ).attr( "style","display:none" );
	});
});