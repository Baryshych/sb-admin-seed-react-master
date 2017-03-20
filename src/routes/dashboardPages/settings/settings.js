/**
 * Created by madow_000 on 18.03.2017.
 */
import React, { PropTypes } from 'react';
import Quests from '../../../components/EditQuests/quests'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
Tabs, Tab
} from 'react-bootstrap';
import s from './Settings.css';


function Settings(props, context) {
  return (
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="События">Tab 1 content</Tab>
      <Tab eventKey={2} title="Добавить Задание"><Quests /></Tab>
      <Tab eventKey={3} title="Общее" >Tab 3 content</Tab>
    </Tabs>
  );
}

export default withStyles(s)(Settings);
