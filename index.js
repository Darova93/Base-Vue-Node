const findInFiles = require('find-in-files');

async function search() {
    findInFiles.findSync(
        'cporderactions',
        // /l\(["']{1}(.*)["']\)/i, 
        '/Users/darova/Documents/projects/cp-shop/modules/'
    )
    .then(r => console.log(r));
}
search();