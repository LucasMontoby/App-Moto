const Categoria = require('./Categoria');
const Moto = require('./Moto');

//Definir las asociaciones...
Categoria.hasMany(Moto, { foreignKey: 'categoria_id' } )
Moto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports = {Categoria, Moto};

