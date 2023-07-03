/*
* 防抖（debounce）: 将多次高频操作优化为只在最后一次执行，通常使用的场景是：用户连续输入，只需要在输入结束后做一次校验即可，比如input搜索，校验
* */
/*

import { useCallback, useEffect, useRef } from "react";

const useTimeoutFn = (fn:any, ms:number) => {
    const ready = useRef(false);
    const timeout = useRef(null);
    const callback = useRef(fn);

    const isReady = useCallback(() => ready.current, []);

    const set = useCallback(() => {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);

    const clear = useCallback(() => {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);

    useEffect(() => {
        set();

        return clear;
    }, [ms, clear, set]);

    return [isReady, set, clear];
};

const useDebounce = (fn, ms = 0, deps = []) => {
    const [isReady, reset, clear] = useTimeoutFn(fn, ms);

    useEffect(reset, deps);
};
*/
