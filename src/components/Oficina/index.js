import React, { Component } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Utils from "../../utils";
import contractAddress from "../Contract";

import cons from "../../cons.js";

import querystring from 'querystring';
import sha512 from 'sha512';

var ratetrx = "";
var ratewozx = "";
var proxyUrl = 'https://proxy-wozx.herokuapp.com/';

const KEY  = cons.AK;
const SECRET  = cons.SK;

export default class WozxInvestor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ratetrx: "",
      ratewozx: "",
      datos: {},
      direccion: "",
      link: "Haz una inversión para obtener el LINK de referido",
      registered: false,
      balanceTrx: "0",
      withdrawnTrx: "0",
      investedWozx: "0",
      withdrawnWozx: "0"

    };

    this.Investors = this.Investors.bind(this);
    this.Link = this.Link.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.rateWozx = this.rateWozx.bind(this);
    this.comprarWozx = this.comprarWozx.bind(this);
    this.rateTRX = this.rateTRX.bind(this);
    this.venderTRX = this.venderTRX.bind(this);
    
    
  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
    this.Investors();
    this.Link();
    setInterval(() => this.Investors(),10000);
    setInterval(() => this.Link(),10000);
  };

  async rateTRX(){

    function esTrx(cripto) {
          return cripto.symbol === 'TRX';
      }

    const USER_AGENT = 'stevenSTC';
    let header1 = {
      'Access-Control-Allow-Origin' :'*',
      'User-Agent' : USER_AGENT,
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
    };
    await fetch(proxyUrl+'https://data.gateio.life/api2/1/marketlist',{method: 'GET', headers: header1})
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      ratetrx = data.data.find(esTrx).rate; 
      ratetrx = parseFloat(ratetrx).toFixed(6);
      ratetrx = ratetrx-ratetrx*0.01;
      ratetrx = ratetrx.toString();
      //console.log(ratetrx);
    })
    .catch(error => console.log('Error:', error));

    this.setState({
      ratetrx: ratetrx
    });

  }

  async venderTRX(){    

    await this.rateTRX();
    
    let amount = "40";
    let currencyPair = "trx_usdt";

    let body = querystring.stringify({'currencyPair':currencyPair,'rate':ratetrx,'amount':amount});

    let header = {'Content-Type': 'application/x-www-form-urlencoded'};

    var hasher = sha512.hmac(SECRET);
    var hash = hasher.finalize(body);
    var firma = hash.toString('hex');

    header.KEY = KEY;
    header.SIGN = firma;
    await fetch(proxyUrl+'https://api.gateio.life/api2/1/private/sell/',{method: 'POST', headers: header, body:body })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log('Error:', error));
    

  }

  async rateWozx(){

    function esWozx(cripto) {
          return cripto.symbol === 'WOZX';
      }

    const USER_AGENT = 'stevenSTC';
    let header1 = {
      'Access-Control-Allow-Origin' :'*',
      'User-Agent' : USER_AGENT,
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
    };
    await fetch(proxyUrl+'https://data.gateio.life/api2/1/marketlist',{method: 'GET', headers: header1})
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      ratewozx = data.data.find(esWozx).rate; 
      ratewozx = parseFloat(ratewozx).toFixed(6);
      ratewozx = ratewozx+ratewozx*0.01;
      ratewozx = ratewozx.toString();
      //console.log(ratewozx);
    })
    .catch(error => console.log('Error:', error));

    this.setState({
      ratewozx: ratewozx
    });

  }

  async comprarWozx(){    

    await this.rateWozx();
    
    let amount = "1";
    let currencyPair = "wozx_usdt";

    let body = querystring.stringify({'currencyPair':currencyPair,'rate':ratewozx,'amount':amount});

    let header = {'Content-Type': 'application/x-www-form-urlencoded'};

    var hasher = sha512.hmac(SECRET);
    var hash = hasher.finalize(body);
    var firma = hash.toString('hex');

    header.KEY = KEY;
    header.SIGN = firma;
    await fetch(proxyUrl+'https://api.gateio.life/api2/1/private/buy/',{method: 'POST', headers: header, body:body })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log('Error:', error));
    

  }

  async Link() {
    const {registered} = this.state;
    if(registered){

      let loc = document.location.href;
      if(loc.indexOf('?')>0){
        loc = loc.split('?')[0]
      }
      let mydireccion = await window.tronWeb.trx.getAccount();
      mydireccion = window.tronWeb.address.fromHex(mydireccion.address)
      mydireccion = loc+'?ref='+mydireccion;
      this.setState({
        link: mydireccion,
      });
    }else{
      this.setState({
        link: "Haz una inversión para obtener el LINK de referido",
      });
    }
  }
    

  async Investors() {

    let direccion = await window.tronWeb.trx.getAccount();
    let esto = await Utils.contract.investors(direccion.address).call();
    this.setState({
      direccion: window.tronWeb.address.fromHex(direccion.address),
      registered: esto.registered,
      balanceTrx: parseInt(esto.balanceTrx._hex)/1000000,
      withdrawnTrx: parseInt(esto.withdrawnTrx._hex)/1000000,
      investedWozx: parseInt(esto.investedWozx._hex)/1000000,
      withdrawnWozx: parseInt(esto.withdrawnWozx._hex)/1000000
    });

  };

  async withdraw(){
    await Utils.contract.withdraw().send()
  };


  render() {
    const { balanceTrx, withdrawnTrx, investedWozx,  withdrawnWozx , direccion, link} = this.state;

    return (
      
      <div className="container">

        <header style={{'text-align': 'center'}} className="section-header">
          <h3 className="white"><span style={{'font-weight': 'bold'}}>
          My office:</span> <br></br>
          <span style={{'font-size': '18px'}}>{direccion}</span></h3><br></br>
          <h3 className="white" style={{'font-weight': 'bold'}}>Referral link:</h3>
          <h6 className="white" ><a href={link}>{link}</a>&nbsp;<br></br><br></br>
          <CopyToClipboard text={link}>
            <button type="button" className="btn btn-info">Copy to clipboard</button>
          </CopyToClipboard>
          </h6>
          <hr></hr>
          
        </header>

        <div className="row centrartexto">

          <div className="col-five">
          
              <h1 className="subhead">Balance</h1>
              <h3 className="display-2--light">{investedWozx} WOZX</h3>
              <hr></hr>
            
          </div>

          <div className="col-seven">
            
              <h1 className="subhead">Withdrawn</h1>
              <h3 className="display-2--light">{withdrawnWozx} WOZX</h3>
              <hr></hr>
            
          </div> 
        </div>
        <div className="row centrartexto">

          <div className="col-five">
            
              <h1 className="subhead">Balance</h1>
              <h3 className="display-2--light">{balanceTrx} TRX</h3>
              <hr></hr>
            
          </div>

          <div className="col-seven">
            
              <h1 className="subhead">Withdrawn</h1>
              <h3 className="display-2--light">{withdrawnTrx} TRX</h3>
              <hr></hr>
            
          </div>
          
        </div>

      </div>
    



    );
  }
}
