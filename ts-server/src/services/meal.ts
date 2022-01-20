import { Meal, IMealDocument, IMeal } from "../models/meal"

const getMeals = async (): Promise<IMealDocument[]> => {
    return await Meal.findAll();
}

const getMealById = async (id: string): Promise<IMealDocument> => {
    return await Meal.getById(id);
}

const searchMeals = async (contains: string): Promise<IMealDocument[]> => {
    return await Meal.search(contains);
}

const createMeal = async (meal: IMeal): Promise<IMealDocument> => {
    return await Meal.add(Meal.build(meal));   
};

const updateMeal = async (mealId: string, key: string, value: string): Promise<IMealDocument> => {
    return await Meal.change(mealId, key, value);
};

const deleteMeal = async (_id: string): Promise<IMealDocument> => {
    return await Meal.delete(_id);
};

const mealsService = { 
    getMeals,
    createMeal,
    updateMeal,
    deleteMeal,
    getMealById,
    searchMeals,
};

export { mealsService };

