CREATE FUNCTION create_campus (
	campus_id integer primary key,
	name varchar,
	imageurl bytea,
	address varchar,
	description text)
 RETURNS type AS
BEGIN
  SELECT * FROM campus;
END;
LANGUAGE 'plpgsql';