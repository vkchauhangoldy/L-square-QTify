import { useState } from 'react';
import './AlbumTable.css';
import TablePagination from '../TablePagination/TablePagination';



const AlbumTable = (props) => {

    const [ allSongs, setAllSongs ] = useState(props.songs)
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 10;

    const firstIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = currentPage * entriesPerPage;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };

      const currentPageData = allSongs.slice(firstIndex, endIndex)

    return (
        <div className='albumTable'>
            <div>
                <TablePagination handleClick = {handlePageChange} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Duration</th>
                    </tr>
                </thead>

                <tbody>
                    {currentPageData.map((elem) => (
                        <tr key={elem.id}>
                            <td>{elem.title}</td>
                            <td>{elem.artists}</td>
                            <td>{(elem.durationInMs / 6000).toFixed(2)} min</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlbumTable;
