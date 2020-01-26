DROP TABLE IF EXISTS campus_student;
CREATE TABLE campus_student ( 
	student_id integer,
	campus_id integer,
	PRIMARY KEY (student_id, campus_id),
	FOREIGN KEY (student_id) REFERENCES student (student_id),
	FOREIGN KEY (campus_id) REFERENCES campus (campus_id)
);