var express = require('express');

var route = () => {
    const router = express.Router();

    router.get('/sessions', () => {
        throw new Error('not implemented!');
    }); //,"GetSessions",ExecuteGetSessionCapabilities)),
    router.get('/session/:sessionId', () => {
        throw new Error('not implemented!');
    }); //,"GetSessionCapabilities",ExecuteGetSessionCapabilities,
    router.get('/session/:sessionId/window', () => {
        throw new Error('not implemented!');
    }); //,"GetWindow",ExecuteGetCurrentWindowHandle,
    router.get('/session/:sessionId/window_handle', () => {
        throw new Error('not implemented!');
    }); //,"GetWindow",ExecuteGetCurrentWindowHandle,
    router.get('/session/:sessionId/window/handles', () => {
        throw new Error('not implemented!');
    }); //,"GetWindows",ExecuteGetWindowHandles,
    router.get('/session/:sessionId/window_handles', () => {
        throw new Error('not implemented!');
    }); //,"GetWindows",ExecuteGetWindowHandles,
    router.post('/session/:sessionId/chromium/launch_app', () => {
        throw new Error('not implemented!');
    }); //,"LaunchApp",ExecuteLaunchApp,
    router.get('/session/:sessionId/alert', () => {
        throw new Error('not implemented!');
    }); //,"IsAlertOpen",alert.ExecuteGetAlert),
    router.post('/session/:sessionId/alert/dismiss', () => {
        throw new Error('not implemented!');
    }); //,"DismissAlert",alert.ExecuteDismissAlert),
    router.post('/session/:sessionId/dismiss_alert', () => {
        throw new Error('not implemented!');
    }); //,"DismissAlert",alert.ExecuteDismissAlert),
    router.post('/session/:sessionId/alert/accept', () => {
        throw new Error('not implemented!');
    }); //,"AcceptAlert",alert.ExecuteAcceptAlert),
    router.post('/session/:sessionId/accept_alert', () => {
        throw new Error('not implemented!');
    }); //,"AcceptAlert",alert.ExecuteAcceptAlert),
    router.get('/session/:sessionId/alert/text', () => {
        throw new Error('not implemented!');
    }); //,"GetAlertMessage",alert.ExecuteGetAlertText),
    router.get('/session/:sessionId/alert_text', () => {
        throw new Error('not implemented!');
    }); //,"GetAlertMessage",alert.ExecuteGetAlertText),
    router.post('/session/:sessionId/alert/text', () => {
        throw new Error('not implemented!');
    }); //,"SetAlertPrompt",alert.ExecuteSetAlertText),
    router.post('/session/:sessionId/alert_text', () => {
        throw new Error('not implemented!');
    }); //,"SetAlertPrompt",alert.ExecuteSetAlertText),
    router.post('/session/:sessionId/forward', () => {
        throw new Error('not implemented!');
    }); //,"GoForward",ExecuteGoForward,
    router.post('/session/:sessionId/back', () => {
        throw new Error('not implemented!');
    }); //,"GoBack",ExecuteGoBack,
    router.post('/session/:sessionId/refresh', () => {
        throw new Error('not implemented!');
    }); //,"Refresh",ExecuteRefresh,
    router.post('/session/:sessionId/execute', () => {
        throw new Error('not implemented!');
    }); //,"ExecuteScript",ExecuteExecuteScript,
    router.post('/session/:sessionId/execute_async', () => {
        throw new Error('not implemented!');
    }); //,"ExecuteAsyncScript",ExecuteExecuteAsyncScript,
    router.post('/session/:sessionId/execute/sync', () => {
        throw new Error('not implemented!');
    }); //,"ExecuteScript",ExecuteExecuteScript,
    router.post('/session/:sessionId/execute/async', () => {
        throw new Error('not implemented!');
    }); //,"ExecuteAsyncScript",ExecuteExecuteAsyncScript,
    router.get('/session/:sessionId/url', () => {
        throw new Error('not implemented!');
    }); //,"GetUrl",ExecuteGetCurrentUrl,
    router.get('/session/:sessionId/title', () => {
        throw new Error('not implemented!');
    }); //,"GetTitle",ExecuteGetTitle,
    router.get('/session/:sessionId/source', () => {
        throw new Error('not implemented!');
    }); //,"GetSource",ExecuteGetPageSource,
    router.get('/session/:sessionId/screenshot', () => {
        throw new Error('not implemented!');
    }); //,"Screenshot",ExecuteScreenshot,
    router.get('/session/:sessionId/chromium/heap_snapshot', () => {
        throw new Error('not implemented!');
    }); //,"HeapSnapshot",ExecuteTakeHeapSnapshot,
    router.post('/session/:sessionId/visible', () => {
        throw new Error('not implemented!');
    }); //,"Visible",ExecuteUnimplementedCommand,
    router.get('/session/:sessionId/visible', () => {
        throw new Error('not implemented!');
    }); //,"Visible",ExecuteUnimplementedCommand,
    router.get('/session/:sessionId/element/active', () => {
        throw new Error('not implemented!');
    }); //,"GetActiveElement",ExecuteGetActiveElement,
    router.post('/session/:sessionId/element/active', () => {
        throw new Error('not implemented!');
    }); //,"GetActiveElement",ExecuteGetActiveElement,
    router.post('/session/:sessionId/element/:id/element', () => {
        throw new Error('not implemented!');
    }); //,"FindChildElement",ExecuteFindChildElement, 50,
    router.post('/session/:sessionId/element/:id/elements', () => {
        throw new Error('not implemented!');
    }); //,"FindChildElements",ExecuteFindChildElements, 50,
    router.post('/session/:sessionId/element/:id/click', () => {
        throw new Error('not implemented!');
    }); //,"ClickElement",ExecuteClickElement,
    router.post('/session/:sessionId/element/:id/clear', () => {
        throw new Error('not implemented!');
    }); //,"ClearElement",ExecuteClearElement,
    router.post('/session/:sessionId/element/:id/submit', () => {
        throw new Error('not implemented!');
    }); //,"SubmitElement",ExecuteSubmitElement,
    router.get('/session/:sessionId/element/:id/text', () => {
        throw new Error('not implemented!');
    }); //,"GetElementText",ExecuteGetElementText,
    router.post('/session/:sessionId/element/:id/value', () => {
        throw new Error('not implemented!');
    }); //,"TypeElement",ExecuteSendKeysToElement,
    router.post('/session/:sessionId/file', () => {
        throw new Error('not implemented!');
    }); //,"UploadFile",ExecuteUploadFile,
    router.get('/session/:sessionId/element/:id/value', () => {
        throw new Error('not implemented!');
    }); //,"GetElementValue",ExecuteGetElementValue,
    router.get('/session/:sessionId/element/:id/name', () => {
        throw new Error('not implemented!');
    }); //,"GetElementTagName",ExecuteGetElementTagName,
    router.get('/session/:sessionId/element/:id/selected', () => {
        throw new Error('not implemented!');
    }); //,"IsElementSelected",ExecuteIsElementSelected,
    router.get('/session/:sessionId/element/:id/enabled', () => {
        throw new Error('not implemented!');
    }); //,"IsElementEnabled",ExecuteIsElementEnabled,
    router.get('/session/:sessionId/element/:id/displayed', () => {
        throw new Error('not implemented!');
    }); //,"IsElementDisplayed",ExecuteIsElementDisplayed,
    router.post('/session/:sessionId/element/:id/hover', () => {
        throw new Error('not implemented!');
    }); //,"HoverElement",ExecuteHoverOverElement,
    router.get('/session/:sessionId/element/:id/location', () => {
        throw new Error('not implemented!');
    }); //,"GetElementLocation",ExecuteGetElementLocation,
    router.get('/session/:sessionId/element/:id/location_in_view', () => {
        throw new Error('not implemented!');
    }); //,"GetElementLocationInView",ExecuteGetElementLocationOnceScrolledIntoView,
    router.get('/session/:sessionId/element/:id/size', () => {
        throw new Error('not implemented!');
    }); //,"GetElementSize",ExecuteGetElementSize,
    router.get('/session/:sessionId/element/:id/attribute/:name', () => {
        throw new Error('not implemented!');
    }); //,"GetElementAttribute",ExecuteGetElementAttribute,
    router.get('/session/:sessionId/element/:id/equals/:other', () => {
        throw new Error('not implemented!');
    }); //,"IsElementEqual",ExecuteElementEquals,
    router.get('/session/:sessionId/cookie', () => {
        throw new Error('not implemented!');
    }); //,"GetCookies",ExecuteGetCookies,
    router.get('/session/:sessionId/cookie/:name', () => {
        throw new Error('not implemented!');
    }); //,"GetNamedCookie",ExecuteGetNamedCookie,
    router.post('/session/:sessionId/cookie', () => {
        throw new Error('not implemented!');
    }); //,"AddCookie",ExecuteAddCookie,
    router.delete('/session/:sessionId/cookie', () => {
        throw new Error('not implemented!');
    }); //,"DeleteAllCookies",ExecuteDeleteAllCookies,
    router.delete('/session/:sessionId/cookie/:name', () => {
        throw new Error('not implemented!');
    }); //,"DeleteCookie",ExecuteDeleteCookie,
    router.post('/session/:sessionId/frame', () => {
        throw new Error('not implemented!');
    }); //,"SwitchToFrame",ExecuteSwitchToFrame,
    router.post('/session/:sessionId/frame/parent', () => {
        throw new Error('not implemented!');
    }); //,"SwitchToParentFrame",ExecuteSwitchToParentFrame,
    router.post('/session/:sessionId/window', () => {
        throw new Error('not implemented!');
    }); //,"SwitchToWindow",ExecuteSwitchToWindow,
    router.get('/session/:sessionId/window/:windowHandle/size', () => {
        throw new Error('not implemented!');
    }); //,"GetWindowSize",ExecuteGetWindowSize,
    router.get('/session/:sessionId/window/:windowHandle/position', () => {
        throw new Error('not implemented!');
    }); //,"GetWindowPosition",ExecuteGetWindowPosition,
    router.post('/session/:sessionId/window/:windowHandle/size', () => {
        throw new Error('not implemented!');
    }); //,"SetWindowSize",ExecuteSetWindowSize,
    router.post('/session/:sessionId/window/:windowHandle/position', () => {
        throw new Error('not implemented!');
    }); //,"SetWindowPosition",ExecuteSetWindowPosition,
    router.post('/session/:sessionId/window/:windowHandle/maximize', () => {
        throw new Error('not implemented!');
    }); //,"MaximizeWindow",ExecuteMaximizeWindow,
    router.post('/session/:sessionId/window/fullscreen', () => {
        throw new Error('not implemented!');
    }); //,"FullscreenWindow",ExecuteFullScreenWindow,
    router.delete('/session/:sessionId/window', () => {
        throw new Error('not implemented!');
    }); //,"CloseWindow",ExecuteClose,
    router.post('/session/:sessionId/element/:id/drag', () => {
        throw new Error('not implemented!');
    }); //,"Drag",ExecuteUnimplementedCommand,
    router.get('/session/:sessionId/element/:id/css/:propertyName', () => {
        throw new Error('not implemented!');
    }); //,"GetElementCSSProperty",ExecuteGetElementValueOfCSSProperty,
    router.post('/session/:sessionId/timeouts/implicit_wait', () => {
        throw new Error('not implemented!');
    }); //,"SetImplicitWait",ExecuteImplicitlyWait,
    router.post('/session/:sessionId/timeouts/async_script', () => {
        throw new Error('not implemented!');
    }); //,"SetScriptTimeout",ExecuteSetScriptTimeout,
    router.post('/session/:sessionId/timeouts', () => {
        throw new Error('not implemented!');
    }); //,"SetTimeout",ExecuteSetTimeout,
    router.get('/session/:sessionId/timeouts', () => {
        throw new Error('not implemented!');
    }); //,"GetTimeouts",ExecuteGetTimeouts,
    router.post('/session/:sessionId/execute_sql', () => {
        throw new Error('not implemented!');
    }); //,"ExecuteSql",ExecuteUnimplementedCommand,
    router.get('/session/:sessionId/location', () => {
        throw new Error('not implemented!');
    }); //,"GetGeolocation",ExecuteGetLocation,
    router.post('/session/:sessionId/location', () => {
        throw new Error('not implemented!');
    }); //,"SetGeolocation",ExecuteSetLocation,
    router.post('/session/:sessionId/network_connection', () => {
        throw new Error('not implemented!');
    }); //,"SetNetworkConnection",ExecuteSetNetworkConnection,
    router.get('/session/:sessionId/network_connection', () => {
        throw new Error('not implemented!');
    }); //,"GetNetworkConnection",ExecuteGetNetworkConnection,
    router.get('/session/:sessionId/chromium/network_conditions', () => {
        throw new Error('not implemented!');
    }); //,"GetNetworkConditions",ExecuteGetNetworkConditions,
    router.post('/session/:sessionId/chromium/network_conditions', () => {
        throw new Error('not implemented!');
    }); //,"SetNetworkConditions",ExecuteSetNetworkConditions,
    router.delete('/session/:sessionId/chromium/network_conditions', () => {
        throw new Error('not implemented!');
    }); //,"DeleteNetworkConditions",ExecuteDeleteNetworkConditions,
    router.get('/session/:sessionId/application_cache/status', () => {
        throw new Error('not implemented!');
    }); // ExecuteGetStatus
    router.get('/session/:sessionId/browser_connection', () => {
        throw new Error('not implemented!');
    }); //,"GetBrowserConnection",ExecuteUnimplementedCommand,
    router.post('/session/:sessionId/browser_connection', () => {
        throw new Error('not implemented!');
    }); //,"SetBrowserConnection",ExecuteUnimplementedCommand,
    router.get('/session/:sessionId/local_storage/key/:key', () => {
        throw new Error('not implemented!');
    }); //,"GetLocalStorageItem",ExecuteGetStorageItem, kLocalStorage,
    router.delete('/session/:sessionId/local_storage/key/:key', () => {
        throw new Error('not implemented!');
    }); //,"RemoveLocalStorageItem",ExecuteRemoveStorageItem, kLocalStorage,
    router.get('/session/:sessionId/local_storage', () => {
        throw new Error('not implemented!');
    }); //,"GetLocalStorageKeys",ExecuteGetStorageKeys, kLocalStorage,
    router.post('/session/:sessionId/local_storage', () => {
        throw new Error('not implemented!');
    }); //,"SetLocalStorageKeys",ExecuteSetStorageItem, kLocalStorage,
    router.delete('/session/:sessionId/local_storage', () => {
        throw new Error('not implemented!');
    }); //,"ClearLocalStorage",ExecuteClearStorage, kLocalStorage,
    router.get('/session/:sessionId/local_storage/size', () => {
        throw new Error('not implemented!');
    }); //,"GetLocalStorageSize",ExecuteGetStorageSize, kLocalStorage,
    router.get('/session/:sessionId/session_storage/key/:key', () => {
        throw new Error('not implemented!');
    }); //,"GetSessionStorageItem",ExecuteGetStorageItem, kSessionStorage,
    router.delete('/session/:sessionId/session_storage/key/:key', () => {
        throw new Error('not implemented!');
    }); //,"RemoveSessionStorageItem",ExecuteRemoveStorageItem,kSessionStorage,
    router.get('/session/:sessionId/session_storage', () => {
        throw new Error('not implemented!');
    }); //,"GetSessionStorageKeys",ExecuteGetStorageKeys, kSessionStorage,
    router.post('/session/:sessionId/session_storage', () => {
        throw new Error('not implemented!');
    }); //,"SetSessionStorageItem",ExecuteSetStorageItem, kSessionStorage,
    router.delete('/session/:sessionId/session_storage', () => {
        throw new Error('not implemented!');
    }); //,"ClearSessionStorage",ExecuteClearStorage, kSessionStorage,
    router.get('/session/:sessionId/session_storage/size', () => {
        throw new Error('not implemented!');
    }); //,"GetSessionStorageSize",ExecuteGetStorageSize, kSessionStorage,
    router.get('/session/:sessionId/orientation', () => {
        throw new Error('not implemented!');
    }); //,"GetScreenOrientation",ExecuteGetScreenOrientation,
    router.post('/session/:sessionId/orientation', () => {
        throw new Error('not implemented!');
    }); //,"SetScreenOrientation",ExecuteSetScreenOrientation,
    router.delete('/session/:sessionId/orientation', () => {
        throw new Error('not implemented!');
    }); //,"DeleteScreenOrientation",ExecuteDeleteScreenOrientation,
    router.post('/session/:sessionId/click', () => {
        throw new Error('not implemented!');
    }); //,"Click",ExecuteMouseClick,
    router.post('/session/:sessionId/doubleclick', () => {
        throw new Error('not implemented!');
    }); //,"DoubleClick",ExecuteMouseDoubleClick,
    router.post('/session/:sessionId/buttondown', () => {
        throw new Error('not implemented!');
    }); //,"MouseDown",ExecuteMouseButtonDown,
    router.post('/session/:sessionId/buttonup', () => {
        throw new Error('not implemented!');
    }); //,"MouseUp",ExecuteMouseButtonUp,
    router.post('/session/:sessionId/moveto', () => {
        throw new Error('not implemented!');
    }); //,"MouseMove",ExecuteMouseMoveTo,
    router.post('/session/:sessionId/keys', () => {
        throw new Error('not implemented!');
    }); //,"Type",ExecuteSendKeysToActiveElement,
    router.get('/session/:sessionId/ime/available_engines', () => {
        throw new Error('not implemented!');
    }); //,"GetAvailableEngines",ExecuteUnimplementedCommand,
    router.get('/session/:sessionId/ime/active_engine', () => {
        throw new Error('not implemented!');
    }); //,"GetActiveEngine",ExecuteUnimplementedCommand,
    router.get('/session/:sessionId/ime/activated', () => {
        throw new Error('not implemented!');
    }); //,"Activated",ExecuteUnimplementedCommand,
    router.post('/session/:sessionId/ime/deactivate', () => {
        throw new Error('not implemented!');
    }); //,"Deactivate",ExecuteUnimplementedCommand,
    router.post('/session/:sessionId/ime/activate', () => {
        throw new Error('not implemented!');
    }); //,"Activate",ExecuteUnimplementedCommand,
    router.post('/session/:sessionId/touch/click', () => {
        throw new Error('not implemented!');
    }); //,"Tap",ExecuteTouchSingleTap,
    router.post('/session/:sessionId/touch/down', () => {
        throw new Error('not implemented!');
    }); //,"TouchDown",ExecuteTouchDown,
    router.post('/session/:sessionId/touch/up', () => {
        throw new Error('not implemented!');
    }); //,"TouchUp",ExecuteTouchUp,
    router.post('/session/:sessionId/touch/move', () => {
        throw new Error('not implemented!');
    }); //,"TouchMove",ExecuteTouchMove,
    router.post('/session/:sessionId/touch/scroll', () => {
        throw new Error('not implemented!');
    }); //,"TouchScroll",ExecuteTouchScroll,
    router.post('/session/:sessionId/touch/doubleclick', () => {
        throw new Error('not implemented!');
    }); //,"TouchDoubleTap",ExecuteTouchDoubleTap,
    router.post('/session/:sessionId/touch/longclick', () => {
        throw new Error('not implemented!');
    }); //,"TouchLongPress",ExecuteTouchLongPress,
    router.post('/session/:sessionId/touch/flick', () => {
        throw new Error('not implemented!');
    }); //,"TouchFlick",ExecuteFlick,
    router.post('/session/:sessionId/log', () => {
        throw new Error('not implemented!');
    }); //,"GetLog",ExecuteGetLog,
    router.get('/session/:sessionId/log/types', () => {
        throw new Error('not implemented!');
    }); //,"GetLogTypes",ExecuteGetAvailableLogTypes,
    router.post('/session/:sessionId/actions', () => {
        throw new Error('not implemented!');
    }); //,"PerformActions",ExecuteUnimplementedCommand,
    router.delete('/session/:sessionId/actions', () => {
        throw new Error('not implemented!');
    }); //,"DeleteActions",ExecuteUnimplementedCommand,
    router.post('/Logs', () => {
        throw new Error('not implemented!');
    }); //,"Logs",ExecuteUnimplementedCommand,
    router.get('/status', () => {
        throw new Error('not implemented!');
    }); //,ExecuteGetStatus)),
    router.get('/shutdown', () => {
        throw new Error('not implemented!');
    }); //,"QuitAll",ExecuteQuit, true)),
    router.post('/shutdown', () => {
        throw new Error('not implemented!');
    }); //,"QuitAll",ExecuteQuit, true)),
    router.get('/session/:sessionId/is_loading', () => {
        throw new Error('not implemented!');
    }); //,"IsLoading",ExecuteIsLoading,
    router.get('/session/:sessionId/autoreport', () => {
        throw new Error('not implemented!');
    }); //,"IsAutoReporting",ExecuteIsAutoReporting,
    router.post('/session/:sessionId/autoreport', () => {
        throw new Error('not implemented!');
    }); //,"SetAutoReporting",ExecuteSetAutoReporting,
    router.post('/session/:sessionId/touch/pinch', () => {
        throw new Error('not implemented!');
    }); //,"TouchPinch",ExecuteTouchPinch,
    router.post('/session/:sessionId/chromium/send_command', () => {
        throw new Error('not implemented!');
    }); //,"SendCommand",ExecuteSendCommand,
    router.post('/session/:sessionId/chromium/send_command_and_get_result', () => {
        throw new Error('not implemented!');
    }); //,"SendCommandAndGetResult",ExecuteSendCommandAndGetResult,

    return router;
}

module.exports = {
    router: route()
};
