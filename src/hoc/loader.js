import React, {Component} from 'react';
import './loader.css';


const LoaderHOC = (propName) => (WrappedComponent) => {

    return class LoaderHOC extends Component {
        render(){
            console.log(propName);
            console.log(this.props.emps);
            if(this.props.emps){
                console.log('sdsd');
                console.log(this.props[propName]);
                return  this.props[propName].length === 0 ? <div className='loader'></div> : <WrappedComponent {...this.props} />
            }else{
                console.log('sdsd');
                return <div className='loader'></div>
            }
        }
    }
};


export default LoaderHOC;