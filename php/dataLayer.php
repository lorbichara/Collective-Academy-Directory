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
			$sql = "SELECT fName, lName, email, phone, gender, linkedin, schoolName, major, picture, jobTitle, company, groupName, skills
					FROM Person";

			$result = $conn->query($sql);
			$response = array();
			if ($result->num_rows > 0)
			{
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array(
												"firstName" => $row["fName"],
												"lastName" => $row["lName"],
												"email" => $row["email"],
												"phone" => $row["phone"],
												"gender" => $row["gender"],
												"linkedin" => $row["linkedin"],
												"schoolName" => $row["schoolName"],
												"major" => $row["major"],
												"jobTitle" => $row["jobTitle"],
												"company" => $row["company"],
												"groupName" => $row["groupName"],
												"skills" => $row["skills"],
												"picture" => $row["picture"]
											));
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

	function attemptToSearch($searchParam)
	{
		$conn = connect();

		if($conn != null)
		{
			$sql = "SELECT fName, lName, email, phone, gender, linkedin, schoolName, major, picture, jobTitle, company, groupName, skills
					FROM Person
					WHERE fName = '$searchParam' OR lName = '$searchParam' OR email = '$searchParam' OR phone = '$searchParam' OR schoolName = '$searchParam' OR major = '$searchParam' OR jobTitle = '$searchParam' OR company = '$searchParam' OR skills = '$searchParam'";

			$result = $conn->query($sql);
			$response = array();
			if ($result->num_rows > 0)
			{
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array(
												"firstName" => $row["fName"],
												"lastName" => $row["lName"],
												"email" => $row["email"],
												"phone" => $row["phone"],
												"gender" => $row["gender"],
												"linkedin" => $row["linkedin"],
												"schoolName" => $row["schoolName"],
												"major" => $row["major"],
												"jobTitle" => $row["jobTitle"],
												"company" => $row["company"],
												"groupName" => $row["groupName"],
												"skills" => $row["skills"],
												"picture" => $row["picture"]
											));
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

	function attemptToFilter($gender, $group)
	{
		$conn = connect();

		if($conn != null)
		{
			$sql = "SELECT fName, lName, email, phone, gender, linkedin, schoolName, major, picture, jobTitle, company, groupName, skills
					FROM Person
					WHERE gender = '$gender' OR groupName = '$group[0]' OR groupName = '$group[1]' OR groupName = '$group[2]' OR groupName = '$group[3]'
					OR groupName = '$group[4]' OR groupName = '$group[4]' OR groupName = '$group[5]' OR groupName = '$group[6]' OR groupName = '$group[7]'
					OR groupName = '$group[8]' OR groupName = '$group[9]' OR groupName = '$group[10]'";

			$result = $conn->query($sql);
			$response = array();
			if ($result->num_rows > 0)
			{
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array(
												"firstName" => $row["fName"],
												"lastName" => $row["lName"],
												"email" => $row["email"],
												"phone" => $row["phone"],
												"gender" => $row["gender"],
												"linkedin" => $row["linkedin"],
												"schoolName" => $row["schoolName"],
												"major" => $row["major"],
												"jobTitle" => $row["jobTitle"],
												"company" => $row["company"],
												"groupName" => $row["groupName"],
												"skills" => $row["skills"],
												"picture" => $row["picture"]
											));
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

	function attemptProfileInfo($email)
	{
		$conn = connect();

		if($conn != null)
		{
			$sql = "SELECT fName, lName, email, phone, gender, linkedin, schoolName, major, picture, jobTitle, company, groupName, skills
					FROM Person
					WHERE email = '$email'";

			$result = $conn->query($sql);
			if ($result->num_rows > 0)
			{
				while ($row = $result->fetch_assoc())
				{
					$response = array(
												"firstName" => $row["fName"],
												"lastName" => $row["lName"],
												"email" => $row["email"],
												"phone" => $row["phone"],
												"gender" => $row["gender"],
												"linkedin" => $row["linkedin"],
												"schoolName" => $row["schoolName"],
												"major" => $row["major"],
												"jobTitle" => $row["jobTitle"],
												"company" => $row["company"],
												"groupName" => $row["groupName"],
												"skills" => $row["skills"],
												"picture" => $row["picture"]
											);
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

	function attemptRegistration($firstName, $lastName, $email, $phone, $gender, $linkedin, $schoolName, $major, $jobTitle, $company, $group, $skill, $picture)
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
						VALUES ('$firstName', '$lastName', '$email', '$phone', '$gender', '$linkedin', '$schoolName', '$major', '$picture', '$jobTitle', '$company', '$group', '$skill');";

				if(mysqli_query($conn, $sql))
					return array("status" => "SUCCESS", "code"=>200);
				else
					return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);
            }
		}
	}

	function attemptUpdate($firstName, $lastName, $email, $phone, $linkedin, $schoolName, $major, $jobTitle, $company, $skill)
	{
		$conn = connect();

		if($conn != null)
		{
			$sql = "UPDATE Person
					SET fName = '$firstName', lName = '$lastName', phone = '$phone', linkedin = '$linkedin', schoolName = '$schoolName', major = '$major', jobTitle = '$jobTitle', company = '$company', skills = '$skill'
					WHERE email = '$email'";

			if(mysqli_query($conn, $sql))
				return array("status" => "SUCCESS", "code"=>200);
			else
				return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);
		}
	}
?>