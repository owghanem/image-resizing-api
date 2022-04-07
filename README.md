# Image resizing API

## Description

This is a simple API that reads a photo from local storage and resizes it to your desired resolution.
The server was built with Node js and express. It was built to be scalable. It was made only as concept and it barely scraches the surface of what could be done.

## Functionality

To install all the dependancies:

```javaScript
npm i
```

### Availabe scripts

```javaScript
// to run the server
npm run start

// to compile TypeScript
npm run build

// to run Jamsine for unit testing
npm run test

// to run Jasmine without compiling
npm run jasmine

// Prettier
npm run prettier

// Es lint
npm run lint
```

### Endpoints

#### `/imgapi/resize/?filename=<image_name>&width=<height>&height=<height>`

Method: `get`
Params: `filename`, `height` and `width`

        e.g: http://localhost:3000/imgapi/resize/?filename=sun.jpg&height=300&width=300

##### Availabe images

1. sun
2. moon
3. cat
4. fire
5. pathway

## Notes

I have ran into some compitablty issues when I tried to update to npm 8 but it works just fine with npm 6
