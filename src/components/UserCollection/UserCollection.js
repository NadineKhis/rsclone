import React from 'react'
import './UserCollection.css'
import firebase from 'firebase/app'
import 'firebase/database'
import { DataLoadingEffect } from '../dataLoadingEffect/dataLoadingEffect'
import axios from 'axios'

export class UserCollection extends React.Component {

    state = {
        userFilmsLoaded: false,
        userFilmCollection: [],
    }
    // const [userFilmsLoaded, setUserFilmsLoaded] = useState(false)
    // const [userFilmCollection, setUserFilmCollection] = useState([])

    componentDidMount() {
        const userId = localStorage.getItem('netflixUserID')
        let currentUserFilmCollection

        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
            currentUserFilmCollection = snapshot.val().userFilmCollection || []
        })
            .then(() => {
                // console.log(currentUserFilmCollection)
                currentUserFilmCollection.map((item, index) => {
                    const filmsFetch = async () => {
                        try {
                            let response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}?append_to_response=`,
                                {
                                    headers: { "accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d" }
                                })
                            let currentFilm = response.data.data
                            console.log(response)

                            this.setState({
                                userFilmCollection: [...this.state.userFilmCollection, currentFilm]
                            })

                            if (index === currentUserFilmCollection.length - 1) {
                                this.setState({
                                    userFilmsLoaded: true
                                })
                            }
                        } catch (error) {
                            console.error(error)
                        }
                    }

                    filmsFetch()

                })

            })
    }
    render() {
        // console.log(this.state.userFilmCollection)
        return (
            this.state.userFilmsLoaded
                ? (
                    <div className='user_films_wrapper'>
                        {
                            this.state.userFilmCollection.map((item, index) => {
                                return (<div key={index}>
                                    <img src={item.posterUrlPreview} className='user_collection_slide' alt='user_film' />
                                </div>)
                            })
                        }
                    </div>
                )
                : <DataLoadingEffect />
        )
    }
}