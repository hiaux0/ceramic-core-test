# Ceramic Core Test

Followed the tutorial at https://developers.ceramic.network/build/javascript/core/

## Install
```
# $ node -v
# v14.18.2
# $ npm -v
# 6.14.15
# ^ Installed through nvm on Windows 10

npm i
```

## Run
```
node ceramic-core.js
```

### Error
```
$ node ceramic-core.js
C:\Users\hdn local\Desktop\dev\ceramic\ceramic-core-test\node_modules\ipfs-core\node_modules\timeout-abort-controller\index.js:8
class TimeoutController extends AbortController {
                                ^

TypeError: Class extends value undefined is not a constructor or null
    at Object.<anonymous> (C:\Users\hdn local\Desktop\dev\ceramic\ceramic-core-test\node_modules\ipfs-core\node_modules\timeout-abort-controller\index.js:8:33)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at ModuleWrap.<anonymous> (internal/modules/esm/translators.js:199:29)
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
```
