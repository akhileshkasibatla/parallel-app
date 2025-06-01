CREATE TABLE IF NOT EXISTS "investors" (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    street_address VARCHAR(255) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zipcode VARCHAR(5) NOT NULL,
    file_url VARCHAR NOT NULL
);