import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Ruta de prueba para verificar que el backend está vivo
app.get('/', (req, res) => {
    res.json({
        status: "online",
        message: "Backend de Nexus Manager levantado correctamente"
    });
});

// Levantar el servidor y dejarlo escuchando
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});