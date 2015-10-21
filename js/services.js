$(document).ready(function(){
	$( "#findLawyersBlock" ).mouseover(function() {
	  $( "#findLawyers" ).attr( "style","display:block" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#findLawyersBlock2" ).attr( "style","display:block" );
	  $( "#findLawyersBlock1" ).attr( "style","display:none" );

	});
	
	$( "#findLawyersBlock" ).mouseout(function() {
	  $( "#findLawyers" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block" );
	  $( "#findLawyersBlock1" ).attr( "style","display:block" );
	  $( "#findLawyersBlock2" ).attr( "style","display:none" );
	});

	$( "#makeDocumentsBlock" ).mouseover(function() {
	  $( "#makeDocuments" ).attr( "style","display:block" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#makeDocumentsBlock2" ).attr( "style","display:block" );
	  $( "#makeDocumentsBlock1" ).attr( "style","display:none" );
	});
	$( "#makeDocumentsBlock" ).mouseout(function() {
	  $( "#makeDocuments" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block" );
	  $( "#makeDocumentsBlock1" ).attr( "style","display:block" );
	  $( "#makeDocumentsBlock2" ).attr( "style","display:none" );
	});	
	$( "#startResearchBlock" ).mouseover(function() {
	  $( "#startResearch" ).attr( "style","display:block" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#startResearchBlock2" ).attr( "style","display:block" );
	  $( "#startResearchBlock1" ).attr( "style","display:none" );
	});
	$( "#startResearchBlock" ).mouseout(function() {
	  $( "#startResearch" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block" );
	  $( "#startResearchBlock1" ).attr( "style","display:block" );
	  $( "#startResearchBlock2" ).attr( "style","display:none" );
	});
});