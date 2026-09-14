import { db } from "@/src/db";
import { meals, foods, foodNutrients, micronutrients, nutritionEntries } from "@/src/db/schema";

export type NewFoodParams = {
  name: string,
  
}