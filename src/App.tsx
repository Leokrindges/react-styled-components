import { Fragment } from "react/jsx-runtime";
import { AppRoutes } from "./config/App.Routes";
import { GlobaStyles } from "./config/global/GlobalStyles";

export function App() {
  return (
    <Fragment>
      <GlobaStyles/>
      <AppRoutes />
    </Fragment>
  );
}
