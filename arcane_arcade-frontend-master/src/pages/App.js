import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

import "../react-tags.css";

import "../normalize.css";
import "../topcoat-desktop-dark.css";
import "bulma/bulma.sass";

import { ToastContainer } from "react-toastify";

import { observer } from "mobx-react";

import { useStore } from "../store";

import Notifications from "../components/Notifications/Notifications";
import Loading from "../components/Loading/Loading";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { auth } = useStore();

  useEffect(() => {
    auth.checkLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (auth.loading) return <Loading />;

  return (
    <React.Fragment>
      <ToastContainer />
      {auth.isLoggedIn && <Notifications />}
      <Routes />
    </React.Fragment>
  );
};

export default observer(App);
