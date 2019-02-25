# @dx-libs/timeout <sub><sup><sub><sup>v0.1.0</sup></sub></sup></sub>
~~~
Libreria de Timeout en @dx-libs/timeout
~~~

## Scripts
```powershell
npm run eslint
```
```powershell
npm run test-watch
```
```powershell
npm run test
```
```powershell
npm run sonar
```

## Instalación

### Como libreria
```powershell
npm install --save @dx-libs/timeout
```

## Modo de uso

```javascript
const timeout = require("@dx-libs/timeout");

timeout(() => { console.log('TIMEOUT !'); return 42; }, 1000)
    .then((value) => {
        console.log('CALLBACK!', value);
    });

const t = timeout(() => { console.log('NEVER !!'); }, 2000)
    .then((value) => {
        console.log('CALLBACK CANCELED!', value);
    });

t.cancel();
```
---
