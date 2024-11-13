const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Moto = sequelize.define('Moto',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    descripcion:{
        type: DataTypes.TEXT
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen:{
        type: DataTypes.STRING
    },
    categoria_id:{

        type: DataTypes.INTEGER,
        references:{
            model: 'categorias',
            key: 'id'
            }//referncia a MySQL

    }
    }, 
    {
        tableName: 'motos',
        timestamps: false
    });

    Moto.belongsTo(Categoria, {foreignKey: 'categoria_id' });

    module.exports = Moto;