import React from 'react'
import './css/Paginate.css'
import Icon from 'react-icons-kit'
import { arrowLeft } from 'react-icons-kit/fa/arrowLeft';
import { arrowRight } from 'react-icons-kit/fa/arrowRight';

const Paginate = props =>{
    return(
        <div className="PaginateContent">
            <button className="button">
                <div className="IconButton"><Icon icon={arrowLeft} size={15} /></div>
                <div>Chapitre Précedent</div>
            </button>
            <button className="button">
                <div className="IconButton"><Icon icon={arrowRight} size={15} /></div>
                <div>Chapitre Suivant</div>
            </button>
        </div>
    )
}

export default Paginate;