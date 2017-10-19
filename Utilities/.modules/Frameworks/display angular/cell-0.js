var getScriptsAndStyles = (content, additional = '0.*.js') => {
    var output = content.match(/<style.*?\/style>/ig) || '';
    var scripts = ``;

    var m, re = (/<link.*?>/ig);
    while (m = re.exec(content)) {
        var src;
        if ((src = (/href="(.*?)"/ig).exec(m[0])) != null && src[1].indexOf('google') == -1) {
            scripts += '<style>' + fs.readFileSync(path.join(project, 'public', src[1])) + '</style>';
        } else {
            scripts += m[0];
        }
    }

    var m, re = (/<script.*?\/script>/ig);
    while (m = re.exec(content)) {
        var src;
        if ((src = (/src="(.*?)"/ig).exec(m[0])) != null) {
            scripts += '<script defer>'
                + fs.readFileSync(path.join(project, 'public', src[1]))
                + '</script>';
        } else {
            scripts += m[0];
        }
    }

    return output + scripts;
};
module.exports = getScriptsAndStyles;
getScriptsAndStyles;
