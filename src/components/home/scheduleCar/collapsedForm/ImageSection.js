import React from 'react';
import * as Styles from "./ImageSection.Styles";

class ImageSection extends React.Component {

    clickHander = () => {
        this.props.selectedCar(this.props.index);
    }
    render() {
        return (
            <div>
                <Styles.ImageSection
                    alt={`card_${this.props.index}`}
                    src={require(`../../../../assets/car_pic/${this.props.carName}.JPG`)}
                    onClick={this.clickHander} />
            </div>
        )
    }
}

export default ImageSection;