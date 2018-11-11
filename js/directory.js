let jsonToSendDirectory =
{
	"action" : "DIRECTORY"
};

$.ajax({
	url : "./php/applicationLayer.php",
	type : "GET",
	data : jsonToSendDirectory,
	ContentType : "application/json",
	dataType : "json",
	success : function(data)
	{
		let newHtml = '';
		for(let i = 0; i < data.length; i++)
		{
			newHtml +=`
						<li>
							<img src="${data[i].picture}"/>
							<div class="details">
								<span class="name">${data[i].firstName} ${data[i].lastName}</span>
								<span class="title">${data[i].jobTitle} @ ${data[i].company}</span>
								<span class="title">${data[i].major} @ ${data[i].schoolName}</span>
								<span class="title">${data[i].groupName}</span>
								<span class="title">${data[i].skills}</span>
								<a class="phone" href="tel:${data[i].phone}">${data[i].phone}</a>
								<a class="email" href="mailto:${data[i].email}">${data[i].email}</a>
							</div>
						</li>`;
		}
		$('.cards').append(newHtml);
	},
	error : function(err)
	{
		console.log(err);
	}
});