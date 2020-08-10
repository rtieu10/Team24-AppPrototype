import React from "react";
import { DefaultDeserializer } from "v8";

interface ItemUploadState {
    image:string;
}
const list = [require('../img/cake1.jpg'), require('../img/cake2.jpg'), require('../img/cake3.jpg')];
export class ImageUpload extends React.Component<{}, ItemUploadState> {
    constructor(state:ItemUploadState)   {
        super(state);
        this.state = {image:require('../img/YS_upload.png')};
    }
    
    render()    {
        return (
            <div className = "imageUpload">
                <img src = {this.state.image} />
                <button onClick = {this.onClickButton} className = "primaryButton"> Upload </button>
            </div>
        );
    }
    onClickButton = (event: React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault();
        this.setState({image: list[Math.floor(Math.random() * list.length)]});

    };
}