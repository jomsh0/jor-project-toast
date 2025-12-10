import "./index.css";
import {jsx as $ciORb$jsx, jsxs as $ciORb$jsxs} from "react/jsx-runtime";
import $ciORb$react from "react";
import {Info as $ciORb$Info, AlertTriangle as $ciORb$AlertTriangle, CheckCircle as $ciORb$CheckCircle, AlertOctagon as $ciORb$AlertOctagon, X as $ciORb$X} from "react-feather";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



function $c03209589eeb55e7$export$2e2bcd8739ae039(callback) {
    (0, $ciORb$react).useEffect(()=>{
        function handler(e) {
            if (e.code !== "Escape") return;
            callback();
        }
        window.addEventListener("keydown", handler);
        return ()=>window.removeEventListener("keydown", handler);
    }, []);
}


const $d987c2b1c430c496$export$29d4e2ed4674ecfc = /*#__PURE__*/ (0, $ciORb$react).createContext();
function $d987c2b1c430c496$var$ToastProvider({ children: children }) {
    const [toasts, setToasts] = (0, $ciORb$react).useState([]);
    (0, $c03209589eeb55e7$export$2e2bcd8739ae039)(clearToasts);
    function addToast(message, variant = "notice") {
        const id = Date.now();
        setToasts([
            ...toasts,
            {
                id: id,
                message: message,
                variant: variant
            }
        ]);
    }
    function dismissToast(id) {
        setToasts(toasts.filter((toast)=>toast.id !== id));
    }
    function clearToasts() {
        setToasts([]);
    }
    return /*#__PURE__*/ (0, $ciORb$jsx)($d987c2b1c430c496$export$29d4e2ed4674ecfc.Provider, {
        value: {
            toasts: toasts,
            addToast: addToast,
            dismissToast: dismissToast,
            clearToasts: clearToasts
        },
        children: children
    });
}
var $d987c2b1c430c496$export$2e2bcd8739ae039 = $d987c2b1c430c496$var$ToastProvider;






var $6213507f3736739f$exports = {};

$parcel$export($6213507f3736739f$exports, "button", function () { return $6213507f3736739f$export$2ba01fb71ed41cb6; }, function (v) { return $6213507f3736739f$export$2ba01fb71ed41cb6 = v; });
var $6213507f3736739f$export$2ba01fb71ed41cb6;
$6213507f3736739f$export$2ba01fb71ed41cb6 = `-_VRTG_button`;


function $b818371aef26471e$var$Button({ className: className = '', ...delegated }) {
    return /*#__PURE__*/ (0, $ciORb$jsx)("button", {
        className: `${(0, (/*@__PURE__*/$parcel$interopDefault($6213507f3736739f$exports))).button} ${className}`,
        ...delegated
    });
}
var $b818371aef26471e$export$2e2bcd8739ae039 = $b818371aef26471e$var$Button;









var $befe9415d892d297$exports = {};

$parcel$export($befe9415d892d297$exports, "showWrapper", function () { return $befe9415d892d297$export$2d16cbb9ad858cf4; }, function (v) { return $befe9415d892d297$export$2d16cbb9ad858cf4 = v; });
$parcel$export($befe9415d892d297$exports, "wrapper", function () { return $befe9415d892d297$export$cc74dcc53cfce4eb; }, function (v) { return $befe9415d892d297$export$cc74dcc53cfce4eb = v; });
var $befe9415d892d297$export$2d16cbb9ad858cf4;
var $befe9415d892d297$export$cc74dcc53cfce4eb;
$befe9415d892d297$export$2d16cbb9ad858cf4 = `_iOXHW_showWrapper`;
$befe9415d892d297$export$cc74dcc53cfce4eb = `_iOXHW_wrapper`;


const $efb285fa4491cbff$var$VisuallyHidden = ({ children: children, className: className = '', ...delegated })=>{
    const [forceShow, setForceShow] = (0, $ciORb$react).useState(false);
    (0, $ciORb$react).useEffect(()=>{
        if (process.env.NODE_ENV !== 'production') {
            const handleKeyDown = (ev)=>{
                if (ev.key === 'Alt') setForceShow(true);
            };
            const handleKeyUp = ()=>{
                setForceShow(false);
            };
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return ()=>{
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, []);
    if (forceShow) return /*#__PURE__*/ (0, $ciORb$jsx)("span", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($befe9415d892d297$exports))).showWrapper,
        children: children
    });
    return /*#__PURE__*/ (0, $ciORb$jsx)("span", {
        className: `${className} ${(0, (/*@__PURE__*/$parcel$interopDefault($befe9415d892d297$exports))).wrapper}`,
        ...delegated,
        children: children
    });
};
var $efb285fa4491cbff$export$2e2bcd8739ae039 = $efb285fa4491cbff$var$VisuallyHidden;




var $b06247129dc97bfb$exports = {};

$parcel$export($b06247129dc97bfb$exports, "closeButton", function () { return $b06247129dc97bfb$export$efe229eab43a9869; }, function (v) { return $b06247129dc97bfb$export$efe229eab43a9869 = v; });
$parcel$export($b06247129dc97bfb$exports, "content", function () { return $b06247129dc97bfb$export$a7db06668cad9adb; }, function (v) { return $b06247129dc97bfb$export$a7db06668cad9adb = v; });
$parcel$export($b06247129dc97bfb$exports, "error", function () { return $b06247129dc97bfb$export$a3bc9b8ed74fc; }, function (v) { return $b06247129dc97bfb$export$a3bc9b8ed74fc = v; });
$parcel$export($b06247129dc97bfb$exports, "iconContainer", function () { return $b06247129dc97bfb$export$acf4eaf431084f78; }, function (v) { return $b06247129dc97bfb$export$acf4eaf431084f78 = v; });
$parcel$export($b06247129dc97bfb$exports, "notice", function () { return $b06247129dc97bfb$export$b31f6ae88848cf15; }, function (v) { return $b06247129dc97bfb$export$b31f6ae88848cf15 = v; });
$parcel$export($b06247129dc97bfb$exports, "success", function () { return $b06247129dc97bfb$export$fe7c49d056ea1d88; }, function (v) { return $b06247129dc97bfb$export$fe7c49d056ea1d88 = v; });
$parcel$export($b06247129dc97bfb$exports, "toast", function () { return $b06247129dc97bfb$export$b410431fab84fa58; }, function (v) { return $b06247129dc97bfb$export$b410431fab84fa58 = v; });
$parcel$export($b06247129dc97bfb$exports, "warning", function () { return $b06247129dc97bfb$export$491112666e282270; }, function (v) { return $b06247129dc97bfb$export$491112666e282270 = v; });
var $b06247129dc97bfb$export$efe229eab43a9869;
var $b06247129dc97bfb$export$a7db06668cad9adb;
var $b06247129dc97bfb$export$a3bc9b8ed74fc;
var $b06247129dc97bfb$export$acf4eaf431084f78;
var $b06247129dc97bfb$export$b31f6ae88848cf15;
var $b06247129dc97bfb$export$fe7c49d056ea1d88;
var $b06247129dc97bfb$export$b410431fab84fa58;
var $b06247129dc97bfb$export$491112666e282270;
$b06247129dc97bfb$export$efe229eab43a9869 = `GFhwnW_closeButton`;
$b06247129dc97bfb$export$a7db06668cad9adb = `GFhwnW_content`;
$b06247129dc97bfb$export$a3bc9b8ed74fc = `GFhwnW_error`;
$b06247129dc97bfb$export$acf4eaf431084f78 = `GFhwnW_iconContainer`;
$b06247129dc97bfb$export$b31f6ae88848cf15 = `GFhwnW_notice`;
$b06247129dc97bfb$export$fe7c49d056ea1d88 = `GFhwnW_success`;
$b06247129dc97bfb$export$b410431fab84fa58 = `GFhwnW_toast`;
$b06247129dc97bfb$export$491112666e282270 = `GFhwnW_warning`;


const $0f0549608bd3c505$var$ICONS_BY_VARIANT = {
    notice: (0, $ciORb$Info),
    warning: (0, $ciORb$AlertTriangle),
    success: (0, $ciORb$CheckCircle),
    error: (0, $ciORb$AlertOctagon)
};
function $0f0549608bd3c505$var$Toast({ variant: variant = "notice", onDismiss: onDismiss, children: children }) {
    const Icon = $0f0549608bd3c505$var$ICONS_BY_VARIANT[variant] ?? (0, $ciORb$Info);
    return /*#__PURE__*/ (0, $ciORb$jsxs)("div", {
        className: `${(0, (/*@__PURE__*/$parcel$interopDefault($b06247129dc97bfb$exports))).toast} ${(0, (/*@__PURE__*/$parcel$interopDefault($b06247129dc97bfb$exports)))[variant]}`,
        children: [
            /*#__PURE__*/ (0, $ciORb$jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b06247129dc97bfb$exports))).iconContainer,
                children: /*#__PURE__*/ (0, $ciORb$jsx)(Icon, {
                    size: 24
                })
            }),
            /*#__PURE__*/ (0, $ciORb$jsxs)("p", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b06247129dc97bfb$exports))).content,
                children: [
                    /*#__PURE__*/ (0, $ciORb$jsxs)((0, $efb285fa4491cbff$export$2e2bcd8739ae039), {
                        children: [
                            variant,
                            ": "
                        ]
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ (0, $ciORb$jsx)("button", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b06247129dc97bfb$exports))).closeButton,
                onClick: onDismiss,
                "aria-label": "Dismiss message",
                "aria-live": "off",
                children: /*#__PURE__*/ (0, $ciORb$jsx)((0, $ciORb$X), {
                    size: 24
                })
            })
        ]
    });
}
var $0f0549608bd3c505$export$2e2bcd8739ae039 = $0f0549608bd3c505$var$Toast;







var $98d1ae04539827a5$exports = {};

$parcel$export($98d1ae04539827a5$exports, "toast", function () { return $98d1ae04539827a5$export$b410431fab84fa58; }, function (v) { return $98d1ae04539827a5$export$b410431fab84fa58 = v; });
$parcel$export($98d1ae04539827a5$exports, "toastWrapper", function () { return $98d1ae04539827a5$export$82416c89afcb2e48; }, function (v) { return $98d1ae04539827a5$export$82416c89afcb2e48 = v; });
$parcel$export($98d1ae04539827a5$exports, "wrapper", function () { return $98d1ae04539827a5$export$cc74dcc53cfce4eb; }, function (v) { return $98d1ae04539827a5$export$cc74dcc53cfce4eb = v; });
var $98d1ae04539827a5$export$b410431fab84fa58;
var $98d1ae04539827a5$export$82416c89afcb2e48;
var $98d1ae04539827a5$export$cc74dcc53cfce4eb;
$98d1ae04539827a5$export$b410431fab84fa58 = `_YfUPa_toast`;
$98d1ae04539827a5$export$b410431fab84fa58;
$98d1ae04539827a5$export$82416c89afcb2e48 = `_YfUPa_toastWrapper`;
$98d1ae04539827a5$export$cc74dcc53cfce4eb = `_YfUPa_wrapper`;



function $f6d982f11c827e02$var$ToastShelf({ children: children }) {
    const { toasts: toasts, dismissToast: dismissToast } = (0, $ciORb$react).useContext((0, $d987c2b1c430c496$export$29d4e2ed4674ecfc));
    return /*#__PURE__*/ (0, $ciORb$jsx)("ol", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($98d1ae04539827a5$exports))).wrapper,
        role: "region",
        "aria-live": "polite",
        "aria-label": "Notification",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, $ciORb$jsx)("li", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($98d1ae04539827a5$exports))).toastWrapper,
                children: /*#__PURE__*/ (0, $ciORb$jsx)((0, $0f0549608bd3c505$export$2e2bcd8739ae039), {
                    variant: toast.variant,
                    onDismiss: ()=>dismissToast(toast.id),
                    children: toast.message
                })
            }, toast.id))
    });
}
var $f6d982f11c827e02$export$2e2bcd8739ae039 = $f6d982f11c827e02$var$ToastShelf;





var $25f66500f9c8e9b1$exports = {};

$parcel$export($25f66500f9c8e9b1$exports, "controlsWrapper", function () { return $25f66500f9c8e9b1$export$40c5ce6837c6905d; }, function (v) { return $25f66500f9c8e9b1$export$40c5ce6837c6905d = v; });
$parcel$export($25f66500f9c8e9b1$exports, "inputWrapper", function () { return $25f66500f9c8e9b1$export$248a47518f3a0001; }, function (v) { return $25f66500f9c8e9b1$export$248a47518f3a0001 = v; });
$parcel$export($25f66500f9c8e9b1$exports, "label", function () { return $25f66500f9c8e9b1$export$1237798dc640739a; }, function (v) { return $25f66500f9c8e9b1$export$1237798dc640739a = v; });
$parcel$export($25f66500f9c8e9b1$exports, "messageInput", function () { return $25f66500f9c8e9b1$export$e6dd5199e814deea; }, function (v) { return $25f66500f9c8e9b1$export$e6dd5199e814deea = v; });
$parcel$export($25f66500f9c8e9b1$exports, "radioWrapper", function () { return $25f66500f9c8e9b1$export$852111b71425329; }, function (v) { return $25f66500f9c8e9b1$export$852111b71425329 = v; });
$parcel$export($25f66500f9c8e9b1$exports, "row", function () { return $25f66500f9c8e9b1$export$120ff0929b202a6d; }, function (v) { return $25f66500f9c8e9b1$export$120ff0929b202a6d = v; });
$parcel$export($25f66500f9c8e9b1$exports, "titleMessageRow", function () { return $25f66500f9c8e9b1$export$bdf23f77447d4af3; }, function (v) { return $25f66500f9c8e9b1$export$bdf23f77447d4af3 = v; });
$parcel$export($25f66500f9c8e9b1$exports, "titleMessageWrapper", function () { return $25f66500f9c8e9b1$export$b4e5a079ecce723e; }, function (v) { return $25f66500f9c8e9b1$export$b4e5a079ecce723e = v; });
$parcel$export($25f66500f9c8e9b1$exports, "wrapper", function () { return $25f66500f9c8e9b1$export$cc74dcc53cfce4eb; }, function (v) { return $25f66500f9c8e9b1$export$cc74dcc53cfce4eb = v; });
var $25f66500f9c8e9b1$export$40c5ce6837c6905d;
var $25f66500f9c8e9b1$export$248a47518f3a0001;
var $25f66500f9c8e9b1$export$1237798dc640739a;
var $25f66500f9c8e9b1$export$e6dd5199e814deea;
var $25f66500f9c8e9b1$export$852111b71425329;
var $25f66500f9c8e9b1$export$120ff0929b202a6d;
var $25f66500f9c8e9b1$export$bdf23f77447d4af3;
var $25f66500f9c8e9b1$export$b4e5a079ecce723e;
var $25f66500f9c8e9b1$export$cc74dcc53cfce4eb;
$25f66500f9c8e9b1$export$40c5ce6837c6905d = `d7rB_G_controlsWrapper`;
$25f66500f9c8e9b1$export$248a47518f3a0001 = `d7rB_G_inputWrapper`;
$25f66500f9c8e9b1$export$1237798dc640739a = `d7rB_G_label`;
$25f66500f9c8e9b1$export$e6dd5199e814deea = `d7rB_G_messageInput`;
$25f66500f9c8e9b1$export$852111b71425329 = `d7rB_G_radioWrapper`;
$25f66500f9c8e9b1$export$120ff0929b202a6d = `d7rB_G_row`;
$25f66500f9c8e9b1$export$bdf23f77447d4af3 = `d7rB_G_titleMessageRow`;
$25f66500f9c8e9b1$export$b4e5a079ecce723e = `d7rB_G_titleMessageWrapper`;
$25f66500f9c8e9b1$export$cc74dcc53cfce4eb = `d7rB_G_wrapper`;


const $eec8da47e2b891d2$var$VARIANT_OPTIONS = [
    "notice",
    "warning",
    "success",
    "error"
];
function $eec8da47e2b891d2$var$ToastPlayground() {
    const [message, setMessage] = (0, $ciORb$react).useState("");
    const [variant, setVariant] = (0, $ciORb$react).useState("notice");
    const { addToast: addToast } = (0, $ciORb$react).useContext((0, $d987c2b1c430c496$export$29d4e2ed4674ecfc));
    function handleSubmit(e) {
        e.preventDefault();
        addToast(message, variant);
        setMessage("");
        setVariant("notice");
    }
    return /*#__PURE__*/ (0, $ciORb$jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).wrapper,
        children: [
            /*#__PURE__*/ (0, $ciORb$jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0, $ciORb$jsx)("img", {
                        alt: "Cute toast mascot",
                        src: "/toast.png"
                    }),
                    /*#__PURE__*/ (0, $ciORb$jsx)("h1", {
                        children: "Toast Playground"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ciORb$jsx)((0, $f6d982f11c827e02$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $ciORb$jsxs)("form", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).controlsWrapper,
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, $ciORb$jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).row,
                        children: [
                            /*#__PURE__*/ (0, $ciORb$jsx)("label", {
                                htmlFor: "message",
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).label,
                                style: {
                                    alignSelf: "baseline"
                                },
                                children: "Message"
                            }),
                            /*#__PURE__*/ (0, $ciORb$jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).inputWrapper,
                                children: /*#__PURE__*/ (0, $ciORb$jsx)("textarea", {
                                    id: "message",
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).messageInput,
                                    value: message,
                                    required: true,
                                    autoFocus: true,
                                    onChange: (e)=>setMessage(e.target.value)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ciORb$jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).row,
                        children: [
                            /*#__PURE__*/ (0, $ciORb$jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).label,
                                children: "Variant"
                            }),
                            /*#__PURE__*/ (0, $ciORb$jsx)("div", {
                                className: `${(0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).inputWrapper} ${(0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).radioWrapper}`,
                                children: $eec8da47e2b891d2$var$VARIANT_OPTIONS.map((opt)=>/*#__PURE__*/ (0, $ciORb$jsxs)("label", {
                                        htmlFor: `variant-${opt}`,
                                        children: [
                                            /*#__PURE__*/ (0, $ciORb$jsx)("input", {
                                                id: `variant-${opt}`,
                                                type: "radio",
                                                name: "variant",
                                                value: opt,
                                                checked: variant === opt,
                                                onChange: ()=>setVariant(opt)
                                            }),
                                            opt
                                        ]
                                    }, opt))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ciORb$jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).row,
                        children: [
                            /*#__PURE__*/ (0, $ciORb$jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).label
                            }),
                            /*#__PURE__*/ (0, $ciORb$jsx)("div", {
                                className: `${(0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).inputWrapper} ${(0, (/*@__PURE__*/$parcel$interopDefault($25f66500f9c8e9b1$exports))).radioWrapper}`,
                                children: /*#__PURE__*/ (0, $ciORb$jsx)((0, $b818371aef26471e$export$2e2bcd8739ae039), {
                                    children: "Pop Toast!"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var $eec8da47e2b891d2$export$2e2bcd8739ae039 = $eec8da47e2b891d2$var$ToastPlayground;






export {$d987c2b1c430c496$export$2e2bcd8739ae039 as ToastProvider, $eec8da47e2b891d2$export$2e2bcd8739ae039 as ToastPlayground};
//# sourceMappingURL=index.js.map
