CREATE TABLE Person (
	fName VARCHAR(30) NOT NULL,
	lName VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL PRIMARY KEY,
	phone VARCHAR(15) NOT NULL,
	gender VARCHAR(1) NOT NULL,
	linkedin VARCHAR(512),
	schoolName VARCHAR(100) NOT NULL,
	major VARCHAR(50) NOT NULL,
	picture VARCHAR(255) NOT NULL,
	jobTitle VARCHAR(50) NOT NULL,
	company VARCHAR(100) NOT NULL,
	groupName VARCHAR(30), -- For students
	classTaught VARCHAR(30), -- For mentors
	skills VARCHAR(30) NOT NULL -- This is supposed to hold several skills. For now only 1.
);

INSERT INTO Person(fName, lName, email, phone, gender, linkedin, schoolName, major, picture, jobTitle, company, groupName, skills)
VALUES  ('Lorraine', 'Bichara', 'lorbichara@gmail.com', '+5218115118485', 'F', 'https://www.linkedin.com/in/lorbichara', 'Tec de Monterrey', 'Computer Science', 'img/lBichara.jpg', 'Software Engineering Intern', 'Microsoft', 'Beta', 'Programming');