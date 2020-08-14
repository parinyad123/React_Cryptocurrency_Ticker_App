import React from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends React.Component {
	render() {
		var {
			id,
			name,
			symbol,
			price_usd,
			percent_change_1h,
			percent_change_24h,
			percent_change_7d,
		} = this.props.data;
		return (
			<li className={'Cryptocurrency' + id}>
				<p className="Cryptocurrency-name">
					{name} ({symbol})
				</p>
				<h1>${(+price_usd).toFixed(2)}</h1>
				{/*toFixed คือ function ที่ใช้แสดงเลขทศนิยมตามเลขที่ระบุใน () */}
				<p>{percent_change_1h}% 1hr</p>
                <p>{percent_change_24h}% 24hr</p>
                <p>{percent_change_7d}% 7d</p>
			</li>
		);
	}
}

export default Cryptocurrency;
