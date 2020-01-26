--CREATE TYPE type_sc AS (student_id integer, student_name varchar, campus_name varchar);
--DROP FUNCTION select_student();
--DROP FUNCTION IF EXISTS select_student(integer);
CREATE OR REPLACE FUNCTION select_student(stud INT) RETURNS type_sc AS
$$
DECLARE
 result_record type_sc;
BEGIN

IF (SELECT 
	EXISTS ( SELECT *
		FROM 
			student s INNER JOIN campus_student cs ON s.student_id = cs.student_id 
		WHERE
		s.student_id = stud))
THEN 
	SELECT s.student_id, s.student_name, ca.campus_name
	INTO result_record.student_id, result_record.student_name, result_record.campus_name
		FROM 
			student s 
				INNER JOIN 
			campus_student cs 
			    ON s.student_id = cs.student_id
				INNER JOIN
			campus ca
				ON cs.campus_id = ca.campus_id
		WHERE
		s.student_id = stud;

ELSE 
	SELECT s.student_id, s.student_name
	INTO result_record.student_id, result_record.student_name
		FROM 
			student s 

		WHERE
		s.student_id = stud;

END IF;
RETURN result_record;
END
$$
LANGUAGE plpgsql;