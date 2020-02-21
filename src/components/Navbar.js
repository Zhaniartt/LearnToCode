import React, { Component } from 'react';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
  import './Navbar.css'

class NavB extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'Admin Admin',
      initials: 'AA',
      email: 'admin@gmail.com',

    }

  }
  userLoggedIn = username => {
    this.setState({username})
  }

  render = () =>{
    // let user = sessionStorage.getItem('user')
  

    const loogedInSection = <div className="nav-link" style={{color: 'blue'}}>{this.state.initials}</div>
    
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-md navbar-light  rounded">
      <a class="navbar-brand" >
    <img src="https://softuni.bg/Files/UserFiles/ImageGallery/softuni-2.0.jpg" width="70" height="70" alt=""/>
    <a className="navbar-brand" >SoftUni</a>
      </a>

        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">About us <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/curriculum">Curriculum</a>
              </li>
              <li className="nav-item">
                <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <a><DropdownToggle className="nav-link" nav caret>Trainings</DropdownToggle></a>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>You can learn</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>C#</DropdownItem>
                  <DropdownItem>JavaScript</DropdownItem>
                  <DropdownItem>PHP</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </li>
              <li className="nav-item">
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <a><DropdownToggle className="nav-link " nav caret>Proffesions</DropdownToggle></a>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>You can work</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Developer</DropdownItem>
                  <DropdownItem>QA</DropdownItem>
                  <DropdownItem>Digital Marketing</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/certificates">Certificates</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/careers">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fees">Fees</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              
            </ul>
            <ul className="nav navbar-nav ml-auto">

              <li className="nav-item">
              <a class="nav-item" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> {this.state.username ? loogedInSection : null}</a>
						<div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
              <div className="profile-wrapper">
              <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" width="100px" height="100px;"></img>
                  <div className="name-section">
                      <p>{this.state.username}</p>
                      <div className="temp-info">
                      {this.state.email}
                  <button type="button" class="btn btn-outline-primary">MY SOFTUNI ACCOUNT</button>
                      </div>
                  
                  </div>
                  <i className="fas fa-user-crown"></i>
              </div>
              <div className="botton-wrapper">
              <div>
							<a class="dropdown-item" href="#">Profile</a>
              <i class="fa fa-user fa-login" aria-hidden="true"></i>
              </div>
              <div>
							<a className="dropdown-itemIcon" href="#">Sign out</a>
              <i class="fa fa-user fa-login" aria-hidden="true"></i>
              </div>
              </div>
           
						</div>
              </li>
            </ul>


          </div>
        </div>
      </nav>
    </div>
    )
  }
}

export default NavB;