import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modeReducer from './mode/mode.reducer';
import userReducer from './user/user.reducer';
import settingReducer from './setting/setting.reducer';
import alertReducer from './alert/alert.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};
const rootReducer = combineReducers({
    mode: modeReducer,
    user: userReducer,
    setting: settingReducer,
    alert: alertReducer,
});

export default persistReducer(persistConfig, rootReducer);
