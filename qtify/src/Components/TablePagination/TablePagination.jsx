import * as React from 'react';
import './TablePagination.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const TablePagination = (props) => {
    return (
        <div className='tablePagination'>
            <Stack spacing={2} >

                <Pagination count={10} color="primary"  onChange={(event, page) => props.handleClick(page)}/>

            </Stack>
        </div>
    )
}

export default TablePagination