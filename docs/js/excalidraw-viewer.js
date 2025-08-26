// Excalidraw Viewer Module
// Loads and displays Excalidraw diagrams in read-only mode

window.initExcalidrawViewers = async function() {
    // Import React, ReactDOM, and Excalidraw
    const React = window.React;
    const ReactDOM = window.ReactDOM;
    
    // Dynamic import of Excalidraw after React is loaded
    const ExcalidrawLib = await import('https://esm.sh/@excalidraw/excalidraw@0.18.0/dist/dev/index.js?external=react,react-dom');
    
    // Find all Excalidraw containers
    const containers = document.querySelectorAll('.excalidraw-container');
    
    for (const container of containers) {
        const fileUrl = container.dataset.excalidrawFile;
        if (!fileUrl) continue;
        
        try {
            // Fetch the Excalidraw file
            const response = await fetch(fileUrl);
            const sceneData = await response.json();
            
            // Create React root
            const root = ReactDOM.createRoot(container);
            
            // Add zoom level to the scene data's appState
            const initialData = {
                ...sceneData,
                appState: {
                    ...sceneData.appState,
                    zoom: {
                        value: 0.6
                    },
                    scrollX: 1200,
                    scrollY: 600
                }
            };
            
            // Render Excalidraw component in view-only mode
            root.render(
                React.createElement(ExcalidrawLib.Excalidraw, {
                    initialData: initialData,
                    viewModeEnabled: true,
                    zenModeEnabled: false,
                    gridModeEnabled: false,
                    theme: "dark",
                    langCode: "en-US",
                    renderTopRightUI: () => null,
                    UIOptions: {
                        canvasActions: {
                            loadScene: false,
                            export: false,
                            saveToActiveFile: false,
                            toggleTheme: false,
                            changeViewBackgroundColor: false
                        }
                    }
                })
            );
            
            // Add loaded class for styling
            container.classList.add('excalidraw-loaded');
            
        } catch (error) {
            console.error('Failed to load Excalidraw file:', fileUrl, error);
            
            // Show fallback
            container.innerHTML = `
                <div class="diagram-placeholder">
                    <p>📊 Diagram Loading Failed</p>
                    <small>Unable to load ${fileUrl}</small>
                </div>
            `;
        }
    }
};

// Initialize when DOM and modules are ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait for React to be available
        setTimeout(window.initExcalidrawViewers, 100);
    });
} else {
    // DOM already loaded
    setTimeout(window.initExcalidrawViewers, 100);
}