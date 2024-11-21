const { Moto, Categoria } = require('../models');

const motoController = {
    list: async (req, res) => {
        try{
            const motos = await Moto.findAll({include: Categoria});
            res.render('motos/list', { motos });
        } catch{
            res.status(500).send({ message: 'Error al buscar motos' });
        }
    },

    create: async (req, res) => {
        try{
            const categorias = await Categoria.findAll();
            res.render('motos/create', { categorias });
        } catch{
            res.status(500).send({ message: 'Error al cargar el formulario de creación' });
        }
        },

    store: async (req, res) => {
        const {nombre, descripcion, precio, categoria_id } = req.body;
        const imagen = req.file ? req.file.filename : null;
        try{
           await Moto.create({ nombre, descripcion, precio, imagen, categoria_id });
           res.redirect('/motos');
            
        } catch{
            res.status(500).send({ message: 'Error al guardar una moto' });
        }  
        },

    edit: async (req, res) => {
        const { id } = req.params;
        try{
            const moto = await Moto.findByPk(id);
            const categorias = await Categoria.findAll();
            res.render('motos/edit', { moto, categorias });
            } catch{
                res.status(500).send({ message: 'Error al cargar el formulario de edición'});
    }
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, precio, categoria_id } = req.body;
        const imagen = req.file ? req.file.filename : null;
        try{
            const moto = await Moto.findByPk(id);
            moto.nombre = nombre;
            moto.descripcion = descripcion;
            moto.precio = precio;
            moto.imagen = imagen;
            moto.categoria_id = categoria_id;
            await moto.save();
            res.redirect('/motos');
        } catch{
            res.status(500).send({ message: 'Error al actualizar la moto'});
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params;
        try{
            await Moto.destroy({ where: { id } });
            res.redirect('/motos');
            } catch{
                res.status(500).send({ message: 'Error al eliminar la moto'});
                }
    }
}

module.exports = motoController;