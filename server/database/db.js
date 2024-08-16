import { Sequelize } from "sequelize";


const db = new Sequelize('tercero', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql',
});
export default db;
