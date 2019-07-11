import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

const useStyles = (theme: Theme) => ({
    constituencyArea: {
        lineHeight: '36px',
        '&:hover': {
            color: '#aaa'
        },
        backgroundColor: '#cacbcc',
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        cursor: 'pointer'
    },
    title: {
        lineHeight: '24px'
    },
    card: {
        backgroundColor: '#cacbcc',
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        cursor: 'pointer'
    }
});

class LegislatorList extends React.Component<any, any> {
    goBack() {
        const { history } = this.props;
        history.goBack();
    }

    render() {
        console.log(this);
        const { classes } = this.props;
        return (
            <>
                <div className={classes.title}>
                    <Button onClick={this.goBack}>
                        <NavigateBefore />
                        其他選區
                    </Button>
                </div>
            </>
        );
    }
}

export default withStyles(useStyles)(LegislatorList);
