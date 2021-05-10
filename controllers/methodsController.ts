import Alumno from '../models/alumno';
import { Request, Response } from 'express';

export const example = async (req: Request, res: Response) => {
    res.send('Hello world');
}

export const countUsers = async (req: Request, res: Response) => {
    const count = await Alumno.count().catch((err) => res.send(err));
    let result = JSON.stringify(count, null, 2);
    res.send(result);
}

export const orderUsersCareer = async (req: Request, res: Response) => {
    const users = await Alumno.findAll({
        order: [["career", "DESC"]]
    }).catch((err) => res.send(err));
    let result = JSON.stringify(users, null, 2);
    res.send(result);
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await Alumno.findAll().catch((err) => res.send(err));
    let result = JSON.stringify(users, null, 2);
    res.send(result);
}

export const getUser = async (req: Request, res: Response) => {
    const alumno = await Alumno.findAll({
        where: {
            id: req.params.id
        }
    }).catch((err) => res.send(err));

    let result = JSON.stringify(alumno, null, 2);
    if (result.length === 0) return res.send("No hay alumnos con ese id")
    res.send(result);
}

export const addUser = async (req: Request, res: Response) => {
    const data = req.body;

    const result = await Alumno.create({
        first_name: data.first_name,
        last_name: data.last_name,
        career: data.career,
        career_average: data.career_average
    }).catch((err) => res.send(err));

    res.send(result);
}

export const editUser = async (req: Request, res: Response) => {
    const data = req.body;

    await Alumno.update({
        first_name: data.first_name,
        last_name: data.last_name,
        career: data.career,
        career_average: data.career_average
    }, {
        where: {
            id: data.id
        }
    }).catch((err) => res.send(err));

    res.json({ success: "Alumno actualizado exitosamente" });
}

export const deleteUser = async (req: Request, res: Response) => {

    let result = await Alumno.destroy({
        where: {
            id: req.params.id
        }
    }).catch((err) => res.send(err));


    if (result == 0)
        res.json({ error: "Alumno no existente" });
    else
        res.json({ success: "Alumno eliminado exitosamente" });

}