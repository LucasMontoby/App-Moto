CREATE DATABASE tienda_motos;

USE tienda_motos;

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT
);

CREATE TABLE motos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  imagen VARCHAR(255),
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, descripcion) VALUES ('Deportiva', 'Motos deportivas de alto rendimiento');
INSERT INTO categorias (nombre, descripcion) VALUES ('Cruiser', 'Motos cruiser para paseos largos');
INSERT INTO categorias (nombre, descripcion) VALUES ('Touring', 'Motos diseñadas para viajes largos y confort');

INSERT INTO motos (nombre, descripcion, precio, imagen, categoria_id) 
VALUES 
('Yamaha YZF-R3', 'Deportiva de 300cc', 5000.00, 'honda.jpg', 1),
('Honda CBR500R', 'Deportiva de 500cc', 6000.00, 'honda.jpg', 1),
('Kawasaki Ninja ZX-6R', 'Deportiva de 600cc', 8000.00, 'honda110.jpg', 1),
('Suzuki GSX-R600', 'Deportiva de 600cc', 7500.00, 'honda110.jpg', 1),
('Harley Davidson Iron 883', 'Cruiser de 883cc', 7500.00, 'honda.jpg', 2),
('Ducati Monster 821', 'Naked de 821cc', 9500.00, 'honda.jpg', 2),
('BMW R1250GS', 'Aventurera de 1250cc', 15000.00, 'honda110.jpg', 3),
('Triumph Tiger 900', 'Aventurera de 900cc', 12000.00, 'honda110.jpg', 3);

