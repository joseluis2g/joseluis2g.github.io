$(document).ready(function () {
    email();
});

addEvents:function email() {
    $('#btnContactUs').on("click", function () {
        
		var lang = document.documentElement.lang;
		
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject option:selected").text();
        var message = $("#message").val();
        
        if (name != null && name.length > 0 &&
            email != null && email.length > 0 &&
            subject != null && subject.length > 0 &&
            message != null && message.length > 0)
        {
            $.ajax({
                url: "//formspree.io/joseluis.ggr@gmail.com", 
                method: "POST",
                data: { 
					name: name,
					email: email,
					comments: message,
					_subject: subject
				},
                dataType: "json",
				success: function(data) {
					if (lang == "es-ES")
					{
						$('.alert-header h3').text('Exito!');
						$('.alert-message p').text('E-mail enviado exitosamente!');
					}
					else
					{
						$('.alert-header h3').text('Success!');
						$('.alert-message p').text('E-mail sent successfully!');
					}

				},
				error: function(data) {
					if (lang == "es-ES")
					{
						$('.alert-header h3').text('Atencion!');
						$('.alert-message p').text('Hubo un error intentando enviar el e-mail. Intente de nuevo mas tarde.');
					}
					else
					{
						$('.alert-header h3').text('Warning!');
						$('.alert-message p').text('An error occurred while tried to send the email. Please, try again later');
					}
				},
				complete: function(data) {
					$('.alert-expander').fadeIn(400);
					$('.alert-fade').fadeIn();
				}
			});
        }
		
		else
		{
			if (lang == "es-ES")
			{
				$('.alert-header h3').text('Atencion!');
				$('.alert-message p').text('Verifique los campos antes de enviar el e-mail');
			}
			else
			{
				$('.alert-header h3').text('Warning!');
				$('.alert-message p').text('Check all fields before send the e-mail!');
			}
			$('.alert-expander').fadeIn(400);
			$('.alert-fade').fadeIn();
		}
		
		event.preventDefault();
    });	
    
    $('.alert-close').click(function(){
        $('.alert-expander').fadeOut(300);
        $('.alert-fade').fadeOut();
    });
}
