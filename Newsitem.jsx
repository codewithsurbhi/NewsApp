import React, { Component } from 'react'
import nopic from "../assets/images/noimage.png"

export default class Newsitem extends Component {
    render() {
        return (
            <>
                <div className="card" >
                    <img src={this.props.pic} class="card-img-top" style={{height:"200px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"100px"}}>{this.props.title.slice(0,60)+"....."}</h5>
                        <p className="card-text" style={{height:"100px"}}>{this.props.description.slice(0,80)}</p>
                        <a href={this.props.url} className="btn btn-primary">Read Full Article</a>
                    </div>
                </div>
            </>
        )
    }
}
