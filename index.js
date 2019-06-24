import { resolve } from 'path';

export default function (kibana) {
  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/kibana-html-plugin/html'],
      styleSheetPaths: require('path').resolve(__dirname, 'public/index.scss'),
    }

  });
};
