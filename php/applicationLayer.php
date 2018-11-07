<?php

	header('Content-type: application/json');
	header('Accept: application/json');

	require_once __DIR__ . '/dataLayer.php';

	$requestMethod = $_SERVER['REQUEST_METHOD'];

	switch($requestMethod)
	{
		case "GET":
			$action = $_GET["action"];
			getRequests($action);
			break;

		case "POST":
			$action = $_POST["action"];
			postRequests($action);
			break;
	}

	function getRequests($action)
	{
		switch($action)
		{
			case "DIRECTORY":
				showDirectory();
				break;
		}
	}

	function postRequests($action)
	{
		switch($action)
		{
			case "REGISTER":
				register();
				break;
		}
	}

	function showDirectory()
	{
		$response = attemptToShowDirectory();

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}

	function register()
	{
		$firstName = $_POST['firstName'];
		$lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $gender = $_POST['gender'];
        $linkedin = $_POST['linkedin'];
        $schoolName = $_POST['schoolName'];
        $major = $_POST['major'];
        $jobTitle = $_POST['jobTitle'];
        $company = $_POST['company'];
        $group = $_POST['group'];
        $skill = $_POST['skill'];

		$response = attemptRegistration($firstName, $lastName, $email, $phone, $gender, $linkedin, $schoolName, $major, $jobTitle, $company, $group, $skill);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}

	function errorHandler($status, $code)
	{
		switch ($code) 
		{
			case 200:
					header("HTTP/1.1 $code Success");
					break;
			case 406:	
					header("HTTP/1.1 $code User $status");
					die("Wrong credentials provided");
					break;
			case 409:
					header('HTTP/1.1 $code Conflict, Username already in use please select another one');
					die("Username already in use");
					break;
			case 500:
					header("HTTP/1.1 $code $status. Bad connection, portal is down");
					die("The server is down, we couldn't retrieve data from the data base");
					break;
		}
	}
?>