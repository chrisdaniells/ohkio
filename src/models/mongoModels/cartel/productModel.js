import mongoose from 'mongoose';

import * as sampleData from '../../../data/cartel_products';
import ProdGen  from '../../../data/CartelProductGenerator';

let prodGen =  new ProdGen();

export function getAllProducts(callback) {
    return callback(null, prodGen.getProducts());
}

export function getProductsByParam(param, value, callback) {
    let products = prodGen.getProducts();
    let productReturn;
    for(let product in products) {
        if(products[product][param] == value) {
             productReturn = products[product];
             break;
        }
    }
    return callback(null, productReturn);
}