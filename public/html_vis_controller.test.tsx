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

import React from 'react';
import { render, mount } from 'enzyme';
import { HtmlVisWrapper } from './html_vis_controller';

// We need Html to do these tests, so mock data plugin
jest.mock('data/public/legacy', () => {
  return {};
});

describe('html vis controller', () => {
  it('should set html from html params', () => {
    const vis = {
      params: {
        html:
          'This is a test of the <b>HTML</b> vis.',
      },
    };

    const wrapper = render(
      <HtmlVisWrapper vis={vis} visParams={vis.params} renderComplete={jest.fn()} />
    );
    expect(wrapper.find('b').text()).toBe('HTML');
  });


  it('should update the HTML when render again with changed params', () => {
    const vis = {
      params: {
        html: 'Initial',
      },
    };

    const wrapper = mount(
      <HtmlVisWrapper vis={vis} visParams={vis.params} renderComplete={jest.fn()} />
    );
    expect(wrapper.text().trim()).toBe('Initial');
    vis.params.html = 'Updated';
    wrapper.setProps({ vis });
    expect(wrapper.text().trim()).toBe('Updated');
  });

  describe('renderComplete', () => {
    it('should be called on initial rendering', () => {
      const vis = {
        params: {
          html: 'test',
        },
      };
      const renderComplete = jest.fn();
      mount(
        <HtmlVisWrapper vis={vis} visParams={vis.params} renderComplete={renderComplete} />
      );
      expect(renderComplete.mock.calls.length).toBe(1);
    });

    it('should be called on successive render when params change', () => {
      const vis = {
        params: {
          html: 'test',
        },
      };
      const renderComplete = jest.fn();
      mount(
        <HtmlVisWrapper vis={vis} visParams={vis.params} renderComplete={renderComplete} />
      );
      expect(renderComplete.mock.calls.length).toBe(1);
      renderComplete.mockClear();
      vis.params.html = 'changed';
      mount(
        <HtmlVisWrapper vis={vis} visParams={vis.params} renderComplete={renderComplete} />
      );
      expect(renderComplete.mock.calls.length).toBe(1);
    });

    it('should be called on successive render even without data change', () => {
      const vis = {
        params: {
          html: 'test',
        },
      };
      const renderComplete = jest.fn();
      mount(
        <HtmlVisWrapper vis={vis} visParams={vis.params} renderComplete={renderComplete} />
      );
      expect(renderComplete.mock.calls.length).toBe(1);
      renderComplete.mockClear();
      mount(
        <HtmlVisWrapper vis={vis} visParams={vis.params} renderComplete={renderComplete} />
      );
      expect(renderComplete.mock.calls.length).toBe(1);
    });
  });
});
