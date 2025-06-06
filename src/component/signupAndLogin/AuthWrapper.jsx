import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Profile_byDefault_image from '../../image/Profile_byDefault_image.webp' 
const AuthWrapper = ({ children }) => {
    const { isAuthenticated, logout, user } = useAuth0();
    if (!isAuthenticated) {
        return (
            <div style={{  textAlign:'center'}}>
                <p>Login to Access the App</p>
                <Login />
            </div>
        );
    }
    return (
        <div style={{position:'relative'}}>
            <div style={{
                position: 'absolute',
                bottom:'40px',
                left: '20px',
                padding: '-2px 2px',
                fontSize: '14px',
                cursor: 'pointer',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                width: '90%',
                height: '80px',
                backgroundColor: 'goldenrod',
                marginTop:'20px'
            }}>
                <img style={{ width: '60px', height: '60px', borderRadius: '50%', marginTop:'10px',marginLeft:'5px' }} src={user.picture?user.picture: Profile_byDefault_image.png} alt={user.name} />
            </div>
            <button
                onClick={() =>
                    logout({ returnTo: window.location.origin })
                }
                style={{
                    position: 'absolute',
                    bottom: '60px',
                    right: '20px',
                    padding: '5px 15px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                Logout
            </button>
            {children}
        </div>
    );
};
export default AuthWrapper;