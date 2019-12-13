import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUsername } from '../../../redux/user/userSelectors';

function Confirmtion({ username }) {
  return (
    <h1>Welcome, {username}! Rest of website to be completed if hired!</h1>
  );
}

const mapStateToProps = createStructuredSelector({
  username: selectUsername
});

export default connect(mapStateToProps)(Confirmtion);
