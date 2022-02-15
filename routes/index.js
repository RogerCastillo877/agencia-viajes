import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Inicio', {
        page: 'Inicio'
    })
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        page: 'Nosotros'
    });
});

router.get('/viajes', (req, res) => {
    res.render('viajes', {
        page: 'Viajes'
    });
});

router.get('/testimonios', (req, res) => {
    res.render('testimonios', {
        page: 'Testimonios'
    });
});

export default router;