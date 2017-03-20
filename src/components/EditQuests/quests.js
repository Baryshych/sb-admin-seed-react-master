/**
 * Created by madow_000 on 18.03.2017.
 */
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  FormGroup, Checkbox, Button, Form, ControlLabel, HelpBlock, FormControl
} from 'react-bootstrap';


import s from './quests.css';


class Quests extends React.Component {

  FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


  render() {
    let FieldGroup = this.FieldGroup;
    return (
      <Form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />
        <FieldGroup
          id="formControlsPassword"
          label="Password"
          type="password"
        />
        <FormGroup>
          <Checkbox inline>
            1
          </Checkbox>
          {' '}
          <Checkbox inline>
            2
          </Checkbox>
          {' '}
          <Checkbox inline>
            3
          </Checkbox>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default withStyles(s)(Quests);
