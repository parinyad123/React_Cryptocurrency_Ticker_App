import React, {Component} from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';

class Tickers extends React.Component {
    // constructor จะถูกเรัยกเมื่อ component ถูกสร้างขึ้นมา
    // propoty ของมันสามารถส่งไปหา comonent ใดๆก็ได้
    constructor(props) {
        super(props) ;
        // state คือ ข้อมูลที่ component สามารถเก็บไว้
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                }
            ]
        };
    }

    render() {
        // map ใช้ วน loop array เก็บไว้ใน currency
        let tickers = this.state.data.map((currency) =>        
            <Cryptocurrency data={currency} key={currency.id} /> 
        );
        return (
            <div className="Tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>Information updated every minute courtesy of coinmarketcap.com</p>
            </div>
        );

    }
}


export default Tickers;