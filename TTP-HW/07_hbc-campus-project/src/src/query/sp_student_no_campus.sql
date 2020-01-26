--CREATE TYPE type_sc AS (student_id integer, student_name varchar, campus_name varchar);
--DROP FUNCTION select_student();
--DROP FUNCTION IF EXISTS select_student(integer);
CREATE OR REPLACE FUNCTION select_student_no_campus(stud INT) RETURNS TABLE (
      student_id INT,
      student_name VARCHAR
)  AS
$$
BEGIN
RETURN QUERY SELECT *
		FROM 
			student s 
		WHERE
		s.student_id = stud;
END
$$
LANGUAGE plpgsql;