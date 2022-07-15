import { SET_HISTORY, RESET } from "../constants/actions";

const stateInit = {
    choices: [],
    save: false
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {

        case SET_HISTORY:

            return {
                ...state,
                choices: state.choices.concat(action.payload),
                save: true
            }

        case RESET:

            return {
                ...state,
                save: false
            }

        default:
            return state;
    }
};

export default reducer;