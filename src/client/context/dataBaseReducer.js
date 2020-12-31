import { SET_CURRENT_PAGE, FETCH_DATA } from './type';

const handlers = {
    [FETCH_DATA]: (state, { data }) => ({ ...state, data }),
    [SET_CURRENT_PAGE]: (state, { configPagination }) => ({ ...state, configPagination }),
    DEFAULT: state => state
}

export const dataBaseReducer = (state, action) => {
    const handler = handlers[action.type] || action.DEFAULT;
    return handler(state, action);
}