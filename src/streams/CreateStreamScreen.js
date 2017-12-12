/* @flow */
import React, { PureComponent } from 'react';

import type { Actions } from '../types';
import { Screen } from '../common';
import EditStreamContainer from './EditStreamContainer';

type Props = {
  actions: Actions,
};

export default class CreateStreamScreen extends PureComponent<Props> {
  props: Props;

  handleCreateScreen = (name: string, description: string, isPrivate: boolean) => {
    const { actions } = this.props;

    actions.createNewStream(name, description, [], isPrivate);
    actions.navigateBack();
  };

  render() {
    return (
      <Screen title="Create new stream" padding>
        <EditStreamContainer onUpdate={this.handleCreateScreen} />
      </Screen>
    );
  }
}