import React from 'react';
import './MenuBlock.css';
import arrow_black from '../icons/arrow_black.png';
import arrow_white from '../icons/arrow_white.png';

class MenuBlock extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        };
        if (props.id === 0) {
         this.state = {
            isOpen:true
        };
        }
    }

    render() {


      const renderBlock = this.props.block['products'].map((line, i) => {
         switch(line['type']) {
            case 'info':
               return(
                  <div className="menu_info_block">
                     <span>{line['text']}</span>
                  </div>
               );
            case 'small_title':
               return (
                  <div className='small_name_block' key={i}>
                     <span className="small_name">{line['text']}</span>
                  </div>
               );

            case 'meal':
               return (
               <div style={{background: this.props.design.find(t => t.name === "menu_background").color}} key={i} className="meal_block">
                  {line['img']?<img className="meal_img" src={line['img']} alt=""/>:null}
                  <div className="product">
                     <div className='name_price'>
                        <span className='name'>{line['name']}</span>
                        <span className='price'>{line['price']}</span>
                     </div>
                     <div className='ingredients'>{line['description']}</div>
                  </div>
               </div>
               );

            default:
            break;
         }
         return null;
      });

      const openClose = () => {this.setState({isOpen:!this.state.isOpen})}
      const theme = this.props.design.find(t => t.name === "theme").data==='dark';

      return (


         <div className='block' style={{background: this.props.design.find(t => t.name === "menu_small").color}} id={this.props.block['name']}>
            <div style={{color: this.props.design.find(t => t.name === "menu_small_font").color}} onClick={openClose} className='block_name'>
               {this.props.block['name']} 
               <img className={this.state.isOpen?"arrow rot":"arrow"} src={theme?arrow_black:arrow_white} alt=""/> 
            </div>
            {this.state.isOpen?renderBlock:null}
         </div>
      );
   }
}

export default MenuBlock;