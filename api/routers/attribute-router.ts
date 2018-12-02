import { ObjectID } from 'bson';
import express from 'express';
import Attribute from '../models/Attribute';

const attributeRouter = express.Router();

attributeRouter.post('/', async (req, res) => {
    const { name, type } = req.body;
    const attribute = Object.assign(new Attribute(), {
        name,
        type,
        verified: false,
    });
    await attribute.save();
    res.send(attribute);
});

attributeRouter.get('/', async (req, res) => {
    const type = req.query.t;
    const attributes = await Attribute.find({
        where: {
            type,
        },
    });
    res.send(attributes);
});

export default attributeRouter;
