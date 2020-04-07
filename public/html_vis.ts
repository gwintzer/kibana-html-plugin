/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { i18n } from '@kbn/i18n';

import { DefaultEditorSize } from '../../../src/legacy/core_plugins/visualizations/public';

import { HtmlVisWrapper } from './html_vis_controller';
import { HtmlOptions } from './html_options';

export const htmlVisDefinition = {
  name: 'html',
  title: 'Html',
  isAccessible: true,
  icon: 'visText',
  description: i18n.translate('visTypeHtml.htmlDescription', {
    defaultMessage: 'Create a document using html syntax',
  }),
  visConfig: {
    component: HtmlVisWrapper,
    defaults: {
      fontSize: 12,
      openLinksInNewTab: false,
      html: '',
    },
  },
  editorConfig: {
    optionTabs: [
      {
        name: 'html',
        title: i18n.translate('visTypeHtml.tabs.htmlText', {
          defaultMessage: 'HTML',
        }),
        editor: HtmlOptions,
      }
    ],
    enableAutoApply: true,
    defaultSize: DefaultEditorSize.LARGE,
  },
  options: {
    showTimePicker: false,
    showFilterBar: false,
  },
  requestHandler: 'none',
  responseHandler: 'none',
};
