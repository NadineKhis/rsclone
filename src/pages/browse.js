import React from 'react'
import { Loading } from '../components/loading/loading'
import { BrowseNav } from '../components/browseNav/browseNav'
import { BrowseBody } from '../components/browseBody/browseBody'
import { FooterContainer } from '../containers/footer'

export default class Browse extends React.Component {
    state = {
        userLogedIn: false,
        userImg: '/images/users/2.png',
        category: {
            name: {
                prevSlide: 0,
                nextSlide: 4,
                categorylength: 26,
            }
        }
    }

    render() {
        const onClickHandler = () => {
            this.setState({
                userLogedIn: !this.state.userLogedIn
            })
        }

        const onLeftArrowClickHandler = () => {
            let newPrevSlide
            let newNextSlide

            if (this.state.category.name.prevSlide - 3 < 0) {
                newPrevSlide = 0;
                newNextSlide = newPrevSlide + 4;
            } else {
                newPrevSlide = this.state.category.name.prevSlide - 3
                newNextSlide = this.state.category.name.nextSlide - 3
            }

            this.setState({
                category: {
                    name: {
                        prevSlide: newPrevSlide,
                        nextSlide: newNextSlide,
                        categorylength: 26,
                    }
                }
            })
        }

        const onRightArrowClickHandler = () => {
            let newPrevSlide
            let newNextSlide

            if ((this.state.category.name.nextSlide + 3) > this.state.category.name.categorylength) {
                newNextSlide = this.state.category.name.categorylength;
                newPrevSlide = newNextSlide - 4;
            } else {
                newNextSlide = this.state.category.name.nextSlide + 3;
                newPrevSlide = this.state.category.name.prevSlide + 3
            }

            this.setState({
                category: {
                    name: {
                        prevSlide: newPrevSlide,
                        nextSlide: newNextSlide,
                        categorylength: 26,
                    }
                }
            })
        }

        return (
            <div className='browse'>
                <div className='browse_header'>
                    <BrowseNav userLogedIn={this.state.userLogedIn} userImg={this.state.userImg} />
                </div>
                {!this.state.userLogedIn
                    ? <Loading onClick={onClickHandler} userImg={this.state.userImg} />
                    : (<React.Fragment>
                        <BrowseBody categoryes={this.state.category} onLeftArrowClick={onLeftArrowClickHandler} onRightArrowClick={onRightArrowClickHandler} />
                        <FooterContainer />
                    </React.Fragment>
                    )}

            </div>
        )

    }

} 