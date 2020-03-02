$(document).ready(function(){
	$(document).on('click','.delete-row', function(){
			var delete_url = $(this).data('target');
			$('.delete-confirmation').modal();
			$('.delete-confirmation-button').data('delete-url',delete_url);
			$('.delete-confirmation').on('hidden.bs.modal', function () {
				$('.delete-confirmation-button').unbind('click');
			});
		$('tr').removeClass('delete-row-this');
		$(this).closest('tr').addClass('delete-row-this');
		return false;
	});
	$(document).on('click','.delete-confirmation-button', function(){
		var delete_url = $(this).data('delete-url');
		var my_modal = $('.delete-confirmation:first');
		$.ajax({
			url: delete_url,
			dataType: 'json',
			success: function(data)
			{
				if(data.success == true)
				{
					$.growl(data.msg, {
						type: 'success',
						delay: 7770,
						animate: {
							enter: 'animated bounceInDown',
							exit: 'animated bounceOutUp'
						}
					});

					$('#tablelistdata').DataTable().row( $('tr.delete-row-this') ).remove().draw();
					$('.gc-refresh').click();
				}
				else
				{
					$.growl(data.msg, {
						type: 'error',
						delay: 7770,
						animate: {
							enter: 'animated bounceInDown',
							exit: 'animated bounceOutUp'
						}
					});
				}
				my_modal.modal('hide');
			}
		});
	});
$(document).ready(function(){
 
	$(document).on('click','.request', function(){
		var request_url = $(this).data('request-url');
		var my_modal = $('.requestModal:first');
                $('.requestModal').modal();
               
		$.ajax({
			url: request_url,
			dataType: 'json',
			success: function(data)
			{
                          var successUrl = data.success_list_url ; 
				if(data.success == true)
				{
                                   
					$.growl(data.msg, {
						type: 'success',
						delay: 7770,
						animate: {
							enter: 'animated bounceInDown',
							exit: 'animated bounceOutUp'
						}
					});
                                       
					 
					$('.gc-refresh').click();
				}
				else
				{
					$.growl(data.msg, {
						type: 'error',
						delay: 7770,
						animate: {
							enter: 'animated bounceInDown',
							exit: 'animated bounceOutUp'
						}
					});
				}
				my_modal.modal('hide');
                                window.location =  successUrl;
 			}
		});
	});
        });
	$(document).on('click','.dc-print', function(){
		var print_url = $(this).data('target'),
			form_input_html = '',
			form_on_demand;
		if ($('.dataTables_filter input[type="search"]').val() != '') {
			form_input_html += '<input type="hidden" name = "search" value="' + $('.dataTables_filter input[type="search"]').val() + '"/>';

		}else{
			$('#tablelistdata').find('tfoot input').each(function () {
				// if ($(this).val() !== '' && !$(this).is(':checkbox')) {
				// 	form_input_html = form_input_html + '<input type="hidden" name="search_field[]" value="' + $(this).attr('name') + '">'
				// 		+ '<input type="hidden" name="search_text[]" value="' + $(this).val() + '">';
				// }
			});
		}




		$.confirm({
			title: 'Print Options',
			content: '' +
			'<form action="" class="formName">' +
			'<div class="form-group">' +
			'<label>Enter Print Subject</label>' +
			'<input type="text" name="print-subject" placeholder="Print Subject" class="print-subject form-control" required />' +
			'</div>' +
			'</form>',
			buttons: {
				formSubmit: {
					text: 'Submit',
					btnClass: 'btn-blue',
					action: function () {
						var print_subject = this.$content.find('.print-subject').val();
						if(!print_subject){
							$.alert('provide a valid name');
							return false;
						}

						form_input_html += '<input type="hidden" name = "print-subject" value="' + print_subject + '"/>';

						form_print = $("<form/>").attr("method", "post").attr("action", print_url).html(form_input_html);

						console.log(form_print);
						form_print.ajaxSubmit({
							beforeSend: function () {
								$('body').addClass('CLASS_LOADING');
							},
							complete: function () {
								$('body').removeClass('CLASS_LOADING');
							},
							error: function () {
								$('body').removeClass('CLASS_LOADING');
							},
							success: function (html_data) {
								$('body').removeClass('CLASS_LOADING');
								$("<div/>").html(html_data).printThis({});
							}
						});

					}
				},
				cancel: function () {
					//close
				},
			},
			onContentReady: function () {
				// bind to events
				var jc = this;
				this.$content.find('form').on('submit', function (e) {
					// if the user submits the form by pressing enter in the field.
					e.preventDefault();
					jc.$$formSubmit.trigger('click'); // reference the button and click it
				});
			}
		});





	});


});
