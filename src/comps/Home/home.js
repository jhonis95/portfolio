import React, { Component } from 'react';
import NavBar from './Nav/navBar.js'

class home extends Component{
    constructor(pros){
        super(pros);
        this.state={

        }
    }
    render(){
        return(
            <section className="home" id="home">
                <NavBar />
            </section>
        )
    }
}
export default home;