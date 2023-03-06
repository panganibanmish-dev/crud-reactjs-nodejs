import {Sequelize} from "sequelize";

const db = new Sequelize('sample_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;