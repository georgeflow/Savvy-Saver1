import React, { useState } from 'react';
import './Form.css';
import { useEffect } from 'react';
import Input from './Input';
import { useParams, useNavigate } from 'react-router-dom';
import Close from './Close';
import CoinList from '../CoinList';
import { Item, SelectIthem, Response } from '../types';
import { useContextHook } from '../Context';


const Form = () => {
    let [coinId, setCoinId] = useState('');
    let [selectedCoin, setSelectedCoin] = useState<SelectIthem>(
        {} as SelectIthem,
    );
    let [list, setList] = useState<SelectIthem[]>([] as SelectIthem[]); //mixing types
    let [search, setSearch] = useState('');
    let currencyId = 'USD';
    let [price, setPrice] = useState(0);
    let [amount, setAmount] = useState(0);
    let [total, setTotal] = useState(0);
    let navigate = useNavigate();
    let { assets, setAssets, API_KEY } = useContextHook();

    useEffect(() => {
        setTotal(price * amount);
    }, [price, amount]);

    function handleSelectAsset() {
        setCoinId(selectedCoin.id);
    }

    useEffect(() => {
        if (search) {
            fetch(
                `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`,
            )
                .then((data) => data.json())
                .then((data: { bestMatches: Response[] }) => {
                    let list: SelectIthem[] = data.bestMatches.map(
                        (i: Response) => ({
                            id: i['1. symbol'],
                            name: i['2. name'],
                        }),
                    );
                    setList(list);
                });
        } else {
            setList([])
        }
    }, [search])


    return (
        <div className='BUY'>
            <div className='BUY-wrapper'>
                <div className='div'>
                    <header className='header'>
                        <div className='add-note'>
                            {coinId ? (
                                <div className='frame-6'>
                                    <img className='bitcoin' alt='Bitcoin' src='bitcoin-1.svg' />
                                    <div className='frame-7'>
                                        <div className='text-wrapper-5'>
                                            {coinId?.toUpperCase()}
                                        </div>
                                        <div className='text-wrapper-6'>Bitcoin</div>
                                    </div>
                                </div>
                            ) : (
                                <div className='text-wrapper-5'>Add Asset</div>
                            )}
                            <Close />
                        </div>
                    </header>


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
                    {selectedCoin.id && (
                        <div className='buttons' onClick={handleSelectAsset}>
                            Add Asset
                        </div>
                    )}

                    <div
                        className='buttons cancel'
                        onClick={() => navigate('/main/portfolio')}
                    >
                        Cancel
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form