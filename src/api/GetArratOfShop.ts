import axios from "axios";
import { IShop, IProduct } from "../global";

export async function getShops() {
    try {
        const response = await axios.get('https://gist.githubusercontent.com/Kerim1997/60581425bc9195ddc88a123e2a6d0000/raw/20d92319bf324674aaa31101bd8c9306689a763b/gistfile1.txt');
        return response.data.Shop;
    } catch (e) {
        console.log(e);
    }
}


export async function getProducts(shopId: string) {
    try {
        const response = await axios.get<Data>('https://gist.githubusercontent.com/Kerim1997/60581425bc9195ddc88a123e2a6d0000/raw/20d92319bf324674aaa31101bd8c9306689a763b/gistfile1.txt');

        return response.data.Shop?.find(x => x.id == Number.parseInt(shopId))?.product;
    } catch (e) {
        console.log(e);
    }
}


interface Data {
    Shop: IShop[]
}