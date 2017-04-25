-- CREATE TABLE

CREATE TABLE tablename
(
  "column1" "data type",
  "column2" "data type"
);

-- CREATE TABLE with constraints
CREATE TABLE tablename
(
  "column1" "data type"
  [constraint]
);

-- CREATE TABLE example

CREATE TABLE person
(firstname varchar(15),
 lastname varchar(20),
 age number(3),
 birthdate date
);
