CREATE TABLE employees (
   id SERIAL PRIMARY KEY,        -- Optional primary key column
   firstName VARCHAR(100) NOT NULL,  -- Column for first name, with a maximum length of 100 characters
   lastName VARCHAR(100) NOT NULL,   -- Column for last name, with a maximum length of 100 characters
   position VARCHAR(100) NOT NULL,   -- Column for position, with a maximum length of 100 characters
   department VARCHAR(100) NOT NULL  -- Column for department, with a maximum length of 100 characters
);