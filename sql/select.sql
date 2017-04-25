-- SELECT

SELECT column_name
FROM table_name
WHERE some_condition;

-- SELECT ALL

SELECT *
FROM table_name
WHERE some_condition;

-- SELECT LIKE (case-sensitive)

SELECT name, age, birth_date
FROM user
WHERE name
LIKE %ogier;

-- SELECT NOT LIKE

SELECT name
FROM user
WHERE name
NOT LIKE '%ogier';

-- SELECT LIKE (case-insensitive)

SELECT name
FROM user
WHERE name
ILIKE '%oGiEr';
