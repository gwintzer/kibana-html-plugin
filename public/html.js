
import 'plugins/kibana-html-plugin/deps/ace-builds/ace'
import 'plugins/kibana-html-plugin/deps/ace-builds/mode-html'
import 'plugins/kibana-html-plugin/deps/ace-builds/theme-monokai'
import 'plugins/kibana-html-plugin/deps/angular-ui-ace/ui-ace.min'

import 'plugins/kibana-html-plugin/html.less';
import 'plugins/kibana-html-plugin/htmlController';
import { VisVisTypeProvider } from 'ui/vis/vis_type';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

VisTypesRegistryProvider.register(HtmlVisProvider);

function HtmlVisProvider(Private) {
  const VisType = Private(VisVisTypeProvider);
  const TemplateVisType = Private(TemplateVisTypeProvider);

  return new TemplateVisType({
    name: 'html',
    title: 'Html widget',
    icon: 'fa-code',
    description: 'Useful for displaying html in dashboards.',
    category: VisType.CATEGORY.OTHER,
    template: require('plugins/kibana-html-plugin/html.html'),
    params: {
      editor: require('plugins/kibana-html-plugin/htmlOptions.html')
    },
    requiresSearch: false
  });
}

export default HtmlVisProvider;

