import React, { Component } from 'react'
import axios from 'axios'
import Titre1 from '../../../components/titres/titreh1'
import Pays from '../Pays/Pays'
import Spinner from '../../../components/Spinner/spinner'
export default class UnPays extends Component {
    state = {
        data: [],
        isLoading: false
    }

    componentDidMount = () => {
        this.setState({
            isLoading:true
        })
        axios(`https://restcountries.com/v3.1/name/${this.props.nomPays}`)
            .then(response => {
                this.setState({
                    data: response.data,
                    isLoading:false
                
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    isLoading:false
                })
            })
    }
    render() {
        return (
          <>
                {
                    this.state.isLoading &&
                        <Spinner /> 
                }
                {
                    this.state.data.length>0 && !this.state.isLoading && 
                        <div className="container">
                            <Titre1 text={`Page du Pays ${this.state.data[0].name.official}`} />
                            <Pays
                             nom={this.state.data[0].name.official} 
                             drapeau={this.state.data[0].flags.png} 
                             capital={this.state.data[0].capital} 
                             region={this.state.data[0].region}
                             solo={false}
                              />
                        </div>
                }
            </>
        )
    }
}
