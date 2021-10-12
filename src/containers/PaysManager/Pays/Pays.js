import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Pays(props) {
    return (
        <div className="row no-gutters border m-2">
            <div className="col-4">
                <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
            </div>
            <div>
                <h5>Nom : {props.nom}</h5>
                <div>Capital : {props.capital}</div>
                <div>Region  : {props.region}</div>
                {
                    props.solo && <NavLink to={`/pays/${props.nom}`} className="nav-link">Voir les infos du pays</NavLink>
                }
            </div>
        </div>
    )
}
