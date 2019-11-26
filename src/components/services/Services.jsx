import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-photo-gallery';
import * as photoActions from "../../actions/photoAction";

class Services extends React.Component {
  componentWillMount() {
    this.props.photoActions.getServicesPagePhotos();
  };

  _renderImageLeftComponent() {
    const { servicesPageImages = [] } = this.props;
    const element = (<div className='services-body'>
      <div>
        <div className="row">
          <div>
            <div className="column-left">
              <div className="image">
                <Gallery photos={servicesPageImages} direction="column"/>
              </div>
            </div>
            <div className="column-right">
              <div className="price-description">
                Wedding<br/>
                The Engagement Session ~ $150*<br/>
                1-2 hour photo session on location<br/>

                Edited images delivered via online gallery within 2 weeks<br/>

                Online gallery for viewing, sharing, and downloading<br/>

                *This session is complimentary when you book your wedding at the same time<br/>
              </div>
              <div>
                <Link to='/contact'>
                  <button className="service-button">
                    Enquiry
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
    return element;
  };

  _renderImageRightComponent() {
    const { servicesPageImages = [] } = this.props;
    const element = (<div className='services-body'>
      <div>
        <div className="row">
          <div>
            <div className="column-left">
              <div className="price-description">
                Wedding<br/>
                The Engagement Session ~ $150*<br/>
                1-2 hour photo session on location<br/>

                Edited images delivered via online gallery within 2 weeks<br/>

                Online gallery for viewing, sharing, and downloading<br/>

                *This session is complimentary when you book your wedding at the same time<br/>
              </div>
              <div>
                <Link to='/contact'>
                  <button className="service-button">
                    Enquiry
                  </button>
                </Link>
              </div>
            </div>
            <div className="column-right">
              <div className="image">
                <Gallery photos={servicesPageImages} direction="column"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
    return element;
  };

  render() {
    const { servicesPageImages = [] } = this.props;
    if (servicesPageImages && servicesPageImages.length === 0) return null;
    const element = (
      <div>
        <div className="contact-header">
          Your budget shouldn't determine whether or not you get the images of your dreams
        </div>
        {this._renderImageLeftComponent()}
        {this._renderImageRightComponent()}
      </div>

    );
    return element
  };
}

Services.propTypes = {
  photoActions: PropTypes.object,
  servicesPageImages: PropTypes.array
};

function mapStateToProps(state) {
  const { photos = {} } = state;
  const { servicesPageImages = [] } = photos;
  return {
    servicesPageImages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    photoActions: bindActionCreators(photoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services);