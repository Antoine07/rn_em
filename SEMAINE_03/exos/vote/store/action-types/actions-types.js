import { CHOICE, RESET, SET_HISTORY} from "../constants/actions";

export const set_choice = payload => {

    return {
        type : CHOICE, payload
    }
}

export const set_reset = () => {

    return {
        type : RESET
    }
}

export const set_history = payload => {

    return {
        type : SET_HISTORY, payload
    }
}