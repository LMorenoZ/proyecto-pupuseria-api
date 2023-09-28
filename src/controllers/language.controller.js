import { getConnection } from "./../database/database";

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, mesaNum, asientos, estado FROM mesa");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// const getLanguage = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const connection = await getConnection();
//         const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id);
//         res.json(result);
//     } catch (error) {
//         res.status(500);
//         res.send(error.message);
//     }
// };

const addLanguage = async (req, res) => {
    try {
        const { mesaNum, asientos, estado } = req.body;

        if (mesaNum === undefined || asientos === undefined || estado === undefined) {
            return res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const mesa = { mesaNum, asientos, estado};
        const connection = await getConnection();
        await connection.query("INSERT INTO mesa SET ?", mesa);
        return res.json({ message: "Mesa aniadida" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const { mesaNum, asientos, estado } = req.body;

        if (mesaNum === undefined || asientos === undefined || estado === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const mesa = { mesaNum, asientos, estado};
        const connection = await getConnection();
        const result = await connection.query("UPDATE mesa SET ? WHERE id = ?", [mesa, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM mesa WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getLanguages,
   // getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
};
