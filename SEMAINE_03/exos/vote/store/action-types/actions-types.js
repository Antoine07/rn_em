import { CHOICE, RESET} from "../constants/actions";

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
