import React, { Props } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'black'
        },
        subtitle: {
            fontSize: '12px'
        }
    })
);

interface SmallCardProps {
    target: string;
    subtitle: string;
    title: string;
}

const SmallCard = ({ target, subtitle, title }: SmallCardProps) => {
    const classes = useStyles();
    return (
        <Link to={target}>
            <div className={classes.constituencyArea}>
                <div className={classes.title}>{title}</div>
                <div className={classes.subtitle}>{subtitle}</div>
            </div>
        </Link>
    );
};

export default SmallCard;
