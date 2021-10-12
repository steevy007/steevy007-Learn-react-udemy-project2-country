import React, { Component } from 'react'
import Titre1 from '../../components/titres/titreh1'
import Btn from '../../components/Buttons/Button'
import axios from 'axios'
import Pays from './Pays/Pays'
import Spinner from '../../components/Spinner/spinner'
export default class PaysManger extends Component {
    state = {
        listePays: [],
        isLoading: false,
        regionSelected:null,
        numeroPageActuel:1
    }

    componentDidMount = () => {
       this.handleSelectPaysByRegion('all')
    }


    handleSelectPaysByRegion=(region)=>{
        let param=''
        if(region==='all')param='all'
        else param=`region/${region}`
        this.setState({
            isLoading: true
        })
        axios.get(`https://restcountries.com/v3.1/${param}`)
            .then(response => {
                let object = response.data.map((value) => {
                    return {
                        nom: value.name.official,
                        capital: value.capital,
                        population: value.population,
                        drapeau: value.flags.png,
                        region: value.region
                    }
                })
                this.setState({
                    listePays: Object.values(object),
                    isLoading: false,
                    regionSelected:region,
                    numeroPageActuel:1
                })
                //console.log(this.state.listePays)
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {
        let pagination=[]
        let listePays=''
        if(this.state.listePays){
            let fin=this.state.listePays.length/10
            if(this.state.listePays.length%10!==0)fin++
            for(let i=1;i<=fin;i++){
                pagination.push(<Btn text={i} key={i} color="btn-primary" click={()=>this.setState({numeroPageActuel:i})} estSelection={this.state.numeroPageActuel===i} />)
            }
            const debut=(this.state.numeroPageActuel-1)*10
            const finListe=(this.state.numeroPageActuel-1)*10+10
            const listeReduite=this.state.listePays.slice(debut,finListe)

            listePays=listeReduite.map((value, key) => {
                return (
                    <div key={key} className="col-12 col-md-6">
                        <Pays  {...value} {...this.props} solo={true} />
                    </div> 
                )
            })
        }
        return (
            <div className="container">
                <Titre1 text='Listes des pays du monde' />
                <Btn text='Tous' color='btn-dark ' estSelection={this.state.regionSelected==='all' } click={(region)=>this.handleSelectPaysByRegion('all')}/>
                <Btn text='Europe' color='btn-dark' estSelection={this.state.regionSelected==='Europe'} click={(region)=>this.handleSelectPaysByRegion('Europe')}/>
                <Btn text='Afrique' color='btn-dark'  estSelection={this.state.regionSelected==='Africa'} click={(region)=>this.handleSelectPaysByRegion('Africa')} />
                <Btn text='Asie' color='btn-dark'  estSelection={this.state.regionSelected==='Asia'} click={(region)=>this.handleSelectPaysByRegion('Asia')}/>
                <Btn text='Amerique' color='btn-dark'  estSelection={this.state.regionSelected==='Americas'}  click={(region)=>this.handleSelectPaysByRegion('Americas')} css='border border-dark' />
                <Btn text='Oceanie' color='btn-dark'  estSelection={this.state.regionSelected==='Oceania'}  click={(region)=>this.handleSelectPaysByRegion('Oceania')} />
                
                Nombre Pays : <span className="badge bg-dark">{this.state.listePays.length}</span>
                {
                    this.state.isLoading ?
                        <Spinner/> :
                        <div className="row no-gutters">
                            {
                                listePays
                            }
                        </div>
                }

                <div>{pagination}</div>
            </div>
        )
    }
}
