import React from 'react';
import { Actions, Scene, Tabs, Lightbox } from 'react-native-router-flux';

import Home from './pages/Home';
import Predictions from './pages/Predictions';
import Lists from './pages/Lists';

const scenes = Actions.create(
  <Lightbox>
    <Scene key="root">
      <Tabs key="tabs" lazy animationEnabled={false} hideNavBar hideTabBar>
        <Scene key="home" component={Home} hideNavBar type="replace" />
        <Scene key="predictions" component={Predictions} hideNavBar type="replace" />
        <Scene key="lists" component={Lists} hideNavBar type="replace" initial />
      </Tabs>
    </Scene>
  </Lightbox>,
);

export default scenes;
