var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from 'react';
var ChildrenBlur = function (_a) {
    var children = _a.children, onBlur = _a.onBlur, className = _a.className;
    var handleBlur = useCallback(function (e) {
        var currentTarget = e.currentTarget;
        requestAnimationFrame(function () {
            if (!currentTarget.contains(document.activeElement))
                onBlur();
        });
    }, [onBlur]);
    return (_jsx("div", __assign({ onBlur: function (e) { return handleBlur(e); }, className: className }, { children: children }), void 0));
};
export default ChildrenBlur;
