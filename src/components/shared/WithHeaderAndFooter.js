import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default ComposedComponent => props => <React.Fragment>
    <Header/>
    <ComposedComponent {...props} />
    <Footer/>
</React.Fragment>

