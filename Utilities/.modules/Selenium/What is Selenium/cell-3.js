var urlEncode = (obj) => {
    return Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
}

var vncIframe = (options = {
    password: 'secret',
    host: 'localhost',
    port: 6080,
    autoconnect: true,
    resize: 'downscale',
    view_only: true,
    reconnect: true
}) => `
<div style="display:block; width:100%; padding-bottom:70%;position:relative;">
<iframe id="vnc"
style="position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;border:0;" 
src="//local:6080/vnc.html?${urlEncode(options)}"></iframe></div>
`;
module.exports = vncIframe;
vncIframe;
