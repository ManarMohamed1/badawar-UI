 //adding another contact
	$(document).on('click', '.add-new-contact', function(e){

		e.preventDefault();
		let template = $('#contact-template').html();
		contact_index++;

	    var templateScript = Handlebars.compile(template);
	    var context = {"contact_index" : contact_index};
	    var html = templateScript(context);

	    $('.add-new-contact').before(html);
	    return false;
	})