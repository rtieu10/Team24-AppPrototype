import { YourShareActions, actionIdentifier, AddItemAction, JoinAction } from './actions'
import { IYourShareState, Person } from './types';



// Initial state of the app:
let SampleData_LoadedProgrammatically = (): IYourShareState => {
    // 'programmatically' means "done by a program" (as opposed to reading it out of a data file)
    const you = new Person(0, "This is you", "508-867-5309", "98052")

    const person1 = new Person(1, "Stacey", "425-123-4567", "98011")
    person1.addItem(2, "Blender", "Kitchen", "A pretty great blender.  The lid...");

    const person2 = new Person(3, "Marcos", "206-7654-321", "98115")
    person2.addItem(4, "Rake", "Garden", "A pretty great rake.  The handle...");
    person2.addItem(5, "Car", "Garden", "A pretty great car.  The steering wheel...");

    return {
        idCounter: 6, // this is the id assigned to the next object that we create
        currentUser: you,
        people: [
            person1,
            person2,
            you
        ]
    }
}

// Initial state of the app:
const initialState: IYourShareState = SampleData_LoadedProgrammatically()

function yourShareReducer(state: IYourShareState | undefined, action: YourShareActions): IYourShareState {
    if (state === undefined) {
        return initialState;
    }

    const nextId = state.idCounter + 1;
    
    switch (action.type) {
        case actionIdentifier.Join: {
            let addAction = action as JoinAction;

            // TODO: Uncomment this to see a visual confirmation that things are going ok, at least up to this point :)
            // alert('Added name: ' + addAction.name + ' phone: ' + addAction.phone + ' zip: ' + addAction.zip);

            let newState: IYourShareState = { ...state }; // this will copy the current state

            newState.currentUser = new Person(nextId, addAction.name, addAction.phone, addAction.zip);
            newState.people.push(newState.currentUser); // add the current user to the list of all people
            newState.idCounter = nextId;

            return newState;
        }

        case actionIdentifier.AddItem: {
            let addItemAction = action as AddItemAction;

            // TODO: Uncomment this to see a visual confirmation that things are going ok, at least up to this point :)
            // alert('Added name: ' + addAction.name + ' phone: ' + addAction.phone + ' zip: ' + addAction.zip);

            let newState: IYourShareState = { ...state }; // this will copy the current state


            // person1.addItem(2, "Blender", "Kitchen", "A pretty great blender.  The lid...");
            newState.currentUser.addItem(nextId, addItemAction.itemName, addItemAction.itemType, addItemAction.itemDescription)
            newState.idCounter = nextId;

            return newState;
        }

        default:
            return state;
    }

}

export default yourShareReducer;
