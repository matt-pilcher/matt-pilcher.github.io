// Offset for navigation bar when scrolling

$('#siteNav').affix({
	offset: {
		top: 100
	}
});

/* Hosting this site on github pages so no backend. Formspree is great
for contact forms on static sites but the default behavior redirects to
their site after submitting the form. This will keep users on the site. 

Currently not sending the data

var $contactForm = $('#contactform');
$contactForm.submit(function(e) {
	e.preventDefault();

	$.ajax({
			url: '//formspree.io/mpilcher90@email.com',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',

			beforeSend: function() {
				$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
			},

			success: function(data) {
				$contactForm.find('.alert--loading').hide();
				$contactForm.append('<div class="alert alert--success">Message sent!</div>');
			},

			error: function(err) {
				$contactForm.find('.alert--loading').hide();
				$contactForm.append('<div class="alert alert--error">Sorry, there was an error.</div>');
		}
	});
});

*/
