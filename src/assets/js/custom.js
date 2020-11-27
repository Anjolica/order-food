$(document).ready(function() {
    
    var url = window.location.pathname;
	var suburl = url.substring(url.lastIndexOf('/')+1);
    
    $('.dataTable').DataTable({
		responsive : true,
		language : {
			paginate : {
				previous: "<",
				next: ">"
			}
		},
		bLengthChange : false,
		bFilter : true,
		bInfo : false,
		bAutoWidth : false,
		dom: 'Bfrtip',
		buttons: [{
			text: "",
			action: function ( e, dt, node, config ) {
				//
			}
		}]
    });
    
	$(".dt-button").addClass("bg-white text-dark display-5");
	$(".dt-button").removeClass("dt-button");
    
    if(suburl == "home") {
		$(document).find('a[aria-controls]').not('.page-link').html("Invoice List");
	} 
});