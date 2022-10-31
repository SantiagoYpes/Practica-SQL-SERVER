create table Compra(
	id_compra varchar(50),
	id_usuario varchar(50) not null,
	cantidad varchar(50) not null,
	fecha date not null,
	primary key(id_compra)
);


create table Silla(
	id_silla varchar(50),
	clase varchar(50) not null,
	estado varchar(50),
	primary key(id_silla),
)

create table Tiquete(
	id_tiquete varchar(50),
	id_compra varchar(50),
	id_silla varchar(50),
	primary key(id_silla),
	foreign key(id_silla) references Silla(id_silla) on update cascade,
	foreign key(id_compra) references Compra(id_compra) on update cascade
	
)


insert into Silla(id_silla, clase)
values
('1A','ejecutiva'),
('1B','ejecutiva'),
('1E','ejecutiva'),
('1F','ejecutiva'),
('2A','ejecutiva'),
('2B','ejecutiva'),
('2E','ejecutiva'),
('2F','ejecutiva'),

('3A','ejecutiva'),
('3B','ejecutiva'),
('3E','ejecutiva'),
('3F','ejecutiva'),
('4A','ejecutiva'),
('4B','ejecutiva'),
('4E','ejecutiva'),
('4F','ejecutiva')

insert into Silla(id_silla, clase)
values
('5A','economica'),
('5B','economica'),
('5C','economica'),
('5D','economica'),
('5E','economica'),
('5F','economica'),
('6A','economica'),
('6B','economica'),
('6C','economica'),
('6D','economica'),
('6E','economica'),
('6F','economica'),

('7A','economica'),
('7B','economica'),
('7C','economica'),
('7D','economica'),
('7E','economica'),
('7F','economica'),
('8A','economica'),
('8B','economica'),
('8C','economica'),
('8D','economica'),
('8E','economica'),
('8F','economica'),

('9A','economica'),
('9B','economica'),
('9C','economica'),
('9D','economica'),
('9E','economica'),
('9F','economica'),
('10A','economica'),
('10B','economica'),
('10C','economica'),
('10D','economica'),
('10E','economica'),
('10F','economica'),

('11A','economica'),
('11B','economica'),
('11C','economica'),
('11D','economica'),
('11E','economica'),
('11F','economica')

CREATE PROCEDURE Consultar_id   
    @id nvarchar(50)   
AS   
    SELECT *  
    FROM Silla
    WHERE id_silla = @id    
GO 



CREATE PROCEDURE Añadir_compra   
    @id_compra varchar(50), 
	@id_usuario varchar(50), 
	@nombre varchar(50), 
	@cantidad int
AS   
	SET TRANSACTION ISOLATION LEVEL SERIALIZABLE
    INSERT INTO Compra(id_compra,id_usuario,nombre,cantidad,fecha)
		values (@id_compra, @id_usuario, @nombre, @cantidad, CURRENT_TIMESTAMP)
	select * from Compra
GO 

EXECUTE Consultar_id N'1A'; 

EXECUTE Añadir_compra N'FA0001', N'1193119431',N'Santiago',N'3'; 

DELETE FROM Compra WHERE id_compra='FA76414';

select * from Compra 

CREATE PROCEDURE Añadir_tiquete   
	@id_tiquete varchar(50),
    @id_compra varchar(50), 
	@id_silla varchar(50)
AS   
    SET TRANSACTION ISOLATION LEVEL SERIALIZABLE
    INSERT INTO Tiquete(id_tiquete,id_compra,id_silla)
		values (@id_tiquete, @id_compra, @id_silla)
	UPDATE Silla SET estado= 'Comprada' where id_silla = @id_silla
GO 

EXECUTE Añadir_compra N'FA0001', N'1193119431',N'Santiago',N'3'; 

DELETE FROM Compra WHERE id_compra LIKE 'FA%';

select * from Compra 

DELETE from Tiquete WHERE id_tiquete LIKE 'TI%'
SELECT * FROM Tiquete

select * from Silla where id_silla = '2A'

