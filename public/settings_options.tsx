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

import React, { useCallback } from 'react';
import {
  EuiPanel,
  EuiTitle,
  EuiLink,
  EuiIcon,
  EuiTextArea,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';

import { VisOptionsProps } from 'ui/vis/editors/default';
import { SwitchOption } from '../../../src/legacy/core_plugins/kbn_vislib_vis_types/public/components';
import { HtmlVisParams } from './types';

function SettingsOptions({ stateParams, setValue }: VisOptionsProps<HtmlVisParams>) {
  const onStyleUpdate = useCallback(
    (value: HtmlVisParams['style']) => setValue('style', value),
    [setValue]
  );
  const onScriptUpdate = useCallback(
    (value: HtmlVisParams['script']) => setValue('script', value),
    [setValue]
  );
  return (
    <EuiPanel paddingSize="s">
      <EuiFlexGroup direction="column" gutterSize="m" className="htmlEditor">
        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="none" justifyContent="spaceBetween" alignItems="baseline">
            <EuiFlexItem grow={false}>
              <EuiTitle size="xs">
                <h2>
                  <label htmlFor="styleVisInput">Style</label>
                </h2>
              </EuiTitle>
            </EuiFlexItem>

          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiTextArea
            id="styleVisInput"
            className="visEditor--html__textarea"
            value={stateParams.style}
            onChange={({ target: { value } }) => onStyleUpdate(value)}
            fullWidth={true}
            data-test-subj="styleTextarea"
            resize="none"
          />
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="none" justifyContent="spaceBetween" alignItems="baseline">
            <EuiFlexItem grow={false}>
              <EuiTitle size="xs">
                <h2>
                  <label htmlFor="scriptVisInput">Script</label>
                </h2>
              </EuiTitle>
            </EuiFlexItem>

          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiTextArea
            id="scriptVisInput"
            className="visEditor--html__textarea"
            value={stateParams.script}
            onChange={({ target: { value } }) => onScriptUpdate(value)}
            fullWidth={true}
            data-test-subj="scriptTextarea"
            resize="none"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
    //   <SwitchOption
    //     label={i18n.translate('visTypeHtml.params.openLinksLabel', {
    //       defaultMessage: 'Open links in new tab',
    //     })}
    //     paramName="openLinksInNewTab"
    //     value={stateParams.openLinksInNewTab}
    //     setValue={setValue}
    //   />
  );
}

export { SettingsOptions };
