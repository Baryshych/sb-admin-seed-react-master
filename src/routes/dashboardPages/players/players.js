/**
 * Created by madow_000 on 18.03.2017.
 */


import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
 PageHeader,
  Table
} from 'react-bootstrap';
import {graphqlRequest} from '../../../store/createHelpers';

import s from './Players.css';

class Players extends React.Component {

   componentWillMount() {
    let query = 'events{id,name,quests {id,target,type,completed}}';
    window.document.cookie = "id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

    let data  = graphqlRequest('me{id}');
    console.log('data', data);
    console.log( graphqlRequest(query));
    // this.state.events = data;

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Текущие задания:</PageHeader>
          </div>
        </div>

        <div className="row">
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>#</th>
              <th>Задание</th>
              <th>Соцсеть</th>
              <th>Обязательное</th>
            </tr>
            </thead>
          </Table>
        </div>

      </div>
    );
    context.setTitle(title);
  }
}
export default withStyles(s)(Players);
