$('#editButton').on('click', function(event) {
	event.preventDefault();
	let jsonToSendEdit ={
                          "email" : $("#email").val(),
                          "action" : "EDIT"}; //Test user.

	$.ajax({
	  url: './php/applicationLayer.php',
	  type: 'GET',
	  data: jsonToSendEdit,
	  ContentType: 'application/json',
	  dataType: 'json',
	  success: function(data) {
	    let newHtml = '';
	    newHtml += `
	    			<br>
	    			<input type="text" id="firstNameEdit" placeholder="Nombre" class="inputTexts" value="${data.firstName}"/>
					<br><br>
					<input type="text" id="lastNameEdit" placeholder="Apellido" class="inputTexts" value="${data.lastName}"/>
					<br><br>
					<input type="tel" id="phoneNumberEdit" placeholder="Número de teléfono" class="inputTexts" value="${data.phone}"/>
					<br><br>
					<input type="url" id="linkedinEdit" placeholder="LinkedIn" class="inputTexts" value="${data.linkedin}"/>
					<br><br>
					<input type="text" id="schoolNameEdit" placeholder="Nombre de escuela" class="inputTexts" value="${data.schoolName}"/>
					<br><br>
					<input type="text" id="majorEdit" placeholder="Carrera" class="inputTexts" value="${data.major}"/>
					<br><br>
					<input type="text" id="jobTitleEdit" placeholder="Puesto actual" class="inputTexts" value="${data.jobTitle}"/>
					<br><br>
					<input type="text" id="companyEdit" placeholder="Compañía actual" class="inputTexts" value="${data.company}"/>
					<br><br>
					<input type="text" id="skillEdit" placeholder="Habilidad" class="inputTexts"/ value="${data.skills}"/">
					<br><br>
					`;

	    $('#editSection').html(newHtml);
	  },
	  error: function(err) {
	    console.log(err);
	  }
	});
});


$('#updateButton').on('click', function(event) {
	event.preventDefault();

	let jsonToSendUpdate =
	{
		"firstName" : $("#firstNameEdit").val(),
		"lastName" : $("#lastNameEdit").val(),
		"email" : $("#email").val(),
		"phone" : $("#phoneNumberEdit").val(),
		"linkedin" : $("#linkedinEdit").val(),
		"schoolName" : $("#schoolNameEdit").val(),
		"major" : $("#majorEdit").val(),
		"jobTitle" : $("#jobTitleEdit").val(),
		"company" : $("#companyEdit").val(),
		"skill" : $("#skillEdit").val(),
		"action" : "UPDATEINFO"
	};

	console.log(jsonToSendUpdate);

	$.ajax({
		url : "./php/applicationLayer.php",
		type : "PUT",
		data : jsonToSendUpdate,
		ContentType : "application/json",
		dataType : "json",
		success : function(data)
		{
			console.log("Update successfull!");
			$(location).attr("href", "./index.html");

		},
		error : function(err)
		{
			console.log("Update not completed.");
			console.log(err);
		}
	});
});