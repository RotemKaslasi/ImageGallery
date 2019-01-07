import React from 'react'
import './SaveTerm.css'
import PreviousTerms from '../PreviousTerms/PreviousTerms'

class SaveTerm extends React.Component {
    state = {
        terms: JSON.parse(localStorage.getItem('terms'))
    }

    saveTermToLocal = () => {
        if (!localStorage.terms) localStorage.setItem('terms', JSON.stringify([]))
        
        let termsArr = JSON.parse(localStorage.getItem('terms'));
        termsArr.push(this.props.txt);
        this.setState({ terms: termsArr });
        localStorage.setItem('terms', JSON.stringify(termsArr));
    }

    render() {
        return (
            <div className="savetxt">
                <button onClick={this.saveTermToLocal} className="saveTerm-btn" ><i className="far fa-star"></i><span className="saveBtn-txt"><br/>Save Search</span></button>
                <PreviousTerms terms={this.state.terms} onSubmit={this.props.onSubmit}/>
            </div>
        )
    }
};

export default SaveTerm;