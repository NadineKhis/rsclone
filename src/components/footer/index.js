import React from "react";
import {Container, Row, Column, Link, Title, Text, Break} from "./styles/footer";
import PropTypes from 'prop-types';

export default function Footer ({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }

  </Container>
}

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.Row = function FooterRow({ children, restProps }) {
  return <Row { ...restProps }>{ children }</Row>
}

Footer.Row.propTypes = {
  children: PropTypes.node,
  restProps: PropTypes.node
}

Footer.Column = function FooterColumn({ children, restProps }) {
  return <Column { ...restProps }>{ children }</Column>
}

Footer.Column.propTypes = {
  children: PropTypes.node,
  restProps: PropTypes.node
}

Footer.Link = function FooterLink({ children, restProps }) {
  return <Link { ...restProps}>{ children }</Link>
}

Footer.Link.propTypes = {
  children: PropTypes.node,
  restProps: PropTypes.node
}

Footer.Title = function FooterTitle({ children, restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Footer.Title.propTypes = {
  children: PropTypes.node,
  restProps: PropTypes.node
}

Footer.Text = function FooterText({ children, restProps }) {
  return <Text { ...restProps }>{ children }</Text>
}

Footer.Text.propTypes = {
  children: PropTypes.node,
  restProps: PropTypes.node
}

Footer.Break = function FooterBreak({ children, restProps }) {
  return <Break { ...restProps }>{ children }</Break>
}

Footer.Break.propTypes = {
  children: PropTypes.node,
  restProps: PropTypes.node
}