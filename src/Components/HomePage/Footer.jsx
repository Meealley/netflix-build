import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Questions? Contact us.</h2>
      
      <div className="row" style={{ alignItems : "flex-start", padding: "10px 0px"}}>
        <div className="col" style={{ flexBasis : "25%", flexGrow : "1", marginBottom : "20px"}}>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>FAQ</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>Investor Relation</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>Privacy</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>Speed Test</Link>
        </div>
        <div className="col" style={{ flexBasis : "25%", flexGrow : "1", marginBottom : "20px"}}>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>Help Center</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>Jobs</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>cookie preferences</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>legal notice</Link>
        </div>
        <div className="col" style={{ flexBasis : "25%", flexGrow : "1", marginBottom : "20px"}}>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>account</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>ways to watch</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>cooperate information</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>only on netflix</Link>
        </div>
        <div className="col" style={{ flexBasis : "25%", flexGrow : "1", marginBottom : "20px"}}>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>media center</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>terms of use</Link>
          <Link to="/" style={{display : "block", textDecoration : "none", marginBottom : "10px", color : "#777"}}>contact us</Link>
        </div>
      <div style={{color : "#777"}}>
        Netflix nigeria
      </div>
      </div>
    </div>
  );
};

export default Footer;
