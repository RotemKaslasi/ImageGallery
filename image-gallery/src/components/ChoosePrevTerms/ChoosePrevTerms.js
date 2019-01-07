import React from 'react'
import './ChoosePrevTerms.css'

class ChoosePrevTerms extends React.Component {

    constructor(props) {
        super(props);
        this.checkBox = React.createRef();
    }

    onSelecteTerm = () => {
        this.props.onSubmit(this.props.previousTerm);
    }

    render() {
        return (


            <div className="boxes">
                <input type="checkbox" ref={this.checkBox} name={this.props.previousTerm} value={this.props.previousTerm} onClick={this.onSelecteTerm} id={this.props.previousTerm} />
                <label htmlFor={this.props.previousTerm} className="previousTerm-title">{this.props.previousTerm}</label>
            </div>
       )
    }
}

export default ChoosePrevTerms;