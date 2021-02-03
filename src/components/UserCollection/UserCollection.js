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
                if (currentUserFilmCollection.length === 0) {
                    this.setState({
                        userFilmsLoaded: true
                    })
                    return
                }
                currentUserFilmCollection.map((item, index) => {
                    const filmsFetch = async () => {
                        try {
                            let response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}?append_to_response=`,
                                {
                                    headers: { "accept": "application/json", "X-API-KEY": "930e3dbb-b4ae-4aea-a8cd-2e7dd39b6b4d" }
                                })
                            let currentFilm = response.data.data

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
        const onDeleteFilmButtonClick = (event) => {
            const filmid = parseInt(event.target.closest('div').dataset.filmid)
            let currentUserFilmCollection
            // let index

            firebase.database().ref('/users/' + localStorage.getItem('netflixUserID')).once('value').then((snapshot) => {
                currentUserFilmCollection = snapshot.val().userFilmCollection
            })
                .then(() => {
                    Object.entries(currentUserFilmCollection).forEach(n => n[1] === filmid && delete currentUserFilmCollection[n[0]])
                    firebase.database().ref('users/' + localStorage.getItem('netflixUserID')).update({
                        userFilmCollection: currentUserFilmCollection
                    })
                })
        }

        return (
            this.state.userFilmsLoaded
                ? (
                    <div className='user_films_wrapper'>
                        {
                            this.state.userFilmCollection.length === 0
                                ? (<h2 style={{ color: '#fff' }}>There is no films in your collection yet!</h2>)
                                : (
                                    this.state.userFilmCollection.map((item, index) => {
                                        return (<div key={index} data-filmid={item.filmId} onDoubleClick={(event) => onDeleteFilmButtonClick(event)}>
                                            <img src={item.posterUrlPreview} className='user_collection_slide' alt='user_film' />
                                        </div>)
                                    })
                                )

                        }
                    </div>
                )
                : <DataLoadingEffect />
        )
    }
}