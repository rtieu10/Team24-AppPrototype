class Item {
    name: string
    type: string
    description: string
    lender: string
    lendee: string

    constructor(namePar:string, typePar:string, descriptionPar:string, lenderPar?:string, lendeePar?:string)   {
        this.name = namePar;
        this.type = typePar
        this.description = descriptionPar;
        this.lender = lenderPar != null ? lenderPar : "";
        this.lendee = lendeePar != null ? lendeePar : "";
    }
}

export default Item;