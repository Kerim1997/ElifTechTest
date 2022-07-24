import axios from "axios";
import { IShop, IProduct } from "../global";

export async function getShops() {
    try {
        const response = await axios.get('https://gist.githubusercontent.com/Kerim1997/d56a29fd42121c029af7431154857d8a/raw/32819dee415d3f27d2a13cdbb896bb8c0a27de4b/gistfile1.txt');
        return response.data.Shop;
    } catch (e) {
        console.log(e);
    }
}


export async function getProducts(shopId: string) {
    try {
        const response = await axios.get<Data>('https://gist.githubusercontent.com/Kerim1997/d56a29fd42121c029af7431154857d8a/raw/32819dee415d3f27d2a13cdbb896bb8c0a27de4b/gistfile1.txt');

        return response.data.Shop?.find(x => x.id == Number.parseInt(shopId))?.product;
    } catch (e) {
        console.log(e);
    }
}


interface Data {
    Shop: IShop[]
}