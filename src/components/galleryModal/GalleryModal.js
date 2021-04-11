import React from 'react';

class GalleryModal extends React.Component {
  state = {
    imgPrefix: this.props.img,
    currentImg: 0,
  };
  handleOnClickAdd = () => {
    if (this.state.currentImg < this.props.imgCounter) {
      return this.setState((prevState) => {
        return {
          currentImg: prevState.currentImg + 1,
        };
      });
    }
  };

  handleOnClickSubtract = () => {
    if (this.state.currentImg > 0) {
      return this.setState((prevState) => {
        return {
          currentImg: prevState.currentImg - 1,
        };
      });
    }
  };

  render() {
    return (
      <div className="gallery-modal">
        <div className="gallery-header">
          <span onClick={() => this.props.setGallery(false)}>&times;</span>
        </div>
        <div className="gallery">
          <img
            src={`/images/${this.state.imgPrefix}_${this.state.currentImg}.jpg`}
          />
          <div className="pagination-buttons">
            <button onClick={this.handleOnClickSubtract} className="prev">
              Prev
            </button>
            <button onClick={this.handleOnClickAdd} className="next">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryModal;
