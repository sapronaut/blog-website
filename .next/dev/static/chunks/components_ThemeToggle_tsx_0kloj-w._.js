(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const stored = localStorage.getItem("theme");
            const initial = stored || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
            document.documentElement.setAttribute("data-theme", initial);
            setTheme(initial);
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const next = theme === "dark" ? "light" : "dark";
        const overlay = document.createElement("div");
        overlay.className = "pen-transition";
        overlay.style.setProperty("--pen-color", next === "light" ? "#f8f5ee" : "#111315");
        document.body.appendChild(overlay);
        requestAnimationFrame(()=>{
            overlay.classList.add("animate");
        });
        setTimeout(()=>{
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            setTheme(next);
        }, 800);
        overlay.addEventListener("animationend", ()=>{
            overlay.remove();
        });
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-11 h-11 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
        className: "w-11 h-11 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95",
        style: {
            border: "1px solid var(--rule)",
            color: "var(--text)",
            background: "var(--surface)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontSize: "1.1rem",
                lineHeight: 1
            },
            children: theme === "dark" ? "☾" : "☀"
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ThemeToggle.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "PMXYpdFteak97Vtku2TV0tPQEaI=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ThemeToggle_tsx_0kloj-w._.js.map