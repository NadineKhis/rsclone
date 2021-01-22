import React from 'react'
import './filmCategoryItem.css'
// import "~slick-carousel/slick/slick.css"
// import "~slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

export function FilmCategoryItem(props) {

    const categoryNameItems = [
        'Name',
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
        {
            imgUrl: '/images/films/thriller/black-swan/small.jpg',
            descriptrion: 'Test text'
        },
    ]

    const settings = {
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

        <React.Fragment>
            <div className='category_wrapper'>
                <div className='category_name'>Name</div>
                {/* <div className="slider_body"> */}
                {/* <div className='arrow arrow_left' onClick={props.onLeftArrowClick}><img src="/images/icons/chevron-right.png" alt="" /></div> */}
                <div className='slider_wrapper'>
                    <Slider {...settings}>
                        {categoryNameItems.map((item, index) => {
                            if (index === 0) {
                                return null
                            }
                            return (
                                <div key={index + Math.random()} className='slide'><img src={item.imgUrl} alt="" /></div>
                            )
                        })}
                    </Slider>
                </div>
                {/* <div className='arrow arrow_right' onClick={props.onRightArrowClick}><img src="/images/icons/chevron-right.png" alt="" /></div> */}
                {/* </div> */}
            </div>
        </React.Fragment>


    )
}