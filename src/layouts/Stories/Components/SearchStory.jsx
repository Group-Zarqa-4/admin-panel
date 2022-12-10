/* eslint-disable */

import React from 'react'
import { Search } from '@mui/icons-material';

function SearchStory() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col w-25 h-25">
                 <Search className='mx-2'/>
                <input className='ml-2 fs-6 text-center' type="search" name="search" id="search" placeholder='search for a story' />
                </div>
                </div>
        </div>
    )
}

export default SearchStory