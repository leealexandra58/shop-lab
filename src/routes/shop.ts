import { Request, Router } from 'express';
import { Shop } from '../models/shop';

const shopRoutes = Router();

const getId = (req: Request): number => Number.parseInt(req.params.id);

const shops: Shop[] = [
    { id: 111, name: "Pepper's Pizza", rating: 4.5 },
    { id: 222, name: "Clive's Chives", rating: 3.4 },
    { id: 333, name: "Betty's Brews", rating: 4.3 },
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];

shopRoutes.get('/shop', (req, res) => {
    const minRating = Number.parseInt(req.query.minRating as string);
    let tempShops = shops;

    if (minRating) {
        tempShops = tempShops.filter((shop) => shop.rating >= minRating);
    } else {
        res.status(200).json(tempShops);
    }

    res.status(200).json(tempShops);

});

shopRoutes.get('/shop/:id', (req, res) => {

    const id = getId(req);

    const indexOfShop = shops.findIndex((shop) => shop.id === id);
  
    if (indexOfShop >= 0) {
      res.status(200).json(shops[indexOfShop]);
    } else {
      //res.sendStatus(404);
      res.send(`{ "error": "Shop not found: ${id}" }`);
    }
});

export default shopRoutes;