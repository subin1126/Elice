CREATE TABLE kickboard(
    member_id       VARCHAR(16) NOT NULL,
    member_name     VARCHAR(16) NOT NULL,
    member_birthday DATE        CHECK (member_birthday < '2000-01-01'),
    id              VARCHAR(16) NOT NULL UNIQUE,
    brand           VARCHAR(16) NOT NULL,   
    rental_location VARCHAR(32) NOT NULL,
    rental_time     TIME        CHECK (rental_time < '01:00:00'), 
    price           INT         DEFAULT 0
);



