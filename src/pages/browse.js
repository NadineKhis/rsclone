import React from 'react'
import { Loading } from '../components/loading/loading'
import { BrowseNav } from '../components/browseNav/browseNav'
import { BrowseBody } from '../components/browseBody/browseBody'
import { FooterContainer } from '../containers/footer'

export default class Browse extends React.Component {
    state = {
        dataLoaded: true,
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


    //     fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=20&order=RATING&type=ALL&ratingTo=10&yearFrom=1888&yearTo=2020&page=1',

    // // Второй аргумент это объект с указаниями, методаи заголовка
    //     { 
    // 	method: "GET", 
    // 	headers:{"accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d"} 
    // 	})

    // .then( response => {
    // 	if (response.status !== 200) {

    //         return Promise.reject(); 
    //   }
    //     return response.text()
    // })
    // .then(i => console.log(i))
    // .catch(() => console.log('ошибка'));

    render() {

        const onClickHandler = () => {
            this.setState({
                userLogedIn: !this.state.userLogedIn,
            })
        }

        return (
            <div className='browse'>
                <div className='browse_header'>
                    <BrowseNav userLogedIn={this.state.userLogedIn} userImg={this.state.userImg} dataLoaded={this.state.dataLoaded} />
                </div>
                {this.state.userLogedIn && this.state.dataLoaded
                    ? (<React.Fragment>
                        <BrowseBody dataLoaded={this.state.dataLoaded} />
                        <FooterContainer />
                    </React.Fragment>
                    )
                    : <Loading onClick={onClickHandler} userImg={this.state.userImg} state={this.state} />
                }

            </div>
        )

    }

} 