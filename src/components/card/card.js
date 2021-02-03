import React, {Component}  from 'react';
// import axios from "axios";
import PropTypes from 'prop-types';
import {Feature, FeatureTitle, FeatureText, FeatureClose, Content,  BeforeDescription, PlayButton, AddToList, BtnContainer} from "./styles/card"

export class CardComponent extends Component {
  render() {
    return (
      <Feature {...this.props} src={this.props.preview}>
        <Content>
          <FeatureTitle>{this.props.title}</FeatureTitle>
          <BeforeDescription>
            {this.props.year}
          </BeforeDescription>
          <FeatureText>{this.props.description}</FeatureText>
          <BtnContainer>
            <PlayButton onClick={() => console.log("play")}>► Play</PlayButton>
            <AddToList onClick={() => console.log("add")}>
              ✚ Add to list
            </AddToList>
          </BtnContainer>
          <FeatureClose onClick={() => {}}>
            Close
          </FeatureClose>
        </Content>

      </Feature>
    )
  }
}

CardComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
  preview: PropTypes.string,
}
