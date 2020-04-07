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
import { FormattedMessage } from '@kbn/i18n/react';

import { VisOptionsProps } from 'ui/vis/editors/default';
import { HtmlVisParams } from './types';

function HtmlOptions({ stateParams, setValue }: VisOptionsProps<HtmlVisParams>) {
  const onHtmlUpdate = useCallback(
    (value: HtmlVisParams['html']) => setValue('html', value),
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
                  <label htmlFor="htmlVisInput">Html</label>
                </h2>
              </EuiTitle>
            </EuiFlexItem>

          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiTextArea
            id="htmlVisInput"
            className="visEditor--html__textarea"
            value={stateParams.html}
            onChange={({ target: { value } }) => onHtmlUpdate(value)}
            fullWidth={true}
            data-test-subj="htmlTextarea"
            resize="none"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { HtmlOptions };
