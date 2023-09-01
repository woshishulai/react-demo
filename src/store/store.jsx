import { configureStore } from '@reduxjs/toolkit';
//初始化
import count from './module/home/slice';
//引入模块的仓库

//创建库
export const store = configureStore({
    //每个模块下的库
    reducer: {
        count: count,
    },
});
