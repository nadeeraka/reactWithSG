import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Search_bar from './component/search_bar';
import YT_Search from 'youtube-api-search';
import VedioList from './component/vedio_list';
const API_key = "AIzaSyDWb5bK-lq9NlMkHrYkgUTC8dG1FvmE2h0";

const root = document.querySelector('.container');



class Youtube extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {vedios:[]};

        YT_Search({ key: API_key, term: 'car' },
            (vedios) => { this.setState({ vedios }) });

    }

   

    
    render()
    {
        return(<div>
            <Search_bar />
            <VedioList vedios={this.state.vedios}/>
            
            </div>);
    }
}

ReactDOM.render(<Youtube/>,root);