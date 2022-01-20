import { Response, Request } from "express";
import { securityService } from "src/services/security";
import { mealsService } from "../services/meal";

const getAllMeals = async (req: Request, res: Response) => {
    const meals = await mealsService.getMeals();
    res.status(201).send({success:true, data:meals});
};

const getMealById = async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(`id: `, id);
    
    const meal = await mealsService.getMealById(id);
    console.log(isMealExist(meal));
    
    res.status(201).send(newResponse(meal));
};

const searchMeals = async (req: Request, res: Response) => {
    const { contains } = req.body;
    const meals = await mealsService.searchMeals(contains);
    res.status(201).send({success:true, data: meals});
};

const createMeal = async (req: Request, res: Response) => {
    const {name,description,price } = req.body;
    const meal = await mealsService.createMeal( {name,description,price } );
    res.status(201).send(meal);
};

const updateMeal = async (req: Request, res: Response) => {
    const id = req.params.id;
    const {key, value} = req.body;
    const meal = await mealsService.updateMeal(id, key, value)
    res.status(201).send(meal);
};

const deleteMeal = async (req: Request, res: Response) => {
    const success = await mealsService.deleteMeal(req.params.id)
    res.status(201).send(success);
};

const mealsController = {
    getAllMeals,
    getMealById,
    createMeal,
    updateMeal,
    deleteMeal,
    searchMeals,
};

export { mealsController };

// Util functions 

const newResponse = (data: any, msg?:string, encString:boolean = false) => {
    const success = isMealExist(data);
    console.log(`in newResponse success:`, success);
    
    // if(success) data = encString ? 
    //     securityService.encryptString(data) : 
    //         securityService.encryptJson(data);
        
    return {
        success: success,
        data: data,
        message: msg || ''
    };
}

const isMealExist = (meal: any): boolean => {
    return isExist( meal ) && ( meal.name != undefined ||
        meal.description != undefined || meal.price != undefined );
}

const isExist = (data: any): boolean => {
    return ((data != null) && (data != undefined) && data.length !== 0);
}