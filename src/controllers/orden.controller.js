import { getConnection } from "./../database/database";

const traerOrdenes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * from orden");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// const getOrden = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const connection = await getConnection();
//         const result = await connection.query("SELECT * FROM orden WHERE id = ?", id);
//         res.json(result);
//     } catch (error) {
//         res.status(500);
//         res.send(error.message);
//     }
// };

const crearOrden = async (req, res) => {
    try {
        const { queso, revueltas, chicharron, gaseosa, refresco, chocolate, estado, mesaNum } = req.body;

        if (queso === undefined || revueltas === undefined || chicharron === undefined
            || gaseosa === undefined || refresco === undefined || chocolate === undefined
            || estado === undefined || mesaNum === undefined
            ) {
            return res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const orden = { queso, revueltas, chicharron, gaseosa, refresco, chocolate, estado, mesaNum };
        const connection = await getConnection();
        await connection.query("INSERT INTO orden SET ?", orden);
        return res.json({ message: "Orden aniadida" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const actualizarOrden = async (req, res) => {
    try {
        const { id } = req.params;
        const { queso, revueltas, chicharron, gaseosa, refresco, chocolate, estado, mesaNum } = req.body;

        if (queso === undefined || revueltas === undefined || chicharron === undefined
            || gaseosa === undefined || refresco === undefined || chocolate === undefined
            || estado === undefined || mesaNum === undefined
            ) {
            return res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const orden = { queso, revueltas, chicharron, gaseosa, refresco, chocolate, estado, mesaNum };
        const connection = await getConnection();
        const result = await connection.query("UPDATE orden SET ? WHERE id = ?", [orden, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    traerOrdenes,
   // getOrden,
    crearOrden,
    actualizarOrden
};
