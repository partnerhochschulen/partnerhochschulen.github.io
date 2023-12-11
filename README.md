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

### Making a Progressive Web App
- this means that the app can be downloaded from the browser
- to configure a progressive web app or to see if the criteria is met go to website->inspect->lighthouse-> choose category "Progressive Web App" and run the "Analyze the page load"
- Learn more here: https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/?utm_source=lighthouse&utm_medium=devtools

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Get started and deploy project

1. Clone the repo
2. run "npm install" to install all the node modules because they are not being kept in github
3. run "npm run build" to install the "build" folder that contains the logic for production building
4. run "npm run deploy" to deploy any new changes to production version or "npm start" to start the local server of the app
5. if deployed, in github go to repo -> actions -> you can see if the build was succesfull when the last job is green. Clicking on it will give you more details

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Testing
1. npm i cypress if not installed already
2. Run npm run cypress:open
3. Choose what to test ( e2e or component)
4. Create new blank spec in the cypress app
5. go to VS Code or you editor and go to the file that you just created in cypress/e2e/yourFile.spec.js for e2e testing
6. Write your tests
7. with each saving the test will be ran and you can see them in the cypress ap when clicking on the spec file where yur tests are

# Über das Spiel
## Funktionalitäten
### Spiel spielen
Das Spiel besteht aus mehreren Runden, deren Anzahl in der const.js Datei konfigurierbar ist. Ist eine Runde gespiel (= eine Schätzung ist abgegeben worden) besteht die Möglichkeit zu dieser Runde zurückzukehren und das Ergebnis erneut anzeigen zu lassen. Eine Fortschritssanzeige zeigt die Zahl der gespielten/ zu spielenden Runde.\
Ist eine Schätzung nicht abgegeben ist es nicht möglich zur nächsten Runde zu navigieren. Eine Schätzung abzugeben is nur dann möglich, wenn ein Schätzungsmarker auf der Karten gesetzt wurde.
#### Bewertung der Schätzung
Als Bewertung der Schätzung gilt das Anzeigen des richtigen Standortes der Partnerhochschule und die Distanz zwischen des richtigen Standortes (rot) und der Schätzung (blau). Außerdem wird die Punktezahl erhöht je nach Distanz zum richtigen Standort oder sie bleibt gleich, falls die Distanz zwischen Schätzung und Antwort viel zu groß ist.\
Weitere Informationen zur Antwort sind durch das Klicken auf dem Antwortmarker (rot) verfügbar.

### Partnerhochschulen anzeigen lassen
Es ist möglich alle Partnerhochschulen, deren Standorte, Namen und Verfügbarkeit anzeigen zu lassen. Durch das Klick von dem Knopf "Partnerhochschulen anzeigen" wird eine Karte mit allen Partnerhochschulen der TH Köln angezeigt. Durch das Klicken auf einen Marker werden mehrere Informationen zu der Partnerhochschule und Sehenswürdigkeiten in der Stadt, in der sich die Partnerhochschule befindet, gezeigt. Die Bildergalerie ermöglicht eine Vollbild-Anzeige und ein SlideShow.

## Texte
Die angezeigten Texte werden in der texts.js Datei verwaltet und als HTML gerendert, um eine schnellere und leitere Benutzung zu ermöglichen. 
Um einen neuen Text hinzuzufügen wird eine neue Konstante erstellt. Die Konstante ist ein Array aus strings: Position 1: Titel, Position 2: Content. Um die Nutzung der bereits gerenderten Texte nutzt man: </br>

<b>dangerouslySetInnerHTML</b>

# Konfig Dateien
## texts.js
Hier kann man die Texte zentral verwalten.
Die Texte sind als Konstante definiert und können ein Array aus <b>Titeltext</b> in Position 1 und <b>Inhaltstext</b> an Position 2 sein oder einfache Strings. </br>
Die Texte sind nach Komponente unterteilt.

## locations.js
Hier sind die Schulen mit Koordinaten und Bildern.
Eine Schule hat Attribute und ein Array mit Bildern. Die Bilder beinhalten 4 props: <b>original</b> (Pfad zum Bild), <b>thumbnail</b> (Pfad zum Bild um ein kleines Bild als Preview zu generieren), <b>originalTitle</b> (Quelle des Bildes, wird als Tooltip angezeigt), <b>description</b> (Name der Sehenswürdigkeit).
</br>
<b>1 Bild = 1 Sehenswürdigkeit </b> \
Die Attribute jedes Partnerhochschulenobjekts stammen aus der Excel Datei, die durch Prof. Irma Lindt zur Verfügung gestellt wurde. Ein weteres Attribut <b>"info"</b> soll die Möglichkeit stellen, über ein PopUp auf der Karte Informationen zur Partnerhochschule anzzuzeigen.

## const.js
Hier werden:
- die Anzahl der Runden
- die map Style
- Anzeige der zusätzlichen Info frei- oder ausschalten
bestimmt.
