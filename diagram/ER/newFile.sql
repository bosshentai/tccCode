
CREATE TYPE roles  AS ENUM('MANAGER','CLIENT','EMPLOYEE','PERSONALTRAINER');
CREATE TYPE status AS ENUM('ACTIVE','INACTIVE','BLOCKED');


CREATE TABLE users (
    id text NOT NULL PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    birth_data date NOT NULL,
    role roles,
    password text NOT NULL,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);




CREATE TABLE clients(
    id text NOT NULL PRIMARY KEY,
    user_id text NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE training_plans (
    id text NOT NULL PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
    value float NOT NULL,
 created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE discounts (
    id text NOT NULL PRIMARY KEY,
    name text NOT NULL ,
    value float NOT NULL,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE personal_trainers (
    id text NOT NULL PRIMARY KEY,
    user_id text NOT NULL,
    value float NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE employee(
    id text NOT NULL PRIMARY KEY,
    user_id text NOT NULL,
    emp_status status
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE manager(
    id text NOT NULL PRIMARY KEY,
    user_id text NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE client_PersonalTrainer(
    client_id text NOT NULL ,
    personalTrainer_id text NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (personalTrainer_id) REFERENCES personalTrainers(id)
);


CREATE TABLE client_training_plan (
    client_id text NOT NULL,
    training_plan_id text NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (training_plan_id) REFERENCES training_plans(id)
);


CREATE TABLE client_discount (
    client_id text NOT NULL,
    discount_id text NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (discount_id) REFERENCES discounts(id)
);