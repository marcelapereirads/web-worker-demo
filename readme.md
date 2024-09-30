# Overview

This project demonstrates the difference between processing a large amount of data using a standard JavaScript function and using a Web Worker. It provides two approaches:

1. **Without Web Worker**: The data is processed on the main thread, which may block the UI during large operations.
2. **With Web Worker**: The data is processed in a separate thread, allowing the UI to remain responsive.

## Running the project

Since Web Workers do not allow access to local files directly due to browser security restrictions, you need to run a local web server to test this project. It is recommended to use local-web-server.

> npx local-web-server

Open your web browser and go to http://localhost:8000.

The processed data is shown in the browser console.
