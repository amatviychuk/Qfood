import React from 'react';
import './MenuBlock.css';
import arrow from '../icons/up-arrow.png';

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
            case 'small_title':
               return (
               <div className='small_name_block' key={i}>
                  <span className="small_name">{line['text']}</span>
               </div>
               );

            case 'meal':
               return (
               <div key={i} className="meal_block">
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

      console.log(arrow);

      return (


         <div className='block' id={this.props.block['name']}>
            <div onClick={openClose} className='block_name'>
               {this.props.block['name']} 
               <img className={this.state.isOpen?"arrow rot":"arrow"} src={arrow} alt=""/> 
            </div>
            {this.state.isOpen?renderBlock:null}
         </div>
      );
   }
}

export default MenuBlock;