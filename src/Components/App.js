import SearchInput from './SearchInput';
import { useState } from 'react';
import GetImages from './GetImages';
import ImagesList from './ImagesList';
const App = () => {

    const [ imageList, setImageList ] = useState([]);

    const handleSearchTerm = async ( term ) => {
        setImageList(await GetImages(term));
    }


    return (
        <>
            <SearchInput handleSearchTerm = { handleSearchTerm } />
            <ImagesList imageList = { imageList } />
        </>
    )
}

export default App;