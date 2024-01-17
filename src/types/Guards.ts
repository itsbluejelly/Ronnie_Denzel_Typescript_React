// IMPORTING NECESSARY TYPES
import {ProductType} from "./Types"

// A TYPE GUARD FOR AN ARRAY OF PRODUCTS
export function arrayHasProducts(array: unknown): array is ProductType[]{
    if(Array.isArray(array) && array.length){
        return array.every(item => (
            typeof item === "object" && item !== null &&
            "sku" in item && typeof item.sku === "string" &&
            "name" in item && typeof item.name === "string" &&
            "price" in item && typeof item.price === "number"
        ))
    }else{
        return false
    }
}