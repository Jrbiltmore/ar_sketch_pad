
# AR Sketch Pad

## Overview
AR Sketch Pad is an augmented reality sketch pad designed for heads-up display UI drafting. This project integrates with various tools like Blender, Vision Pro, Quest II, Unity, Unreal Engine, and Figma. It features a new file format that downgrades itself based on the header data of the detected software interface while maintaining auto-filled fields for each type.

## Features
- Full-screen webpage with toggle between front and back camera
- Plugin-oriented design
- Drag and drop themes with 32 preset themes available
- Customizable asset properties (color, brightness, hue, contours, acuity, geometry)
- No login or user profile required
- Ad-based usage model
- Save files in the new format or any other available formats
- Blink/eye saccade/hand gesture widgets
- Voice-activated controls
- Auto QR code reader
- Mini Brave browser pop-up
- Dynamic display layer optimization
- Middleware and code layer with IDE interface
- Prefix-engaged files to avoid injection and file confusion
- GitHub Actions for CI/CD
- Webhooks for Zapier and IFTTT
- Adobe integration

## File Structure
- `frontend/`
  - `public/`
    - `index.html`
    - `css/`
      - `styles.css`
  - `src/`
    - `index.js`
    - `components/`
      - `IDEInterface.js`
- `backend/`
  - `controllers/`
    - `fileController.js`
    - `widgetController.js`
  - `models/`
    - `fileModel.js`
    - `widgetModel.js`
  - `routes/`
    - `fileRoutes.js`
    - `widgetRoutes.js`
    - `ideRoutes.js`
    - `webhookRoutes.js`
    - `adobeRoutes.js`
    - `advancedActions.js`
  - `services/`
    - `fileService.js`
    - `widgetService.js`
  - `middleware/`
    - `sandboxMiddleware.js`
  - `sandbox/`
  - `app.js`
  - `config.js`
- `.github/`
  - `workflows/`
    - `ci-cd-pipeline.yml`

## Installation and Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/jrbiltmore/ar-sketch-pad.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ar-sketch-pad
    ```
3. Install frontend dependencies:
    ```sh
    cd frontend
    npm install
    ```
4. Install backend dependencies:
    ```sh
    cd ../backend
    npm install
    ```
5. Configure MongoDB URI in `backend/config.js`.

6. Run the development server:
    ```sh
    npm start
    ```

## Usage
- Open the application in a web browser.
- Use the toolbar to select language and font.
- Create, save, delete, and download files using the provided buttons.
- Use voice commands, blink/eye saccade, and hand gestures for interaction.

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
5. Push to the branch:
    ```sh
    git push origin feature-name
    ```
6. Open a pull request.

## License
This project is the property of Jacob Thomas Vespers
