CREATE DATABASE tasks_db;

USE tasks_db;

CREATE TABLE task (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(50),
    task_description VARCHAR(150),
    completed BOOLEAN DEFAULT false
);