# Personal Site 17

Uses [https://github.com/isTravis/react-static-generator-17][react-static-generator-17].

Deployed to [https://www.travisrich.com](https://www.travisrich.com)

## To Install

```
npm install
```

## To Run Dev Mode

```
npm start
```

## To Build and Run Production 

```
npm run prod
```

# Static Files

Static files such as images, robots.txt, manifest.json, etc are stored in the /static folder. The contents of this folder are copied to the /dist folder during the production build. The contents, not the folder itself, are copied, so that robots.txt, etc will be at the top-level of the deployed application.
 
# Config

## Routes
Be sure to set the routes that you want generated into static files by editing `webpack/staticPaths`.