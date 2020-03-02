$(document).ready(function() {

			//
//			action-btn-void
//				$(document).on('click',".ui-button-text",function(e){
//					if($(this).prev().hasClass('fancy_link')
//					){
//						$(this).prev().click();
//					}
//
////				});

			$('.action-btn-void,.preview_youtube,.stop_action').each(function ()
			{
			//	$(this).parent().attr('onclick','return false;');
				//$(this).parent().addClass('action-btn-void-on')

			});






			$(document).on('click',".action-btn-void-on",function(e){
//				e.preventDefault();
//				var fancy_href = $(this).parent().attr("href");
//					$.fancybox({
//						'titleShow' 	:true,
//						'type'          : 'iframe',
//						'href'			: fancy_href,
//						'width'         : '90%',
//						'height'        : '77%',
//						'centerOnScroll': true,
//						'autoDimensions': false,
//						'showCloseButton': true,
//						'transitionIn'	: 'none',
//						'transitionOut'	: 'none',
//					});
			});
 
	
			//set menu active
			$('#sidebar-menu a').each(function(){
				if($(this).parent().hasClass('current-page')){
					$(this).parent().parent().show(0);
					$(this).parent().parent().parent().addClass('active');
					if($(this).parent().parent().parent().parent().hasClass('child_menu')){
						$(this).parent().parent().parent().parent().show(0);
					}
				}
			});



		});
function fullscreen() {
	var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
		(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
		(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
		(document.msFullscreenElement && document.msFullscreenElement !== null);

	var docElm = document.documentElement;
	if (!isInFullScreen) {
		if (docElm.requestFullscreen) {
			docElm.requestFullscreen();
		} else if (docElm.mozRequestFullScreen) {
			docElm.mozRequestFullScreen();
		} else if (docElm.webkitRequestFullScreen) {
			docElm.webkitRequestFullScreen();
		} else if (docElm.msRequestFullscreen) {
			docElm.msRequestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
}

function search_table() {
	var input, filter, table, tr, td, i;
	input = document.getElementById("search-table-input");
	filter = input.value.toUpperCase().trim();
	table = document.getElementById("searchable-table");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

                     
     
  