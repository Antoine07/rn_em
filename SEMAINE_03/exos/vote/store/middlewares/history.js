import { set_history } from "../action-types/actions-types";

const middlewareHistory = store => next => action => {
    const returnAction = next(action);
    const { v, h } = store.getState();

    if ( v.count === v.max && h.save === false) {
        store.dispatch(set_history(v.choices));
        console.log("choices history", h.choices)
    }

    return returnAction;
}

export default middlewareHistory;