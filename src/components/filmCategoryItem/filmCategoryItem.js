import React, { Component } from 'react'
import './filmCategoryItem.css'
// import "~slick-carousel/slick/slick.css"
// import "~slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import axios from 'axios';

export class FilmCategoryItem extends Component {
    state = {
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
    }

    componentDidMount() {
        this.state.GANRES.map(async (item, index) => {
            const filmsFetch = async item => {
                try {
                    let response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${item.id}&order=YEAR&type=ALL&ratingTo=10&yearFrom=1888&yearTo=2021&page=1`,
                        {
                            headers: { "accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d" }
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
                } catch (error) { console.error(error) }
            }

            async function insideFetch(item, index) {
                await filmsFetch(item, index)
                // if (index === this.state.GANRES.length - 1) {
                //     setLoaded(true)
                //     console.log(loadedState)
                // }
            }
            await insideFetch(item, index)
        })
    }


    render() {
        const sliderSettings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
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
            ]
        }

        return (
            this.state.allFilmsCollection.map((item, index) => {
                return (
                    <div key={index + Math.random()} className='category_wrapper'>
                        <div className='category_name'>{item.genre}</div>
                        <div className='slider_wrapper'>
                            <Slider {...sliderSettings}>
                                {
                                    item.films.map((item, index) => {
                                        return (
                                            <div key={index + Math.random()} className='slide'><img src={item.posterUrl} alt="" /></div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                )
            })
        )
    }
}