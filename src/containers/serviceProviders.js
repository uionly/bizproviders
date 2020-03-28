import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProviders} from '../actions/index';

class ServiceProviders extends Component {
  componentWillMount(){
     this.props.fetchProviders();
  }
  render() {
    console.log( this.props);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({serviceProviders}) {
  return {serviceProviders};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchProviders}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceProviders);