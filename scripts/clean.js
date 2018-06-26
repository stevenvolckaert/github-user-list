const del = require('del');
const deleteTargets = [
    '.cache',
    'dist',
    'lib',
];

del(deleteTargets)
    .then(
        paths => {
            const message = paths.length > 0
                ? `Deleted ${paths.length} path(s):\n` + paths.join('\n')
                : 'Found no matching paths; no files have been deleted.';

            console.log(message);
        }
    );
