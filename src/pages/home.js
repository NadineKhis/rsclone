import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from "../containers/footer";
import Accordeon from '../containers/accordeon'

export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <Accordeon />
            <FooterContainer />
        </>
    )
}

