# requirejs-riotcompile

> AMD loader for riot.js tags

## Install the plugin and its dependencies using bower
```sh
$ bower install requirejs-riotcompile --save
```

or using npm

```sh
$ npm install requirejs-riotcompile --save
```

## Usage
To use `require-riotcompile` you should set paths for [Riot.js](https://github.com/riot/riot) and [requirejs-text](https://github.com/requirejs/text)
```js
requirejs.config({
    paths : {
        riot : 'path/to/riot+compiler.js',
        text : 'path/to/requirejs-text/text',
        riotcompile: 'path/to/require-riotcompile/require-riotcompile'
    }
});
```

To get compiled tag, require it with `riotcompile!`. As `riotcompile` uses `text` plugin, required file may have any extension(`.html`, `.tag` or anything else).
Tag name will be exported.

```html
<!-- component.html -->
<my-component>
  <div>my component</div>
  <style>
    :scope {
      display: block;
    }
  </style>

  <script>
    this.on('mounted', function() {
      console.log('Component mounted!')
    })
  </script>
</my-component>
```

```js
require('riot', 'riotcompile!./component.html', function(riot, componentName){
  //myComponentName === 'my-component'
  riot.mount(componentName);
});
```

## Build
On build use `stubModules` to stub `text` and `riotcompile` plugins
```js
({
    stubModules: ['text','riotcompile']
})
```
If necessary, you can set `riot` path to version without compiler
```js
({
    paths: {
      riot: 'path/to/riot.js'
    }
})
```


## License
MIT © Dmitriy Poluektov
