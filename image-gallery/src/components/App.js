import React from 'react'
import flickr from '../api/flickr'
import SearchBar from './SearchBar/SearchBar'
import SaveTerm from './SaveTerm/SaveTerm'
import ImageList from './ImageList/ImageList'

const KEY = 'bac9f1ccfd854f27894fd47c4f01b1e8';

class App extends React.Component {

    state = {
        images: [],
        term: String
    }


    onSearchSubmit = async (term) => {
        this.setState({ term });
        if (!term) this.setState({ images: [] });
        else {
            const res = await flickr.get(`/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=${KEY}&content_type=1&is_getty=1&per_page=100`, {
                params: { text: term }
            });
            
            this.setState({ images: res.data.photos });
            
        }
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <SaveTerm txt={this.state.term} onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div >

        );
    }
}

export default App;