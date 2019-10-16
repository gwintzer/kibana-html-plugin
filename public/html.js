
import {VisFactoryProvider} from 'ui/vis/vis_factory';
import {VisTypesRegistryProvider} from 'ui/registry/vis_types';

import { DefaultEditorSize } from 'ui/vis/editor_size';

import { HtmlVisWrapper } from './html_vis_controller';
import htmlVisParamsTemplate from './html_vis_params.html';


function HtmlVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createReactVisualization({
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
}

// register the provider with the visTypes registry so that other know it exists
VisTypesRegistryProvider.register(HtmlVisProvider);

// export the provider so that the visType can be required with Private()
export default HtmlVisProvider;
