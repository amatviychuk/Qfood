import React from 'react';
import './Info.css';
import text from '../text.json';
import info_1 from '../icons/info_1.png';
import info_2 from '../icons/info_2.png';
import info_3 from '../icons/info_3.png';
import food_back from '../icons/food_back.png';



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
                        <img src={food_back} alt="" className="food_back"></img>
                        <div className="green_csreen_row">
                            <span className="site">q-food.co</span>
                            <div className="this_is_easy">{data.this_is_easy}</div>
                        </div>
                    </div>
                    <div className="create_with_us_container">
                        <div className="create_with_us">{data.create_with_us}</div>

                        <table className="tbl">
                            <tr >
                                <th>
                                    <div className="column">
                                        <span className="block_text_name">{data.text_name_1}</span>
                                        <span className="block_text">{data.text_1}</span>
                                    </div>
                                </th>
                                <th>
                                    <img src={info_1} alt="" className="cont_img"></img>
                                </th>
                            </tr>
                            <tr>
                                 <th>
                                    <img src={info_2} alt="" className="cont_img"></img>
                                </th>
                               <th>
                                    <div className="column">
                                        <span className="block_text_name">{data.text_name_2}</span>
                                        <span className="block_text">{data.text_2}</span>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                               <th>
                                    <div className="column">
                                        <span className="block_text_name">{data.text_name_1}</span>
                                        <span className="block_text">{data.text_1}</span>
                                    </div>
                                </th>
                                <th>
                                    <img src={info_3} alt="" className="cont_img"></img>
                                </th>
                            </tr>
                        </table>



                        {/* 

                        <div className="cont_1">
                            <div className="cont_1_small">
                                <span className="cont_1_small_text">{data.text_name_1}</span>
                                <span className="cont_1_text">{data.text_1}</span>
                            </div>
                            <img src={info_1} alt="" className="cont_1_img"></img>
                        </div>

                        <div className="cont_2">
                            <img src={info_2} alt="" className="cont_2_img"></img>
                            <div className="cont_2_small">
                                <span className="cont_2_small_text">{data.text_name_2}</span>
                                <span className="cont_2_text">{data.text_2}</span>
                            </div>
                        </div>

                        <div className="cont_1">
                            <div className="cont_1_small">
                                <span className="this_easy">Это просто</span>
                                <span className="cont_1_text">Вашим посетителям больше не понадобиться ждать официанта, чтобы начать выбирать блюда.  Всего несколько секунд для сканирования кьюар кода, и все позиции вашего меню окажутся в смартфоне. </span>
                            </div>
                        </div> */}

                    </div>
                </div>
            );
        } else {
            if (!this.state.loading) this.getGeoInfo();
            return("WAIT...");
        }
    }
}

export default Info;