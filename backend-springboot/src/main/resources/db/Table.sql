CREATE TABLE Users (
	username VARCHAR(50) PRIMARY KEY,
	password VARCHAR(200) NOT NULL,
	last_name VARCHAR(15) NOT NULL,
	middle_name VARCHAR(20),
	first_name VARCHAR(15) NOT NULL,
	email VARCHAR(100),
	date_of_birth DATE NOT NULL,
	phone_number VARCHAR(12),
	role VARCHAR(10),
	student_id VARCHAR(10),
	school_year VARCHAR(1),
	faculty VARCHAR(100),
	page_remain INT,
	CONSTRAINT check_page_remain CHECK (page_remain >= 0)
);

CREATE TABLE Printer (
	printer_id SERIAL PRIMARY KEY,
	brand_name VARCHAR(50),
	printer_model VARCHAR(50),
	description VARCHAR(200),
	campus VARCHAR(2) NOT NULL,
	building VARCHAR(2) NOT NULL,
	room VARCHAR(3) NOT NULL,
	state BOOL DEFAULT TRUE
);

CREATE TABLE Printing (
	username VARCHAR(50),
	printer_id INT,
	PRIMARY KEY (username, printer_id),
	FOREIGN KEY (username) REFERENCES Users(username),
	FOREIGN KEY (printer_id) REFERENCES Printer(printer_id)
);

CREATE TABLE Printed_turn (
	username VARCHAR(50),
	printer_id INT,
	printing_date DATE,
	time_start TIME,
	time_end TIME,
	file_name VARCHAR(100),
	file_type VARCHAR(10),
	number_pages_of_file INT,
	page_size VARCHAR(2),
	number_side INT,
	number_copy INT, 
	number_pages_purchase INT DEFAULT 0,
	PRIMARY KEY (username, printer_id, printing_date, time_start, time_end, file_name, file_type, number_pages_of_file, page_size, number_side, number_copy, number_pages_purchase),
	FOREIGN KEY (username, printer_id) REFERENCES Printing(username, printer_id),
	CONSTRAINT check_number_side CHECK (number_side > 0),
	CONSTRAINT check_number_copy CHECK (number_copy > 0)
);


CREATE TABLE Utility (
	semester VARCHAR(3) PRIMARY KEY,
	default_pages INT,
	date_reset_default_page DATE,
	page_price INT
);

CREATE TABLE File_types_accepted (
	semester VARCHAR(3),
	type_accepted VARCHAR(10),
	PRIMARY KEY (semester, type_accepted),
	FOREIGN KEY (semester) REFERENCES Utility(semester)
);