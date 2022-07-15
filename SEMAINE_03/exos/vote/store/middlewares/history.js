import { set_history } from "../action-types/actions-types";

const middlewareHistory = store => next => action => {
    const returnAction = next(action);
    const { v: { count, max, candidates }, h: { save }, h: { choices } } = store.getState();
    if (count === max && save === false) {
        // TODO 

        for (const candidate of candidates) {
            if (choices.includes(candidate)) {
                choices[candidate] += 1;
            } else {
                choices[candidate] = 1;
            }
        }

        console.log(choices);

        store.dispatch(set_history(choices));
    }

    return returnAction;
}

export default middlewareHistory;