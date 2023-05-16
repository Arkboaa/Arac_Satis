import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class Car extends Component {
  state = {
    isVisible : false
  }
  static defaultProps = {
    marka : "Belirtilmedi",
    model : "Belirtilmedi",
    yil : "Belirtilmedi"
  }
  
  onClickEvent = (e) =>{
    
    this.setState({
      isVisible : !this.state.isVisible
    })
  }
  render() {
    const {marka,model,yil} = this.props;
    const {isVisible} = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline' style={{cursor:"pointer"}} onClick={this.onClickEvent}>{marka}</h4>
            <i className='far fa-trash-alt' style={{cursor : "pointer"}}></i>
          </div>
          {
            isVisible ? <div className='card-body'>
            <p className='card-text'>Marka : {marka}</p>
            <p className='card-text'>Model : {model}</p>
            <p className='card-text'>Yil : {yil}</p>
          </div> : null
          }
        </div>
      </div>
    )
  }
}
Car.propTypes = {
    marka : PropTypes.string.isRequired,
    model : PropTypes.string.isRequired,
    yil : PropTypes.string.isRequired
}
export default Car;