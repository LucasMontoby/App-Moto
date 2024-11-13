const sequelize = require('../config/database');

const Categoria = require('./Categoria');
const Moto = require('./Moto');

Categoria.hasMany(Moto, { foreignKey: 'categoria_id' } )
Moto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports ={
    sequelize,
    Categoria,
    Moto
}