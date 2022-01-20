const MEAL_PATH = "/api/meals";
import { mealsController } from "../controllers/meal";
import { Router } from "express";
const router = Router();

router
    .get(MEAL_PATH, mealsController.getAllMeals)
    .get(`${MEAL_PATH}/:id`, mealsController.getMealById)

    .post(MEAL_PATH, mealsController.createMeal)
    .post(`${MEAL_PATH}/search`, mealsController.searchMeals)
    
    .patch(`${MEAL_PATH}/:id`, mealsController.updateMeal)
    
    .delete(`${MEAL_PATH}/:id`, mealsController.deleteMeal);

export { router as mealsRouter };

