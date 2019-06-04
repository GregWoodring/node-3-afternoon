module.exports = {
    create: (req, res) => {
        let db = req.app.get('db');
        let {name, description, price, image_url } = req.body;
        db.create_product([name, description, price, image_url]).then(() => {
            res.sendStatus(200);
        }).catch(() => {
            res.sendStatus(500);
        })
    },

    getOne: (req, res) => {
        let db = req.app.get('db');
        let { id } = req.params;
        db.read_product(id).then(product => {
            res.send(product).status(200);
        }).catch(() => {
            res.sendStatus(500);
        })
    },

    getAll: (req, res) => {
        let db = req.app.get('db');
        db.read_products().then(products => {
            res.send(products).status(200);
        }).catch(() => {
            res.sendStatus(500)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db');
        let { id } = req.params;
        let { desc } = req.query;
        db.update_product([desc, id]).then(() => {
            res.sendStatus(200);
        }).catch(() => {
            res.sendStatus(500)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db');
        let { id } = req.params;
        db.delete_product(id).then(() => {
            res.sendStatus(200);
        }).catch(() => {
            res.sendStatus(500)
        })
    }
}