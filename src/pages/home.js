import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from "../containers/footer";
import Accordeon from '../containers/accordeon'
import { HeaderContainer } from "../containers/header";

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer />
            <Accordeon />
            <FooterContainer />
        </>
    )
}

