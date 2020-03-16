export class Customer {
    constructor(_id = '', address = '', city = '', country = '', district= '', FirstName = '', LastName='', status=''){
        this._id = _id;
        this.address = address;
        this.city = city;
        this.country = country;
        this.district = district;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.status = status;
    }
    _id:string;
    address:string;
    city:string;
    country:string;
    district:string;
    FirstName:string;
    LastName:string;
    status:string;
}
