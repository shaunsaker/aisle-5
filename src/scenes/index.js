import React from 'react';
import { Actions, Scene, Tabs } from 'react-native-router-flux';

import Home from './pages/Home';
import Predictions from './pages/Predictions';
import Lists from './pages/Lists';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Tabs key="tabs" hideTabBar animationEnabled={false}>
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="predictions" component={Predictions} hideNavBar />
      <Scene key="lists" component={Lists} hideNavBar />
    </Tabs>
  </Scene>,
);

export default scenes;
