import React from 'react';
import constituencyArea from './constituenciesArea';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import SmallCard from '../public-child/SmallCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        constituencyArea: {
            lineHeight: '24px',
            '&:hover': {
                color: '#aaa'
            },
            backgroundColor: '#cacbcc',
            padding: theme.spacing(2),
            margin: theme.spacing(1),
            cursor: 'pointer'
        },
        title: {
            lineHeight: '24px',
            display: 'inline-flex',
            '& a': {
                color: 'black'
            }
        }
    })
);

interface County {
    match: {
        params: {
            county: string;
        };
    };
}

interface Constituency {
    name: string;
}

const ConstituencyPage: React.FunctionComponent<County> = ({ match }) => {
    const county = match.params.county;
    console.log(match);
    const constituencyNames = Object.keys(constituencyArea).filter(
        constituency => constituency.startsWith(county)
    );
    const classes = useStyles();
    return (
        <>
            <div className={classes.title}>
                <Link to={`/regionals`}>
                    <NavigateBefore />
                </Link>
                <div>選區找立委</div>
            </div>
            <Grid container>
                {constituencyNames.map(name => (
                    <ConstituencyCard name={name} key={name} />
                ))}
            </Grid>
        </>
    );
};

const ConstituencyCard: React.FunctionComponent<Constituency> = ({ name }) => {
    const area = Object.keys(constituencyArea[name]).join('、');
    return (
        <>
            <Grid item xs={6} key={area}>
                <SmallCard
                    target={`/regionals/${name.slice(0, 3)}/${area}`}
                    title={name}
                    subtitle={area}
                ></SmallCard>
            </Grid>
        </>
    );
};

export default ConstituencyPage;
