SELECT student.student_name, campus.campus_id
	FROM campus ca,  student s
	WHERE s.student_id = ca.student_id