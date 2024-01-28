import { useState, useEffect, FC } from 'react';
import { SelectIthem } from './types';
import Selector from './Selector';

const CoinList: FC<{
    setter: (i: SelectIthem) => void;
    list: SelectIthem[];
}> = ({ setter, list }) => {


    return (
        <div>
            {list.slice(0, 5)
                .map((el) => (
                    <Row onClick={() => setter(el)} coin={el} />
                ))}
        </div>
    );
};

export default CoinList;



const Row: FC<{ coin: { id: string, name: string }, onClick: () => void }> = ({ coin: { id, name }, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: '100%',
                height: 44,
                padding: 16,
                background: 'rgba(255, 255, 255, 0.20)',
                borderRadius: 8,
                overflow: 'hidden',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'inline-flex',
                margin: '2px 0',
                boxSizing: 'border-box'
            }}
        >
            <div
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 16,
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        width: 20,
                        height: 20,

                        background: '#FFD600',
                    }}
                ></div>
                <div
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 8,
                        display: 'flex',
                    }}
                >

                    <div
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: 4,
                            display: 'inline-flex',
                        }}
                    >
                        <div
                            style={{
                                color: 'white',
                                fontSize: '16px',
                                fontFamily: 'IBM Plex Sans',
                                fontWeight: '600',
                                lineHeight: '17.6px',
                                wordWrap: 'break-word',
                            }}
                        >
                            {id}
                        </div>
                        <div
                            style={{
                                color: '#97FCE4',
                                fontSize: '14px',
                                fontFamily: 'IBM Plex Sans',
                                fontWeight: '400',
                                lineHeight: '15.4px',
                                wordWrap: 'break-word',
                            }}
                        >
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
