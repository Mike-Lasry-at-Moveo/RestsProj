import mongoose from "mongoose";
import { Errors, Options } from "../config/constants";

interface IMeal {
    _id?: string,
    name: string,
    description: string,
    price: number
};

interface IMealDocument extends mongoose.Document {
    name: string,
    description: string,
    price: number
};

interface IMealModel extends mongoose.Model<IMealDocument> {
    build(attr: IMeal): IMeal;
    findAll(): Promise<IMealDocument[]>;
    search(contains: string): Promise<IMealDocument[]>;
    add(meal: IMeal): Promise<IMealDocument>;
    change(MealId: string, key: string, value: string): Promise<any>;
    delete(MealId: string): Promise<any>;
    getById(MealId: string): Promise<any>;
};

const mealSchema = new mongoose.Schema({
    name: { type: String },
    description: {type: String},
    price: { type: Number },
});

mealSchema.statics.build = (attr: IMeal): IMeal => {
    return new Meal(attr);
};

mealSchema.statics.search = async (contains: any): Promise<IMealDocument[]> => {
    let response = [] as IMealDocument[];
    try {
        response = await Meal.find({
            // name: {"$regex": contains, "$options":"i"}
            $or: [ 
                { ...getFilterByKey(Options.NAME,contains) },
                { ...getFilterByKey(Options.ADDR,contains) },
                { ...getFilterByKey(Options.DESC,contains) },
             ]
        })
    } catch (error) {
        console.error.bind(Errors.BIND_ERR);
    } finally {
        return response;
    }
};

mealSchema.statics.findAll = async (): Promise<IMealDocument[]> => {
    let response = [] as IMealDocument[];
    try {
        response = await Meal.find({});
    } catch (error) {
        console.error.bind(Errors.BIND_ERR);
    } finally {
        return response;
    }
};

mealSchema.statics.getById = async (id: string): Promise<any> => {
    let response = {} as any;
    try {
        response = await Meal.findById(id)
    } catch (error) {
        console.error.bind(Errors.BIND_ERR);
    } finally { return response; }
};

mealSchema.statics.add = async (meal: IMealDocument): Promise<IMealDocument> => {
    let response = {} as IMealDocument;
    try {
        response = await Meal.create(meal);
    } catch (error) {
        console.error.bind(`${Errors.MEAL_CREATE}:\n${meal}`);
    } finally{
        return response;
    }
};

mealSchema.statics.change = async (MealId: string, key: string, value: string): Promise<any> => {
    let response = null;
    try {
        response = await Meal.updateOne({ _id: MealId }, { $set: { ...getUpdate(key, value) } });
    } catch (error) {
        console.error.bind(`${Errors.REST_UPDT}: ${MealId}`);
    } finally { return response };
};

mealSchema.statics.delete = async (MealId: string): Promise<any> => {
    let response = null;
    try {
        response = await Meal.deleteOne({ _id: MealId });
    } catch (error) {
        console.error.bind(`${Errors.REST_DEL}: ${MealId}:\n`);
    } return response;
};

const Meal = mongoose.model<IMealDocument, IMealModel>(`Meal`, mealSchema);
export { IMeal, Meal, IMealDocument };


// Util functions

function getUpdate(key: string, value: string) {
    switch (key) {
        case Options.NAME: return { name: value };
        case Options.DESC: return { description: value };
        case Options.PRICE: return { price: value };
        default: return null;
    }
}

function getFilter(contains: string){
    return {'$regex': contains, '$options': 'i'};
}

function getFilterByKey(key: string, value: string){
    switch(key){
        case Options.NAME: return {name: getFilter(value)};
        case Options.ADDR: return {address: getFilter(value)};
        case Options.DESC: return {description: getFilter(value)};
    }
}