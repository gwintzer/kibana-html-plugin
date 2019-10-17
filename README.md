# Kibana HTML Plugin Widget
HTML Plugin Widget for Kibana. This Plugin was originally adapted from the Markdown Plugin.

![preview-create](/resources/preview-create.png)

![preview-edit](/resources/preview-edit.png)

## Install

```bash
bin/kibana-plugin install <PATH_OR_URL_TO_YOUR_ZIP_FILE>
```
Go to releases page for list of available packages

## Compatibility
Plugins are officialy not supported, because of fast code changes even in minor Versions.

The plugin is compatible with following Versions:
* kibana (=7.4+)

[Manage CSP](https://www.elastic.co/guide/en/kibana/master/production.html#csp-strict-mode) if you want autorize inline script in a production context


## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following yarn scripts.

  - `yarn kbn bootstrap`

    Install dependencies and crosslink Kibana and all projects/plugins.

    > ***IMPORTANT:*** Use this script instead of `yarn` to install dependencies when switching branches, and re-run it whenever your dependencies change.

  - `yarn start`

    Start kibana and have it include this plugin. You can pass any arguments that you would normally send to `bin/kibana`

      ```
      yarn start --elasticsearch.url http://localhost:9220
      ```

  - `yarn build`

    Build a distributable archive of your plugin.

  - `yarn test:browser`

    Run the browser tests in a real web browser.

  - `yarn test:server`

    Run the server tests using mocha.

For more information about any of these commands run `yarn ${task} --help`. For a full list of tasks checkout the `package.json` file, or run `yarn run`.
