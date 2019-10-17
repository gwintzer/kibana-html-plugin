import { resolve } from 'path';
import { existsSync } from 'fs';

export default function (kibana) {
  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/kibana-html-plugin/html'],
      styleSheetPaths: [
        resolve(__dirname, 'public/index.scss'), 
        resolve(__dirname, 'public/index.css')
      ].find(p => existsSync(p)),
    }

  });
};
