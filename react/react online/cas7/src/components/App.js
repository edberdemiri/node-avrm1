import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { Gallery } from "./Gallery"
import { base_url } from "./../constants"


export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            selectedPhoto: ""
        }
    }
    componentDidMount = () => {
        this.fetchPhotos();
    }
    fetchPhotos = () => {
        axios({
            url: `${base_url}photos`,
            method: "GET"
        })
            .then((res) => {
                let photo = res.data.splice(1, 50)
                this.setState({
                    photos: photo
                })
            })
            .catch(err => {
                return (err)
            })
    }
    openPhotoUrl = (photoUrl) => {
        this.setState({
            selectedPhoto: photoUrl
        })
    }

    closePhoto = () => {
        this.setState({
            selectedPhoto: ""
        })

    }

    render() {
        console.log(this.state)
        return (
            <div>
                <ul>
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/gallery"> <li>Gallery</li></Link>
                </ul>
                <Switch>
                    <Route path="/gallery" render={() => {
                        return (
                            <Gallery
                                closePicture = {this.closePhoto}
                                popupPhoto={this.state.selectedPhoto}
                                photoList={this.state.photos}
                                openPhoto={this.openPhotoUrl}
                            />)
                    }} />
                </Switch>
            </div>
        )
    }
}