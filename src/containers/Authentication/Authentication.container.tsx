import React from 'react';
import { AuthenticationActions } from './Authentication.actions';
import { Dispatch } from 'redux';
import { IStoreState } from '../../store/IStore.state';
import { connect } from 'react-redux';
import { translate } from '../../common/locales/i18next';

class AuthenticationContainer extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        user: state.autheniticationState.user
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AuthenticationActions>) => {
    return {
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(translate( AuthenticationContainer as any));