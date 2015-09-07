var blessed = require('blessed');

var screen = blessed.screen();

var list = blessed.list({
    parent: screen,
    width: '95%',
    height: '95%',
    top: 'center',
    left: 'center',
    align: 'left',
    fg: 'lightgreen',
    border: {
        type: 'line'
    },
    selectedBg: 'red',

    // Allow mouse support
    mouse: true,

    // Allow key support (arrow keys + enter)
    keys: true,

    // Use vi built-in keys
    vi: true
});

list.setItems([
    'Canberra',
    'Goldstone',
    'Madrid'
]);

list.prepend(new blessed.Text({
    left: 2,
    content: ' Locations '
}));

// Allow scrolling with the mousewheel (manually).
// list.on('wheeldown', function() {
//   list.down();
// });
//
// list.on('wheelup', function() {
//   list.up();
// });

// Select the first item.
//list.select(0);

screen.key('q', function(ch, key) {
    return process.exit(0);
});

screen.render();
