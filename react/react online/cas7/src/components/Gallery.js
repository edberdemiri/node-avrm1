import React from 'react'
import {PopUp} from './PopUp'

export function Gallery(props) {
    return (
        <div id="Gallery">
            <h2>Gallery</h2>
            {props.photoList.map((photo, i) => {
                return (
                    <div key={photo.id} className="image-holder"
                        onClick={() => {
                            props.openPhoto(photo.url)
                        }}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )
            })}
            {props.popupPhoto !== "" ?
                <PopUp 
                photoUrl={props.popupPhoto}
                zatvoriSlika={props.closePicture}
                />
                : null}
        </div>
    )
}