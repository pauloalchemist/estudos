const Sequelize = require('sequelize');
const UsuarioSchema = {
    name: 'usuario',
    schema: {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true,
            required: true,
        },
        password: {
            type: Sequelize.STRING,
            required: true
        }
    },
    options: {
        tableName: 'tb_usuarios',
        freezeTableName: false,
        timestamps: false
    }
};

module.exports = UsuarioSchema;
