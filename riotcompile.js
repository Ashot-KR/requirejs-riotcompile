define(['text', 'riot'], function (text, riot) {
  var buildMap = {};

  return {
    version: '0.1.0',

    load: function (name, parentRequire, onload, config) {
      var compiled;

      text.get(parentRequire.toUrl(name), function (tpl) {
        try {
          compiled = riot.compile(tpl, true);
        } catch (e) {
          onload.error(e);
          return;
        }

        if (config.isBuild) {
          buildMap[name] = compiled;

          onload();
        } else {
          onload.fromText('define(["riot"], function(riot) { return ' + compiled + ' })');
        }

      });

    },

    write: function (pluginName, name, write) {
      if (name in buildMap) {
        write('define("' + pluginName + '!' + name + '", ["riot"], function(riot){ return ' + buildMap[name] + '; });\n');
      }
    }
  };
});
