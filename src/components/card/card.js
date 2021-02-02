import React, {Component}  from 'react';
// import axios from "axios";
import PropTypes from 'prop-types';
import {Feature, FeatureTitle, FeatureText, FeatureClose, Content,  beforeDescription, PlayButton, addToList} from "./styles/card"

export class CardComponent extends Component {
  render() {
    return (
      <Feature {...this.props} src={this.props.preview}>
        <Content>
          <FeatureTitle>{this.props.title}</FeatureTitle>
          <beforeDescription>
            {this.props.year}
          </beforeDescription>
          <FeatureText>{this.props.description}</FeatureText>
          <div>
            <PlayButton>► Play</PlayButton>
            <addToList >
              <img src="../../../public/images/icons/add.png" alt="Add" />
            </addToList>
          </div>


          <FeatureClose >
            <img src="../../../public/images/icons/close.png" alt="Close" />
          </FeatureClose>
          {/*<Group margin="30px 0" flexDirection="row" alignItems="center">*/}
          {/*  <Maturity >16+</Maturity>*/}
          {/*  <FeatureText fontWeight="bold">*/}
          {/*    Жанр фантастика*/}
          {/*  </FeatureText>*/}
          {/*  {this.props.year}*/}
          {/*</Group>*/}

          {/*<img src={this.props.preview} alt=""/>*/}
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
// export class Card extends Component {
//
//   constructor (props) {
//     super(props);
//     this.state = {
//         isVisible: false,
//         title: null,
//         description: null,
//         year: null,
//         preview: null,
//       }
//     // this.isVisible = props.isVisible;
//     // this.title = props.title;
//     // this.description = props.description;
//     // this.year = props.year;
//     // this.preview = props.preview;
//   }
//   // state = {
//   //   isVisible: false,
//   //   title: null,
//   //   description: null,
//   //   year: null,
//   //   preview: null,
//   // }
//
//
//   updateState(visibility, title, description, year, preview) {
//     // this.state.isVisible = visibility;
//     // try {
//     //   this.state.title = setStitle;
//     //   this.state.description = description;
//     //   this.state.year = year;
//     //   this.state.preview = preview;
//     // } catch (e) {}
//     // this.setState(() => {
//     //   return {
//     //     isVisible: true,
//     //     title: title,
//     //     description: description,
//     //     year: year,
//     //     preview: preview,
//     //   }
//     // });
//     // console.log("state changed")
//
//   }
//   render () {
//
//     return (
//       <div></div>
//     )
//   }
//
//
// }
//
// export async function card (imgUrl, item) {
//   const filmId = item["filmId"]
//   console.log(filmId)
//   try {
//     let responseInfo = await axios.get(`https://kinopoiskapiunofficial.tech//api/v2.1/films/${filmId}`,
//       {
//         headers: { "accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d" }
//       })
//     let title = responseInfo.data["data"]["nameEn"];
//     let description = responseInfo.data["data"]["description"];
//     let year = responseInfo.data["data"]["year"];
//     // let rating = responseInfo.data["rating"]["rating"];
//
//     let responsePreview = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${filmId}/frames`,
//       {
//         headers: { "accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d" }
//       })
//     let preview = responsePreview.data.frames[0]["image"]
//     // Card.updateState()
//     // let responseTrailer = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${filmId}/videos`,
//     //   {
//     //     headers: { "accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d" }
//     //   })
//     // let trailerUrl = responseTrailer.data["trailers"]["url"];
//     // Card.setState("title", title)
//     console.log(title)
//     console.log(description)
//     console.log(year)
//     // console.log(rating)
//     console.log(preview)
//     // console.log(trailerUrl)
//     // let showCard = new Card()
//     Card(true, title, description, year, preview)
//     // render () {
//     // {
//     //   return (
//     //     <div>HELLO</div>
//     //   )
//     // }
//     // Card.updateState(true, title, description, year, preview)
//   } catch (error) { console.error(error) }
//
// }
