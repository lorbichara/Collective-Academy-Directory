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

$('#searchButton').on('click', function(event)
{
	searchContact();
});

function searchContact()
{
	let jsonToSendSearch = {"searchParam" : $('#searchBar').val(), "action" : "SEARCH"};


	$.ajax({
		url : "./php/applicationLayer.php",
		type : "GET",
		data : jsonToSendSearch,
		ContentType : "application/json",
		dataType : "json",
		success : function(data)
		{
			$('.cards').empty();
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
			console.log("Error");
		}
	});
}

$('#clearFilterButton').on('click', function(event)
{
	$('input[type=radio]').prop('checked',false);
	$('input[type=checkbox]').prop('checked',false);
});

$('#applyFilterButton').on('click', function(event)
{
	filter();
});

function filter()
{
	var groupVal = [];
	$(':checkbox:checked').each(function(i) {
		groupVal[i] = $(this).val();
	});

	// for(let i = 0; i < groupVal.length; i++)
	// {
	// 	console.log(groupVal[i]);
	// }

	let jsonToSendFilter = 	{
								"gender" : $("input[type=radio][name=gender]:checked").val(),
								"group" : groupVal,
								"action" : "FILTER"
							};

	$.ajax({
		url : "./php/applicationLayer.php",
		type : "GET",
		data : jsonToSendFilter,
		ContentType : "application/json",
		dataType : "json",
		success : function(data)
		{
			$('.cards').empty();
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
}