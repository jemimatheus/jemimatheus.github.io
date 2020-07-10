import React, { Component } from 'react';
import api from '../../services/api/api'
import '../../styles.css'
import './biography.css'


class Biography extends Component {
state = {
    biography:{}
}
async componentDidMount(){
    const {id} = this.props.match.params;

const response = await api.get(`/biography/${id}`)
this.setState({ biography: response.data })
}

    render () {
        const {biography} = this.state;
        return (
            <div className="biography-info">
                <h1>{biography.nome}</h1>
                <p className="biography-description">{biography.description}</p>
                <div className="read-more"><a href={biography.url}>Leia mais</a></div>
            </div>
        )
    }
}



export default Biography;