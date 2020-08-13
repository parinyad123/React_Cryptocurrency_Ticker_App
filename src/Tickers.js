import React, {Component} from 'react';
import './Tickers.css';

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
                    price: "1"
                },
                {
                    id: "ethereum",
                    price: "1"
                },
                {
                    id: "litecoin",
                    price: "1"
                }
            ]
        };
    }

    render() {
        // map ใช้ วน loop array เก็บไว้ใน currency
        let tickers = this.state.data.map((currency) =>        
            <li key={currency.id}>
                <h3>{currency.id}</h3>
                <h4>{currency.price} USD</h4>
                <p>Information updated every minute
                </p>
            </li>    
        );
        return (
            <div className="Tickers-container">
                <ul className="tickers">{tickers}</ul>
            </div>
        );

    }
}


export default Tickers;