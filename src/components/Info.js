import React from 'react';
import './Info.css';
import text from '../text.json';

class Info extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            language: null, 
            loading: false
        };
    }

    getGeoInfo() {
        this.setState({loading: true})
        fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then((jsonData) => {
            switch (jsonData.country_code) {
                case "PL":
                    this.setState({language: "PL"});
                    break;
                case "UA":
                    this.setState({language: "RU"});
                    break;
                default:
                    this.setState({language: "EN"});
                    break;
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }


    render () {
        if (this.state.language != null) {
            const data = text.texts.find(t => t.name === "info_page").text.find(text => text.language === this.state.language);
            console.log(data);
            return(
                <div className="container">
                    <div className="green_csreen">
                        <div className="green_csreen_row">
                            <span className="site">q-food.co</span>
                            <div className="this_is_easy">{data.this_is_easy}</div>
                        </div>
                    </div>
                    {/* <div className="create_with_us_container">
                        <div className="create_with_us">{data.create_with_us}</div>
                    </div> */}
                </div>
            );
        } else {
            if (!this.state.loading) this.getGeoInfo();
            return("WAIT...");
        }
    }
}

export default Info;