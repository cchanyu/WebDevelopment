DROP TABLE IF EXISTS campus;
CREATE TABLE campus ( 
	campus_id integer primary key,
	campus_name varchar,
	imageurl bytea,
	address varchar,
	description text
);