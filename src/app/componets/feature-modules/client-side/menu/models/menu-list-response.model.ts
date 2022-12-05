export class MenuListResponseModel{
    menuId:number|undefined;
    foodMenu:string|undefined;
    submenu:Array<submenu>=[];
}
export class submenu{
    submenuId:number|undefined;
    submenuName:string|undefined;
    price:number|undefined;
}

