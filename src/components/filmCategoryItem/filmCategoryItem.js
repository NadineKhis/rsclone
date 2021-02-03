import React, {Component} from 'react'
import './filmCategoryItem.css'
// import "~slick-carousel/slick/slick.css"
// import "~slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import axios from 'axios';
import {DataLoadingEffect} from '../dataLoadingEffect/dataLoadingEffect';
// import { card } from "../card/card";
import {CardComponent} from "../card/card";

export class FilmCategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GANRES: [
        {
          "id": 3,
          "genre": "Action"
        },
        {
          "id": 13,
          "genre": "Western"
        },
        {
          "id": 17,
          "genre": "Detective"
        },
        {
          "id": 8,
          "genre": "Drama"
        },
        {
          "id": 6,
          "genre": "Comedy"
        },
        {
          "id": 7,
          "genre": "Melodrama"
        },
        {
          "id": 14,
          "genre": "Cartoon"
        },
        {
          "id": 4,
          "genre": "Thriller"
        },
        {
          "id": 1,
          "genre": "Horror"
        },
        {
          "id": 2,
          "genre": "Fantastic"
        },
      ],
      allFilmsCollection: [],
      dataFullLoaded: false,
      isVisible: false,
      filmId: null,
      activeCard: 0,
      // updateCount: 0,
      // slideIndex: 0
    }
    this._handleClick = this._handleClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  componentDidMount() {
    this.state.GANRES.map(async (item, index) => {
      const filmsFetch = async item => {
        try {
          let response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${item.id}&order=YEAR&type=ALL&ratingTo=10&yearFrom=1888&yearTo=2021&page=1`,
            {
              headers: {"accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d"}
            })
          let collection = response.data.films
          this.setState({
            allFilmsCollection: [
              ...this.state.allFilmsCollection,
              {
                'genre': item.genre,
                'films': [...collection]
              }
            ]
          })
          if (index === this.state.GANRES.length - 1) {
            this.setState({
              dataFullLoaded: true
            })
          }
        } catch (error) {
          console.error(error)
        }
      }

      async function insideFetch(item, index) {
        await filmsFetch(item, index)
      }

      await insideFetch(item, index)
    })
  }

  _handleClick(item) {
    this.getInfo(item)
    this.setState(() => {
      return {
        "showInfo": true,
        "filmId": item["filmId"]
      }
    });
  }

  async getInfo(item) {
    // e.preventDefault();
    const filmId = item["filmId"];
    // this.setState(() => {
    //   return {
    //     "activeCard": 5,
    //   }
    // });
    console.log(filmId)
    try {
      let responseInfo = await axios.get(`https://kinopoiskapiunofficial.tech//api/v2.1/films/${filmId}`,
        {
          headers: {"accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d"}
        })
      let title = responseInfo.data["data"]["nameRu"];
      let description = responseInfo.data["data"]["description"];
      let year = responseInfo.data["data"]["year"];
      let poster = responseInfo.data["data"]["posterUrl"]
      this.setState(() => {
        return {
          "title": title,
          "description": description,
          "year": year,
          "poster": poster,
        }
      });
    } catch (error) {
      console.error(error)
    }

    // not always exist
    try {
      let responsePreview = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${filmId}/frames`,
        {
          headers: {"accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d"}
        })
      let preview = responsePreview.data.frames[0]["image"];
      this.setState(() => {
        return {
          "preview": preview,
        }
      });
      this.setState(() => {
        return {
          "preview": preview,
        }
      });
    } catch (e) {
      this.setState(() => {
        return {
          "preview": this.state.poster,
        }
      });
    }
    // this.sliderGoTo()

  }

  nextClick(e) {
    console.log(e)
    this.setState(() => {
      return {
        "activeCard": e,
      }
    });
  }


  sliderGoTo() {
    if (this.state.activeCard) {
      this.slider.slickGoTo(this.state.activeCard, false);
    }
  }



  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: Number(`${this.state.activeCard}`),
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1365,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      afterChange: this.nextClick,
    }

    return (
      this.state.dataFullLoaded
        ? (this.state.allFilmsCollection.map((item, index) => {
          return (
            <div key={index + Math.random()} className='category_wrapper'>
              <div className='category_name'>{item.genre}</div>
              <div className='slider_wrapper'>
                <Slider ref={c => (this.slider = c)} {...sliderSettings}>
                  {
                    item.films.map((item, index) => {
                      return (
                        <div key={index + Math.random()} className='slide' onClick={() => this._handleClick(item)}><img
                          src={item.posterUrl} alt=""/></div>
                      )
                    })
                  }
                </Slider>

              </div>
              {this.state.showInfo ?
                <CardComponent title={this.state.title} description={this.state.description} year={this.state.year}
                               preview={this.state.preview}/> :
                null
              }
            </div>
          )
        }))
        : <DataLoadingEffect/>
    )
  }
}
