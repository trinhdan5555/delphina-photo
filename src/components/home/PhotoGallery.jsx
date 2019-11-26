import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import * as photoActions from '../../actions/photoAction';

// const photos = [
//   {
//     src: 'https://picsum.photos/id/1018/1000/600',
//     width: 4,
//     height: 3
//   },
//   {
//     src: 'https://picsum.photos/id/1015/1000/600',
//     width: 1,
//     height: 1
//   },
//   {
//     src: 'https://picsum.photos/id/1019/1000/600/',
//     width: 3,
//     height: 4
//   },
//   {
//     src: 'https://picsum.photos/id/1018/1000/600',
//     width: 1,
//     height: 1
//   },
//   {
//     src: 'https://picsum.photos/id/1015/1000/600',
//     width: 1,
//     height: 1
//   },
//   {
//     src: 'https://picsum.photos/id/1019/1000/600/',
//     width: 1,
//     height: 1
//   },
//   {
//     src: 'https://res.cloudinary.com/trinhdan555/image/upload/v1557328797/jessica/testFolderApi/IMG_1996.JPG_gvh7bg.jpg',
//     width: 2448,
//     height: 3264
//   }
// ];

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      viewerIsOpen: false,
    };
  }

  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
    this.props.photoActions.getHomePagePhotos();
  }

  openLightBox = (event, { photo, index }) => {
    this.setState({
      currentImage: index,
      viewerIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false,
    });
  };

  render() {
    const { viewerIsOpen, currentImage } = this.state;
    const { homePageImages = [] } = this.props;
    if (homePageImages &&  homePageImages.length === 0) return null;
    const element = (
      <div className="photo-body">
        <Gallery photos={homePageImages} direction={"column"} onClick={this.openLightBox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={homePageImages.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
    return element
  };
}

ImageGallery.propTypes = {
  photoActions: PropTypes.object,
  homePageImages: PropTypes.array
};

function mapStateToProps(state) {
  const { photos = {} } = state;
  const { homePageImages = [] } = photos;
  return {
    homePageImages,
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
)(ImageGallery);