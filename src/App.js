import propTypes from 'prop-types';
import React, { Component } from 'react';
// import LoaderHOC  from './hoc/loader';
import Emp from './emp';
import { BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom';

// import './App.css';
import Home from './home';
import Login from './login';

// import logo from './logo.svg';
// import ReactDOM from 'react-dom';


// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
    state  = {
        emps:[
            {id:101,name:'Ankit Jasoliya',salary:5000},
            {id:102,name:'Uday Katrodiya',salary:5000},
            {id:103,name:'Nishan Vaghani',salary:5000},
            {id:104,name:'Nilesh Dabhi',salary:5000},
            {id:105,name:'Nikunj Hapani',salary:5000}
        ]
    };

    delEmp = (index, e) =>{
        const copyemps = Object.assign([],this.state.emps);
        copyemps.splice(index,1);
        console.log(copyemps + '11121121');
        this.setState({emps:copyemps});
    };

  //   constructor(props){
  //
  //     super(props);
  //     // this.state = {
  //     //     count:0
  //     // };
  //     this.state = {
  //         items:['Item 1...','Item 2...','Item 3...','Item 4...']
  //     };
  //
  //     this.eventhandleadd = this.eventhandleadd.bind(this);
  //
  //     // this.state = {
  //     //     data:''
  //     // };
  //     //
  //     // this.clearInput  = this.clearInput.bind(this);
  // }

  //   eventhandleadd(){
  //       var newItems = this.state.items.concat([prompt('Create New Item')]);
  //       this.setState({
  //           items:newItems
  //       });
  // }

  // eventhandleremove(i){
  //     var newItems = this.state.items.slice();
  //     newItems.splice(i,1);
  //     this.setState({items:newItems});
  // }
    // btnClick(){
    //   this.setState({
    //      count : this.state.count + 1
    //   });
    // }

    // updatevalue(e){
    //     this.setState({
    //         data:e.target.value
    //     });
    // }


    // clearInput(){
    //     this.setState({
    //        data:''
    //     });
    //     ReactDOM.findDOMNode(this.refs.myText).focus();
    // }

  render() {
      // var items = this.state.items.map(function (item,i) {
      //   return (
      //       <div key={item} onClick={this.eventhandleremove.bind(this,i)}>
      //           {item}
      //       </div>
      //   )
      // }.bind(this));
    //console.log('111');
    return (
       <Router>
        <div>
            {/*<button onClick={this.eventhandleadd}>Add Item</button>*/}
            {/*<h1>Value: {this.state.count}</h1>*/}
           {/*<br/>*/}
            {/*<button onClick={this.btnClick.bind(this)}>Increment By 1</button>*/}
            {/*<input value = {this.state.data} onChange = {this.updatevalue.bind(this)} type="text"  ref="myText" />*/}
            {/*<h4>{ this.state.data }</h4>*/}
            {/*<button onClick = {this.clearInput}>Clear</button>*/}
            {/*<div>*/}
                <h2>Welcome to React Router Tutorial</h2>
                <ul>
                    <li><Link to = '/' >Home</Link></li>
                    <li><Link to = '/login' >Login</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                </Switch>
                <table>
                    <tbody>
                        {
                            this.state.emps.map((emp)=>{
                                // return (<Emp salary={emp.salary} key={emp.id} deleteEvent={this.delEmp.bind(this,id)} >{emp.name}</Emp>)
                                return (<Emp salary={emp.salary} key={emp.id} >{emp.name}</Emp>)
                            })
                        }
                    </tbody>
                </table>
            {/*</div>*/}
            {/*<ReactCSSTransitionGroup transitionName='example'*/}
               {/*transitionAppear = {true} transitionAppearTimeout ={2000}*/}
                                     {/*transitionEnter={false} transitionLeave={false} >*/}
                {/*{items}*/}
            {/*</ReactCSSTransitionGroup>*/}
            {/*<ReactCSSTransitionGroup transitionName='example'*/}
                                     {/*transitionEnterTimeout={500} transitionLeaveTimeout={500} >*/}
                {/*{items}*/}
            {/*</ReactCSSTransitionGroup>*/}

        </div>
       </Router>
    );

  }
}

// export default LoaderHOC ('emps')(App) ;
export default App ;
