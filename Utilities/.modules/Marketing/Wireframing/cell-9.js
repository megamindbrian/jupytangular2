const fs = require('fs');
const js1 = fs.readFileSync('./sosmethod/dist/www/polyfills.59868df8094f160adda5.js');
const js2 = fs.readFileSync('./sosmethod/dist/www/vendor.59868df8094f160adda5.js');
const js3 = fs.readFileSync('./sosmethod/dist/www/app.59868df8094f160adda5.js');

$$html$$ = '<bc-app style="position:relative;display:block;min-height:600px;min-width:600px;">hello!</bc-app>'
    + '<script type="application/javascript">eval(atob("' + (new Buffer(js1)).toString('base64') + '"));</script>'
    + '<script type="application/javascript">eval(atob("' + (new Buffer(js2)).toString('base64') + '"));</script>'
    + '<script type="application/javascript">eval(atob("' + (new Buffer(js3)).toString('base64') + '"));</script>';
