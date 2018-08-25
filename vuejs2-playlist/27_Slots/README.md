
npm install -g vue-cli
vue init webpack-simple 27_Slots
cd 27_Slots
npm install
npm run dev

``` bash
You will likely see some output in the terminal such as

> vue-cli@1.0.0 dev C:\localdev\+27_Slots
> cross-env NODE_ENV=development webpack-dev-server --open --hot

Project is running at http://localhost:8080/
webpack output is served from /dist/
404s will fallback to /index.html
If this all checks out, a new browser window should launch automatically and load up http://localhost:8080/ with this output.
```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
