const restaurantController = require("../Controllers/restaurants.controller");



//When someone does POST call on this path , then retaurant controller will take over
module.exports = (app) => {
    app.post("/restaurants",restaurantController.create);
    app.get("/restaurants",restaurantController.fetch);
    app.post("/addmanyrestaurants",restaurantController.createManyRes);
}

