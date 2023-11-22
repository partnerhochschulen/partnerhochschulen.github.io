# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Über das Spiel
## Texte
Die angezeigten Texte werden in der texts.js Datei verwaltet und als HTML gerendert, um eine schnellere und leitere Benutzung zu ermöglichen. 
Um einen neuen Text hinzuzufügen wird eine neue Konstante erstellt. Die Konstante ist ein Array aus strings: Position 1: Titel, Position 2: Content. Um die Nutzung der bereits gerenderten Texte nutzt man: </br>

<b>dangerouslySetInnerHTML</b>

# Konfig Dateien
## texts.js
Hier kann man die Texte zentral verwalten.
Jeder Text wird als Konstante definiert und ist ein Array aus <b>Titeltext</b> in Position 1 und <b>Inhaltstext</b> an Position 2.
## locations.js
Hier sind die Schulen mit Koordinaten und Bildern.
Eine Schule hat ein Array mit Bildern. Die Bilder beinhalten 4 props: <b>original</b> (Pfad zum Bild), <b>thumbnail</b> (Pfad zum Bild um ein kleines Bild als Preview zu generieren), <b>originalTitle</b> (Quelle des Bildes, wird als Tooltip angezeigt), <b>description</b> (Name der Sehenswürdigkeit).
</br>
<b>1 Bild = 1 Sehenswürdigkeit </b>
## const.js
Hier werden:
- die Anzahl der Runden
- die map Style
bestimmt.
