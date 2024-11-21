// Handle Resizing

const editorContainer = document.getElementById('editor-container');
const editor = document.getElementById('editor');
const editorResizer = document.getElementById('editor-resizer');
let editorResizing = false;

editorResizer.addEventListener('mousedown', (e) => {
    editorResizing = true;

    document.body.style.cursor = 'ew-resize';

    const width = editorContainer.getBoundingClientRect().width / window.innerWidth;
    const initial = e.clientX / window.innerWidth;

    function handle(he) {
        if (editorResizing) {
            const delta = initial - he.clientX / window.innerWidth;
            editorContainer.style.width = `${(width + delta) * 100}vw`;
        }
    }

    function terminate() {
        editorResizing = false;
        document.removeEventListener('mouseup', terminate);
        document.removeEventListener('mousemove', handle);

        document.body.style.cursor = 'unset';
    }

    document.addEventListener('mouseup', terminate);
    document.addEventListener('mousemove', handle);
});