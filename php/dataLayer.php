<?php
	function connect()
	{
		$servername = "localhost";
		$username = "root";
		$password= "root";
		$dbname = "CollectiveAcademy"; 

		$connection = new mysqli($servername, $username, $password, $dbname);

		if ($connection->connect_error)
		{
			return null;
		}
		else
		{
			return $connection;
		}
	}

	#Function to display contacts in directory page without a filter.
	function attemptToShowDirectory()
	{
		$conn = connect();

		if($conn != null)
		{
			$sql = "SELECT email
					FROM Person";

			$result = $conn->query($sql);
			$response = array();
			if ($result->num_rows > 0)
			{
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array("email" => $row["email"]));
				}

				$conn->close();
				return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$conn->close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);
		}
	}

	function attemptRegistration($firstName, $lastName, $email, $phone, $gender, $linkedin, $schoolName, $major, $jobTitle, $company, $group, $skill)
	{
		$conn = connect();

		if($conn != null)
		{
			$sql = "SELECT email 
                FROM Person 
                WHERE email = '$email'"; 

            $result = $conn->query($sql);

            if($result->num_rows > 0)
            {
            	$conn->close();
            	return array("status" => "EXISTING_ENTRY", "code"=>409);
            }
            else
            {
            	$sql = "INSERT INTO Person(fName, lName, email, phone, gender, linkedin, schoolName, major, picture, jobTitle, company, groupName, skills)
						VALUES ('$firstName', '$lastName', '$email', '$phone', '$gender', '$linkedin', '$schoolName', '$major', 'img/lBichara.jpg', '$jobTitle', '$company', '$group', '$skill');";

				if(mysqli_query($conn, $sql))
					return array("status" => "SUCCESS", "code"=>200);
				else
					return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);
            }
		}
	}
?>