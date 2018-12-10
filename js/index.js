$('#registerNewButton').on('click', function(event)
{
	$(location).attr("href", "./register.html");
});

$('#openDirectoryButton').on('click', function(event)
{
	let $errorPassword = $('#errorPassword');
	if($('#password').val() == "directorio")
		$(location).attr("href", "./directory.html");
	else {
		$errorPassword.removeClass('hiddenElement');
	}
});

$('#openAdminButton').on('click', function(event)
{
	let $errorPasswordAdmin = $('#errorPasswordAdmin');
	if($('#passwordAdmin').val() == "admin")
		$(location).attr("href", "./admin.html");
	else {
		$errorPasswordAdmin.removeClass('hiddenElement');
	}
});