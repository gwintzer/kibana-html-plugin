
import { visFactory } from 'ui/vis/vis_factory';
import { setup, start } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';

import { DefaultEditorSize } from 'ui/vis/editor_size';

import { HtmlVisWrapper } from './html_vis_controller';
import htmlVisParamsTemplate from './html_vis_params.html';

    
const htmlVis = () => visFactory.createReactVisualization({
  name: 'html',
  title: 'Html widget',
  icon: 'editorCodeBlock',
  description: 'Useful for displaying html in dashboards.',

  visConfig: {
    component: HtmlVisWrapper,
    defaults: {
      fontSize: 12,
      openLinksInNewTab: false
    }
  },
  editorConfig: {
    optionsTemplate: htmlVisParamsTemplate,
    enableAutoApply: true,
    defaultSize: DefaultEditorSize.LARGE,
  },
  options: {
    showTimePicker: false,
  },
  requestHandler: 'none',
  responseHandler: 'none',
});

setup.types.registerVisualization(htmlVis);


// export the provider so that the visType can be required with Private()
export default htmlVis;
