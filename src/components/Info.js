import React from 'react';
import './Info.css';
import Menu_with_arrow from '../icons/menu_with_arrow.png';
import Try_here from '../icons/try_here.png';

class Info extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="logo">q-food.co</div>
                <span className="sp">Создайте электронное меню вместе с q-food!</span>
                <span className="sp">Разместите ссылку на свой персональный сайт с меню на Ваших страницах в соц сетях, брендированых предметах или столиках, а посетители смогут удобно ознакомиться с ним на своих смартфонах.</span>
                <img className="menu_img" src={Menu_with_arrow} alt=""/>
                <div className="we_offer">Мы предоставляем:</div>
                <div className="numberCircle">1</div>
                <span className="sp">Создание сайта электронного меню на платформе q-food.</span>
                <div className="numberCircle">2</div>
                <span className="sp">Печать ламинированных QR-кодов в нужном количестве.</span>
                <div className="numberCircle">3</div>
                <span className="sp">Техническая поддержка и обновление информации в меню — изменения цены, позиций, состава блюд.</span>
                <img src={Try_here} className="try_here" alt=""/>
                <span className="link">www.q-food.co/breadstreet</span>
                <span className="call_me">Оставить заявку:</span>
                <span className="num">Viber/Telegram: <a href="tel:+380956176146">095 617 6146</a></span>
                <span className="num">E-mail: <a href="mailto: qfood.menu@gmail.com">qfood.menu@gmail.com</a></span>
            </div>
        );
    }
}

export default Info;