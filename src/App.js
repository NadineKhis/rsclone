import React from "react";
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from "./containers/footer";
import Accordeon from './components/accordeon/accordeon'

export default function App() {
  return (
    <>
      <JumbotronContainer />,
      <Accordeon />
      <FooterContainer />
    </>
  );
}
