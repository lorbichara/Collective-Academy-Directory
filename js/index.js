$('#registerNewButton').on('click', function(event)
{
	$(location).attr("href", "./register.html");
});

$('#openDirectoryButton').on('click', function(event)
{
	if($('#password').val() == "lorraine")
		$(location).attr("href", "./directory.html");
	else
		alert("Contraseña incorrecta");
});