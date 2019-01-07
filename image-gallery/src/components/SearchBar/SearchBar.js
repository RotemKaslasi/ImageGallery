import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        term: '',
    }

    onFormSubmit = (str) => {
        this.props.onSubmit(str);
    }

    render() {
        return (

            <header className="header-content">
                <h1 className="title-header">What Images do you want to search?</h1>

                <div className="form-search">
                    <form>
                        <input type="text" className="input-SearchBar" placeholder="Search Image"
                            value={this.state.term}
                            onChange={event => {
                                this.setState({ term: event.target.value });
                                this.onFormSubmit(event.target.value);
                            }
                            } />
                    </form>
                </div>
            </header>

        );
    }
}

export default SearchBar;