import React, {Component} from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

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

    // ดึงข้อมูล real time มาจาก axios
    fetchCryptocurrencyData() {
        // ทำการส่ง get request ไปที่ api
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
        // ให้มันส่งค่ากลับมา โดย then
        .then(response => {
            let wanted = ["bitcoin", "ethereum", "litecoin"];
            // เรา filter เหรียญทั้ง 3 ด้วย id ของมัน
            // includes เป็นการเช็คว่า wanted และ currency.id มีตัวแปรตรงกันหรือเปล่า
            let result = response.data.filter(currency => wanted.includes(currency.id));
            // ทำการ update ข้อมูล
            this.setState({data: result})
        })
        // ถ้ามี error ให้ return ออกมาทาง console 
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        // เก็บ funtction setInterval ซึ่งเป็น function ใช้ set เวลาให้ refrash ข้อมูลใหม่ทุกๆ 0.6s = 60*10
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60*10);
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