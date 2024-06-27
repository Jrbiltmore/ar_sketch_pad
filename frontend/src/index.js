
import Mousetrap from 'mousetrap';
import * as monaco from 'monaco-editor';

document.getElementById('font-select').addEventListener('change', function() {
    const selectedFont = this.value;
    document.documentElement.style.setProperty('--main-font', `'${selectedFont}', cursive`);
});

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    document.documentElement.lang = selectedLanguage;
});

// Define shortcut keys
Mousetrap.bind('ctrl+n', function() {
    document.getElementById('create-file-button').click();
});

Mousetrap.bind('ctrl+s', function() {
    document.getElementById('save-file-button').click();
});

Mousetrap.bind('ctrl+d', function() {
    document.getElementById('delete-file-button').click();
});

Mousetrap.bind('ctrl+l', function() {
    document.getElementById('download-file-button').click();
});

const editorRef = document.getElementById('ide-container');
if (editorRef) {
    const editor = monaco.editor.create(editorRef, {
        value: '',
        language: 'javascript',
        theme: 'vs-dark',
    });

    editor.onDidChangeModelContent(() => {
        const content = editor.getValue();
        document.getElementById('file-content').value = content;
    });
}
