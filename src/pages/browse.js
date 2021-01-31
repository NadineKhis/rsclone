import React from 'react'
import { Loading } from '../components/loading/loading'
import { BrowseNav } from '../components/browseNav/browseNav'
import { BrowseBody } from '../components/browseBody/browseBody'
import { FooterContainer } from '../containers/footer'
import firebase from 'firebase/app'
import 'firebase/database'
import { Redirect } from 'react-router-dom'

export default class Browse extends React.Component {
    state = {
        userID: localStorage.getItem('netflixUserID'),
        userLogedIn: false,
        currentBodyType: 'main'
    }
    render() {

        const onClickHandler = () => {
            this.setState({
                userLogedIn: true,
            })
        }

        const onMainClickHandler = () => {
            this.setState({
                currentBodyType: 'main'
            })
        }

        const onCollectionClickHandler = () => {
            this.setState({
                currentBodyType: 'collection'
            })
        }

        const onSettingsClickHandler = () => {
            this.setState({
                currentBodyType: 'settings'
            })
        }

        return (
            <div className='browse'>
                <div className='browse_header'>
                    <BrowseNav userLogedIn={this.state.userLogedIn} onMainClick={onMainClickHandler} onCollectionClick={onCollectionClickHandler} onSettingsClick={onSettingsClickHandler} />
                </div>
                {this.state.userLogedIn
                    ? (<React.Fragment>
                        <BrowseBody bodyType={this.state.currentBodyType} />
                        <FooterContainer />
                    </React.Fragment>
                    )
                    : <Loading onClick={onClickHandler} state={this.state} />
                }
                {localStorage.getItem('netflixUserID') && (firebase.database().ref('/users/' + localStorage.getItem('netflixUserID'))
                    .once('value')
                    .then((snapshot) => {
                        return (snapshot.val().logedIn)
                    }))
                    ? null
                    : < Redirect to='/' />}
            </div>
        )

    }

} 