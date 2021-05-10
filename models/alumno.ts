import { Sequelize, Model, DataTypes } from 'sequelize';
import 'dotenv/config.js';

const dbHost = process.env.HOST || "localhost";
const user = process.env.USER || "";
const password = process.env.PASSWD || "";

const sequelize = new Sequelize('nt', user, password, {
    dialect: 'mysql',
    port: 3307,
    host: dbHost
});

class Alumno extends Model { }

Alumno.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    career: DataTypes.STRING,
    career_average: DataTypes.FLOAT,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: '0000-00-00 00:00:00'
    }
}, { sequelize, modelName: 'alumnos' });

export default Alumno;