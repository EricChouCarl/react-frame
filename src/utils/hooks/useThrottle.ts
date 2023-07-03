/*
* 节流（throttle）：每隔一段时间执行一次，也就是降低频率，将高频操作优化成低频操作。通常使用场景： 滚动条事件，窗口resize事件，通常每隔100-500ms执行一次
* */
/*

import React, { useCallback, useEffect, useRef } from "react";

const useTimeoutFn = (fn, ms) => {
    const ready = useRef(false);
    const timeout = useRef();
    const callback = useRef(fn);

    const isReady = useCallback(() => ready.current, []);

    const setThrottle = useCallback(() => {
        ready.current = false;

        if (!timeout.current) {
            timeout.current = true;
            timeout.current = setTimeout(() => {
                ready.current = true;
                timeout.current = null;
                callback.current();
            }, ms);
        }
    }, [ms]);

    const clearThrottle = useCallback(() => {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);

    useEffect(() => {
        setThrottle();

        return clearThrottle;
    }, [ms, setThrottle, clearThrottle]);

    return { isReady, setThrottle, clearThrottle };
};

const useThrottle = (fn, ms = 0, deps = []) => {
    const { setThrottle } = useThrottleTimeoutFn(fn, ms);

    useEffect(setThrottle, deps);
};
*/

/*
在组件中使用
scss复制代码  useThrottle(
    () => {
        console.log(new Date().getSeconds());
    },
    1000,
    [value]
);
*/
