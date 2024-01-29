import React, { useState } from 'react';
import './Form.css';
import { useEffect } from 'react';
import Input from './Input';
import { useParams, useNavigate } from 'react-router-dom';
import Close from './Close';
import CoinList from '../CoinList';
import {
    Item,
    SelectIthem,
    Response,
    TIME_SERIES_MONTHLY_RESPONSE,
    Monthly_Time_Series,
} from '../types';
import { useContextHook } from '../Context';

const Form = () => {
    let [selectedCoin, setSelectedCoin] = useState<SelectIthem>({
        id: 'TSCO.LON',
        name: 'Tesco PLC',
    } as SelectIthem);
    let [list, setList] = useState<SelectIthem[]>([] as SelectIthem[]); //mixing types
    let [search, setSearch] = useState('');

    let [amount, setAmount] = useState(0);
    let [total, setTotal] = useState(0);

    let [date, setDate] = useState('');
    let [pricePerTime, setPricePerTime] = useState<Monthly_Time_Series>(
        {} as Monthly_Time_Series,
    );

    let navigate = useNavigate();
    let { API_KEY } = useContextHook();
    let BASE_URL = `https://www.alphavantage.co/query?apikey=${API_KEY}`;

    useEffect(() => {
        //price will be taken only after historical request will be made
        if (pricePerTime['4. close']) {
            setTotal(+pricePerTime['4. close'] * amount);
        }
    }, [pricePerTime, amount]);

    useEffect(() => {
        if (search) {
            fetch(`${BASE_URL}&function=SYMBOL_SEARCH&keywords=${search}`)
                .then((data) => data.json())
                .then((data: { bestMatches: Response[] }) => {
                    if (data.bestMatches) {
                        let list: SelectIthem[] = data.bestMatches.map((i: Response) => ({
                            id: i['1. symbol'],
                            name: i['2. name'],
                        }));
                        setList(list);
                    } else {
                        setList([
                            {
                                id: 'TSCO.LON',
                                name: 'Tesco PLC',
                            },
                        ]);
                    }
                });
        } else {
            setList([]);
        }
    }, [search]);
    function timeTravelHandler() {
        if (selectedCoin.id && date) {
            fetch(
                `${BASE_URL}&function=TIME_SERIES_MONTHLY&symbol=${selectedCoin.id}`,
            )
                .then((r) => r.json())
                .then((data: TIME_SERIES_MONTHLY_RESPONSE) => {
                    if (data['Monthly Time Series']) {
                        let months = data['Monthly Time Series'];
                        let DATE = new Date(date);
                        let dateStr =
                            DATE.getFullYear() +
                            '-' +
                            (DATE.getMonth() + 1).toString().padStart(2, '0');
                        let key = Object.keys(months).find((key) =>
                            key.startsWith(dateStr),
                        );

                        if (key) {
                            setPricePerTime(months[key]);
                        }
                    } else {
                        setPricePerTime({
                            '1. open': '144.2500',
                            '2. high': '147.7275',
                            '3. low': '139.7600',
                            '4. close': '146.8300',
                            '5. volume': '84274205',
                        });
                    }
                });
        }
    }

    return (
        <div className='BUY'>
            <div className='BUY-wrapper'>
                <div className='div'>
                    <div className='note'>
                        <Input
                            label=''
                            value={search}
                            type='text'
                            onChange={setSearch}
                            unit={'Search for Asset...'}
                        />
                        <CoinList
                            setter={(el) => {
                                setSelectedCoin(el);
                                setSearch(el.id);
                            }}
                            list={list}
                        />
                    </div>
                    <div>
                        <input
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <Input
                        label='amount'
                        value={amount}
                        type='number'
                        onChange={setAmount}
                        unit={'Your amount'}
                    />
                </div>
                <button onClick={timeTravelHandler}>TIME TRAVEL</button>
                <div>{total}</div>
            </div>
        </div>
    );
};

export default Form;
