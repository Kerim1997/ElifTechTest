export interface IShop{
    id:number;
    name:string;
    product:IProduct[];

}
export interface IProduct{
    name:string;
    id:number;
    prise:number;
    countOfSale:number;
    ref:string;

}
