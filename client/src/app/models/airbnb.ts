export class Airbnb {
    constructor(_id = '', name = '', price = '' , property_type = '', id_customer = 0){
        this._id = _id;
        this.name = name;
        this.price = price;
        this.property_type = property_type;
        this.id_customer = id_customer;
    }
    _id:string;
    name:string;
    price:string;
    property_type:string;
    id_customer: number;
}
