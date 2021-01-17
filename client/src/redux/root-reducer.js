import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modeReducer from './mode/mode.reducer';
import userReducer from './user/user.reducer';
import settingReducer from './setting/setting.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mode', 'user', 'setting'],
};
const rootReducer = combineReducers({
    mode: modeReducer,
    user: userReducer,
    setting: settingReducer,
});

export default persistReducer(persistConfig, rootReducer);
