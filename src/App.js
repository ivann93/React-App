import React, { Component } from 'react';

//Za da se konektira komponentata so store-ot povikuvame connect od react-redux
//Vo ovoj file najzdole imame mapStateToProps i mapDispatchToProps
//mapStateToProps - ovozomozuva komponentata da se subscrib-ne na redux state
//mapDispatchToProps - ovaa funkcija koristi dispatch parametar za da gi povrze actions
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from './Modal';


class App extends Component {
  constructor(){
    super();
    this.state={
      showModal: false,
      modal: {
        title: "",
        body: ""
      },
      data:[
        {
          id:1,
          name: 'book1',
          status: 'available', 
        },
        {
          id:2,
          name: 'book2',
          status: 'taken',
        },
        {
          id:3,
          name: 'kkrrrr2',
          status: 'taken',
        },
        {
          id:4,
          name: 'fafafa',
          status: 'available',
        }
      ],

        filter: "",
        value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChange2(event) {
    this.setState({filter: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  // selectSub(e){
  //   e.preventDefault();
  //   alert('dsadad');
  // }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      showModal: true,
      modal: {
        title: e.target.innerHTML,
        body: "You clicked on " + e.target.innerHTML
      }
    });
  }  

  closeModal = (e) => {
    this.setState({
      showModal: false
    });
  }


  simpleAction = (event) => {
   this.props.simpleAction();
  }


  render() {
      const { filter, data } = this.state;
      const lowercasedFilter = filter.toString().toLowerCase();
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedFilter)
        );
      });

    return (
        <div className={"container" + (this.state.showModal ? " modal-open" : "")}>
          {this.state.showModal ?<div class="modal-backdrop fade show"></div>:null}
          <div className={"modal fade" + (this.state.showModal ? " show d-block" : "")} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{this.state.modal.title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {this.state.modal.body}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

            <div className="forma">
              <form onSubmit={this.handleSubmit}>
                  <label> <br />
                    Show: <br />
                      <select value={this.state.value} onChange={this.handleChange} className="btn btn-light">
                        <option value="">All Books</option>
                        <option value="available">Available Books</option>
                        <option value="taken">Taken Books</option>
                      </select> 
                  </label>
                  <br />
              </form>
            </div>
            <br />

            <input value={filter} onChange={this.handleChange2} placeholder="Search your book.." />
            <br />
            <br />
            <div className="flex-container">
                {
                  filteredData.map((dynamicData,i)=>
                    (dynamicData.status === this.state.value || this.state.value === "") ? (<div key={i} className={`bookName ${dynamicData.status === 'taken' ? 'red' : 'green'}`}>
                      <a href="" onClick={this.handleClick}>{dynamicData.name}</a>
                    </div>) : null
                  )

                }
            </div>
            <br />

            <div className="aside">
              <h2>What?</h2>
              <p>Book Management App</p>
              <h2>Where?</h2>
              <p>Sourcico</p>
              <h2>Functions?</h2>
              <p>You can see available and taken books.</p>
            </div>
            <br />

            <div className="redux">
               <pre>
                {
                  JSON.stringify(this.props)
                }
                </pre>
               <button onClick={this.simpleAction}>Test redux action</button>
            </div>
            <br />

        </div>
    );

  }

}


const mapStateToProps = state => ({
 ...state
})


const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})




export default connect(mapStateToProps, mapDispatchToProps)(App);
