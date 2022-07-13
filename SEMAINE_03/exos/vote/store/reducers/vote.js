import { CHOICE, RESET } from "../constants/actions";

const stateInit = {
    candidates: [
        { id: 1, choice_1: "Alan", choice_2: "Juliette" },
        { id: 2, choice_1: "Phi", choice_2: "Bernard" },
        { id: 3, choice_1: "Lisa", choice_2: "Elise" },
        { id: 4, choice_1: "Cecilia", choice_2: "Alice" },
    ],
    count: 0,
    max: 4,
    choices: []
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {

        case CHOICE:
            const  choice = action.payload;
            const id = Date.now().toString()

            return {
                ...state,
                choices: state.choices.concat({ id, choice }),
                count: state.count + 1
            }

        case RESET:
            return {
                ...state,
                choices: [],
                count: 0
            }

        default:
            return state;
    }
};

export default reducer;