
// This style sheet defines a foundation of about reorderable element style properties.
const style = new CSSStyleSheet();

// About style of reorderable-list.
style.insertRule(`
    reorderable-list {
        display: flex;
        flex-direction: column;
    }
`);

// About style of reorderable-grid.
style.insertRule(`
    reorderable-grid {}
`);

document.adoptedStyleSheets = [style];