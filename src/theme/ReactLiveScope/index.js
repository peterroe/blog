/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
// Add react-live imports you need here
const ReactLiveScope = {
    React,
    ...React,
    ResizeObserver,
    classNames,
    Tabs,
    TabItem
};

export default ReactLiveScope;