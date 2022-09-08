import { configureStore } from "@reduxjs/toolkit";
import products from './slices/product.slice'

export default configureStore({
    reducer: {
        products
    }
})