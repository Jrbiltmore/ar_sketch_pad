
import React, { useState, useEffect, useRef } from 'react';
import { createFile, saveFile, deleteFile, downloadFile } from '../services/ideService';
import * as monaco from 'monaco-editor';

const IDEInterface = () => {
    const [fileName, setFileName] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [prefixedFileName, setPrefixedFileName] = useState('');
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = monaco.editor.create(editorRef.current, {
                value: fileContent,
                language: 'javascript',
                theme: 'vs-dark',
            });

            editor.onDidChangeModelContent(() => {
                setFileContent(editor.getValue());
            });

            return () => editor.dispose();
        }
    }, []);

    const handleCreateFile = async () => {
        const result = await createFile(fileName, fileContent);
        setPrefixedFileName(result.prefixedFileName);
        alert('File created successfully');
    };

    const handleSaveFile = async () => {
        await saveFile(prefixedFileName, fileContent);
        alert('File saved successfully');
    };

    const handleDeleteFile = async () => {
        await deleteFile(prefixedFileName);
        setFileName('');
        setFileContent('');
        setPrefixedFileName('');
        alert('File deleted successfully');
    };

    const handleDownloadFile = async () => {
        await downloadFile(prefixedFileName);
    };

    return (
        <div>
            <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="File Name"
            />
            <div ref={editorRef} style={{ height: '400px', width: '100%' }}></div>
            <button id="create-file-button" onClick={handleCreateFile}>Create File</button>
            <button id="save-file-button" onClick={handleSaveFile} disabled={!prefixedFileName}>Save File</button>
            <button id="delete-file-button" onClick={handleDeleteFile} disabled={!prefixedFileName}>Delete File</button>
            <button id="download-file-button" onClick={handleDownloadFile} disabled={!prefixedFileName}>Download File</button>
        </div>
    );
};

export default IDEInterface;
