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

-- SELECT GROUP BY

SELECT name
FROM user
WHERE name
LIKE %ogier
GROUP BY name DESC

-- SELECT IN subqueries

SELECT title
FROM songs
WHERE artist
IN (
  SELECT name
  FROM artists
  WHERE genre = "Pop"
)

-- SELECT SUM / COUNT / MIN / MAX / AVG

SELECT SUM(calories)
FROM exercise_logs;

-- SELECT AS

SELECT type, SUM(calories)
AS total_calories
FROM exercise_logs
GROUP BY type;

-- SELECT HAVING

SELECT type, SUM(calories)
AS total_calories
FROM exercise_logs
GROUP BY type
HAVING total_calories > 150;

-- SELECT ROUND

SELECT COUNT(*) FROM exercise_logs
  WHERE heart_rate >= ROUND(0.50 * (220 - 30))
  AND heart_rate <= ROUND(0.90 * (220-30))

-- SELECT CASE

SELECT COUNT(*)
  CASE
    WHEN heart_rate > 220-30 THEN "above max"
    WHEN heart_rate  > ROUND(0.90 * (220 - 30)) THEN "above target"
    WHEN heart_rate > ROUND(0.50 * (220 - 30)) THEN "within target"
    ELSE "below target"
  END as "hr_zone"
FROM exercise_logs
GROUP BY hr_zone;
