import React from 'react';
import countyConstituency from './county_constituency.json';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const counties = countyConstituency.map(county => county.name);
const Constituency = () => {
    return (
        <>
            <Box my={2} mx={1}>
                <Typography variant="h6">選擇選區</Typography>
            </Box>
            {counties.map(county => (
                <Link to={`/regional/${county}`} key={county}>
                    <Box px={1} py={2} borderBottom={1} borderColor="grey.100">
                        <Typography variant="button">{county}</Typography>
                    </Box>
                </Link>
            ))}
        </>
    );
};

export default Constituency;
