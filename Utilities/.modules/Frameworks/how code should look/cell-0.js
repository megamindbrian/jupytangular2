$$.interpret = (statement) => {
    if (statement.indexOf('attachments') > -1) {
        console.log(statement);
    }
};
$$.interpret('attachments from michelle@thesosmethod.com last 7 days');
$$.interpret('save attachments to sosmethod assets');
$$.interpret('save sosmethod.org #kinder img to sosmethod assets');
$$.interpret('save sosmethod.org .w-gallery img to sosmethod assets');
