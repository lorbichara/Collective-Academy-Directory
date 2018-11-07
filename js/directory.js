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
		console.log(data[0].email);
	},
	error : function(err)
	{
		console.log("enves - error.mp4");
	}
});