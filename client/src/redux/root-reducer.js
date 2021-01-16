import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import modeReducer from './mode/mode.reducer';
import tokenReducer from './token/token.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'mode', 'token'],
};
const rootReducer = combineReducers({
    user: userReducer,
    mode: modeReducer,
    token: tokenReducer,
});

export default persistReducer(persistConfig, rootReducer);
