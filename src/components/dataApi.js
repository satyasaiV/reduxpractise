import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDataApi } from '../actions/dataActions'

export class DataApi extends Component {
    componentWillMount(){
        this.props.fetchDataApi();
    }
    gettingHit(){
      console.log(this.props)
    }
  render() {
      const city = this.props.hit.city
    return (
      <div>
        <h1>{city}</h1>
        <button onClick={this.gettingHit.bind(this)}>hello</button>
      </div>
    )
  }
}
DataApi.propTypes = {
    fetchDataApi: PropTypes.func.isRequired,
    datas : PropTypes.object.isRequired,
    hit : PropTypes.object
  };
  
const mapStateToProps = state => ({
    datas : state.datas.datas,
    hit : state.datas.hit,
  });

export default  connect(mapStateToProps, {fetchDataApi} )(DataApi)

