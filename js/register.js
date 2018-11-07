//Action triggered when the submit button is clicked on registration.
$('#registerButton').on('click', function(event) {
	event.preventDefault();
	validateRegister();
});

$('#goBackButton').on('click', function(event) {
	event.preventDefault();
	$(location).attr("href", "./index.html");
});

//Function that validates that all information in registration is correct and not empty.
function validateRegister()
{
	let correctInfo = false;
	let $firstName = $('#firstName');
	let $errorFirstName = $('#errorFirstName');
	let $lastName = $('#lastName');
	let $errorLastName = $('#errorLastName');
	let $email = $('#email');
	let $errorEmail = $('#errorEmail');
	let $phoneNumber = $('#phoneNumber');
	let $errorPhone = $('#errorPhone');
	let $errorGender = $('#errorGender');
	let $linkedin = $('#linkedin');
	let $errorLinkedin = $('#errorLinkedin');
	let $schoolName = $('#schoolName');
	let $errorSchool = $('#errorSchool');
	let $major = $('#major');
	let $errorMajor = $('#errorMajor');
	let $jobTitle = $('#jobTitle');
	let $errorJobTitle = $('#errorJobTitle');
	let $company = $('#company');
	let $errorCompany = $('#errorCompany');
	let $group = $('#groupSelector');
	let $errorGroup = $('#errorGroup');
	let $skill = $('#skill');
	let $errorSkill = $('#errorSkill');

	if($firstName.val() == "")
	{
		$errorFirstName.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorFirstName.addClass('hiddenElement');
		correctInfo = true;
	}

	if($lastName.val() == "")
	{
		$errorLastName.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorLastName.addClass('hiddenElement');
		correctInfo = true;
	}

	if($email.val() == "")
	{
		$errorEmail.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorEmail.addClass('hiddenElement');
		correctInfo = true;
	}

	if($phoneNumber.val() == "")
	{
		$errorPhone.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorPhone.addClass('hiddenElement');
		correctInfo = true;
	}

	if($('input[name=gender]').is(':checked')) {
		$errorGender.addClass('hiddenElement');
		correctInfo = true;
	}
	else {
		$errorGender.removeClass('hiddenElement');
		correctInfo = false;
	}

	if($linkedin.val() == "")
	{
		$errorLinkedin.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorLinkedin.addClass('hiddenElement');
		correctInfo = true;
	}

	if($schoolName.val() == "")
	{
		$errorSchool.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorSchool.addClass('hiddenElement');
		correctInfo = true;
	}

	if($major.val() == "")
	{
		$errorMajor.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorMajor.addClass('hiddenElement');
		correctInfo = true;
	}

	if($jobTitle.val() == "")
	{
		$errorJobTitle.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorJobTitle.addClass('hiddenElement');
		correctInfo = true;
	}

	if($company.val() == "")
	{
		$errorCompany.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorCompany.addClass('hiddenElement');
		correctInfo = true;
	}

	if($group.val() == 0) {
		$errorGroup.removeClass('hiddenElement');
		correctInfo = false;
	}
	else {
		$errorGroup.addClass('hiddenElement');
		correctInfo = true;
	}

	if($skill.val() == "")
	{
		$errorSkill.removeClass('hiddenElement');
		correctInfo = false;
	}
	else
	{
		$errorSkill.addClass('hiddenElement');
		correctInfo = true;
	}

	if(correctInfo === true)
	{
		addRegistrationToDB();
	}
}

//Function to make text field appear when "Mentor" is selected in the drop down menu.
// https://www.sitepoint.com/community/t/form-drop-down-menus-select-other-and-make-a-textbox-appear/2789/2
function showfield(name)
{
	if(name=='Mentor')
		document.getElementById('div1').innerHTML='Class you teach: <input type="text" name="mentor" />';
	else
		document.getElementById('div1').innerHTML='';
}

//Function that adds entry to Database with information on a new person.
function addRegistrationToDB()
{
	let jsonToSendRegister =
	{
		"firstName" : $("#firstName").val(),
		"lastName" : $("#lastName").val(),
		"email" : $("#email").val(),
		"phone" : $("#phoneNumber").val(),
		"gender" : $("input[type=radio][name=gender]:checked").val(),
		"linkedin" : $("#linkedin").val(),
		"schoolName" : $("#schoolName").val(),
		"major" : $("#major").val(),
		"jobTitle" : $("#jobTitle").val(),
		"company" : $("#company").val(),
		"group" : $("#groupSelector").val(),
		"skill" : $("#skill").val(),
		"action" : "REGISTER"
	};

	$.ajax({
		url : "./php/applicationLayer.php",
		type : "POST",
		data : jsonToSendRegister,
		ContentType : "application/json",
		dataType : "json",
		success : function(data)
		{
			console.log("Registry successfully added to DB!");
			$(location).attr("href", "./index.html");

		},
		error : function(err)
		{
			console.log("Registry not added to DB.");
			console.log(err);
		}
	});
}