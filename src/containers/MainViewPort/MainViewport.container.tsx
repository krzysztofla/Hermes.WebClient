import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStoreState } from "../../store/IStore.state";
import { IMainViewportProps } from "./IMainViewport.props";
import {
  MainViewportActions
} from "./MainViewport.actions";
import { translate } from "../../common/locales/i18next";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import AuthenticationContainer from "../Authentication/Authentication.container";


export class MainViewport extends React.Component<IMainViewportProps, {}> {
  public render() {
    return (
      <div className={"main-viewport"}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={AuthenticationContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {

  };
};

const mapDispatchToProps = (dispatch: Dispatch<MainViewportActions>) => {
  return {

  };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(translate(MainViewport as any));