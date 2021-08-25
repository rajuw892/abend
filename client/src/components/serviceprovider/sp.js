import React, { useState } from 'react'
import './sp.css'
import {Button} from '@material-ui/core';
import GetStarted from './getstarted';

function SP() {
    const [signUp, setSignUp]  = useState(false)
    return (
        <div className="sp">
            <div className="banner">
                <div className="left">
                    <h1 className="heading">Heading of the content</h1>
                    <p className="para">paragraph for explaning the content of the heading. paragraph for explaning the content of the heading. paragraph for explaning the content of the heading</p>
                    <Button className="button" onClick={() => setSignUp(true)}>Join Now</Button>

                </div>
                
                <div className="right">
                    <img src="/hand.png" alt=""  className="image"/>
                </div>

                   {
                    signUp && <GetStarted setSignUp={setSignUp} />
                   }
                
            </div>

            <div className="section">
                <h1 className="heading">lorem ipsum dolor sit amet, consectetur</h1>
                <p className="para">lorem ipsum dolor sit amet, consectetur.<br/> lorem ipsum dolor sit amet, consectetur. <br/>lorem ipsum dolor sit amet, consectetur</p>

                <div className="two">
                    <div className="item">
                         <img src="/cube.png" alt="cube" />
                         <h2>lorem ipsum dolor sit amet</h2>
                         <p>lorem ipsum dolor sit amet, consectetur</p>
                    </div>

                    <div className="item">
                         <img src="/cube.png" alt="cube" />
                         <h2>lorem ipsum dolor sit amet</h2>
                         <p>lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="item">
                         <img src="/cube.png" alt="cube" />
                         <h2>lorem ipsum dolor sit amet</h2>
                         <p>lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className="two">
                    <div className="item">
                         <img src="/cube.png" alt="cube" />
                         <h2>lorem ipsum dolor sit amet</h2>
                         <p>lorem ipsum dolor sit amet, consectetur</p>
                    </div>

                    <div className="item">
                         <img src="/cube.png" alt="cube" />
                         <h2>lorem ipsum dolor sit amet</h2>
                         <p>lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>

            <div className="content">
                <img src="/scare.png" alt="" />
                <div>
                    <h1>Heading of the content</h1>
                    <p>lorem2015 ipsum dolor sit amet, consectetur<br/>
                    lorem2015 ipsum dolor sit amet, consectetur<br/>
                    lorem2015 ipsum dolor sit amet, consectetur<br/>
                    lorem2015 ipsum dolor sit amet, consectetur<br/>
                    lorem2015 ipsum dolor sit amet, consectetur<br/>
                    lorem2015 ipsum dolor sit amet, consectetur<br/></p>
                </div>
            </div>
            <div className="last">
                <h1>Heading of the content</h1>
                <p>Head ipsum dolor sit amet, consectetur</p>

            </div>

            <div className="scroll">
                <div className="model">
                    <img src="/black.png" alt="" />
                </div>

                <div className="model">
                    <img src="/black.png" alt="" />
                </div>

                <div className="model">
                    <img src="/black.png" alt="" />
                </div>

                <div className="model">
                    <img src="/black.png" alt="" />
                </div>

                <div className="model">
                    <img src="/black.png" alt="" />
                </div>
            </div>

            
        </div>
    )
}

export default SP