import { useContext } from 'react';
import useAuth from 'hooks/useAuth';
import { UserContext } from 'providers/UserProvider';

/**
 * Higher order component used to protect
 * a page that needs authentication to access
 * data 
 * @param {Component} Component 
 */
function withAuth(Component) {
  return function ProtectedPage(props) {
    const { user } = useContext(UserContext);
    const isAuthed = useAuth();

    if (isAuthed && user) return <Component {...props} />
    return <div>loading...</div>
  }
}

export default withAuth;