import React from 'react'
import './PreviousTerms.css'
import ChoosePrevTerms from '../ChoosePrevTerms/ChoosePrevTerms'

class PreviousTerms extends React.Component {
    // console.log(props)
    state = {
        selectedTerms: []
    }

    onSubmit = (term) => {

        var tempState = this.state.selectedTerms;
        if (tempState.includes(term)) {
            tempState = tempState.filter(SelectedTerm => SelectedTerm !== term);
        }
        else {
            tempState.push(term)
        }

        var searchQuery = tempState.join(' ')
        this.props.onSubmit(searchQuery)

        this.setState({ selectedTerms: tempState })
    }

    makeTermsList = () => {
        if (!this.props.terms) return <h4>No saved terms</h4>
        const savedTerms = this.props.terms.map(term => {
            return <ChoosePrevTerms previousTerm={term} key={term} onSubmit={this.onSubmit} />

        })
        return savedTerms;
    }

    render() {
        return (
            <div className="previousTermsBar">
                {this.makeTermsList()}
            </div>
        )
    }
}

export default PreviousTerms;

