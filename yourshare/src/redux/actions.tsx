// Actions and their types


export enum actionIdentifier {
    Join,
    AddItem
}

export interface JoinAction {
    type: actionIdentifier;  // TODO WARNING: Any new actions MUST have a type: actionIdentifier too!!!!!!!!!!!
    name: string;
    phone: string;
    zip: string;
}

export interface AddItemAction {
    type: actionIdentifier;  // TODO WARNING: Any new actions MUST have a type: actionIdentifier too!!!!!!!!!!!
    itemName: string;
    itemType: string;
    itemDescription: string;
}



export function createJoinAction(nam: string, ph: string, z: string): JoinAction {
    return {
        type: actionIdentifier.Join,
        name: nam,
        phone: ph,
        zip: z
    };
};


export function createAddItemAction(nm: string, typ: string, desc: string ): AddItemAction {
    return {
        type: actionIdentifier.AddItem,
        itemName: nm,
        itemType: typ,
        itemDescription: desc
    };
};

export type YourShareActions = JoinAction | AddItemAction
// TODO: On the line above add a vertical bar and then then name of the new action's interface, like so:
// export type YourShareActions = AddAction | RemoveAction