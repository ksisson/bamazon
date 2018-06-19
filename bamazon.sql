CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(20) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    stock_quantity INT NOT NULL


);
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Amazon Echo", "Electronics", 179.00, 10),
("Fire HD Tablet", "Electronics", 79.99, 10),
("Roomba Vacuum", "Home", 374.65, 5),
("Kindle Paperwhite", "Electronics", 189.99, 20),
("Fire TV Stick", "Electronics", 39.99, 20),
("Coleman Hooligan Tent", "Outdoors", 45.50, 3),
("Activplay Round Trampoline", "Sports", 250.00, 5),
("Anker Wireless Charging Pad", "Electronics", 16.59, 10),
("Anjou MCT Oil", "Food", 19.49, 10),
("Black and Decker Cordless Drill", "Tools", 34.49, 10)


SELECT * FROM products

UPDATE products SET stock_quantity = 20