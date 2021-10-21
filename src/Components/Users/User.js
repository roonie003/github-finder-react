import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    staticpropTypes = {
        loadong: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {
        const{
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hirerable
        } = this.props.user;

        const { loading } = this.props;

        if (loading) return <Spinner />;

        return (
            <Fragment>
                <Link to ='/' className='btn btn-light'>
                    Back to Search
                </Link>
               
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img "  alt="" 
                        style ={{width: '150px'}}/>
                    </div>
                </div>
                

            </Fragment>
        );
        
    }
}

export default User
