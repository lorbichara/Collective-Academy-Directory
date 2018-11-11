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
							<img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=1cd7edb2ed25c1de4908db807e545988&amp;w=150&amp;h=150" />
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
		console.log(data[0].skills);
	},
	error : function(err)
	{
		console.log("enves - error.mp4");
	}
});