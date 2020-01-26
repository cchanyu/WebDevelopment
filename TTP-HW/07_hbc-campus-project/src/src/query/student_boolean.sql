SELECT 
	EXISTS ( SELECT *
		FROM 
			student s INNER JOIN campus_student cs ON s.student_id = cs.student_id 
		WHERE
		s.student_id = 1);