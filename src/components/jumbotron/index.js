import React from 'react';
import { Container, Inner, Item, Pane, Title, SubTitle, Image } from './styles/jumbotron'
import PropTypes from 'prop-types';


export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item >
    )
}

Jumbotron.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Container.propTypes = {
  children: PropTypes.node
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Pane.propTypes = {
  children: PropTypes.node
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}


Jumbotron.Title.propTypes = {
  children: PropTypes.node
}


Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps} />
}