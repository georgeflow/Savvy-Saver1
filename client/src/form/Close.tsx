import { useNavigate } from "react-router-dom";

const Close = () => {
    const navigate = useNavigate()
    return (
        <svg
            width='35'
            height='35'
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => navigate('/main/portfolio')}
        >
            <rect width='35' height='35' fill='#F5F5F5' />
            <g id='BUY'>
                <rect
                    width='1728'
                    height='1117'
                    transform='translate(-1060 -353)'
                    fill='#0F1A1F'
                />
                <g id='BUY_2'>
                    <rect
                        x='-452'
                        y='-23'
                        width='511'
                        height='458'
                        rx='10'
                        fill='#273035'
                    />
                    <g id='header'>
                        <g id='add note'>
                            <g id='zondicons:close-solid' clip-path='url(#clip0_0_1)'>
                                <path
                                    id='Vector'
                                    d='M5.34254 30.0875C3.67112 28.4732 2.33793 26.5422 1.42077 24.4071C0.503612 22.2721 0.0208525 19.9757 0.000660743 17.6521C-0.019531 15.3284 0.423249 13.024 1.30316 10.8733C2.18308 8.72266 3.48251 6.76875 5.12563 5.12563C6.76875 3.48251 8.72266 2.18308 10.8733 1.30316C13.024 0.423249 15.3284 -0.019531 17.6521 0.000660743C19.9757 0.0208525 22.2721 0.503612 24.4071 1.42077C26.5422 2.33793 28.4732 3.67112 30.0875 5.34254C33.2753 8.64308 35.0392 13.0636 34.9993 17.6521C34.9595 22.2405 33.119 26.6297 29.8744 29.8744C26.6297 33.119 22.2405 34.9595 17.6521 34.9993C13.0636 35.0392 8.64308 33.2753 5.34254 30.0875ZM20.165 17.715L25.1175 12.7625L22.65 10.295L17.715 15.2475L12.7625 10.295L10.295 12.7625L15.2475 17.715L10.295 22.6675L12.7625 25.135L17.715 20.1825L22.6675 25.135L25.135 22.6675L20.1825 17.715H20.165Z'
                                    fill='white'
                                    fill-opacity='0.5'
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id='clip0_0_1'>
                    <rect width='35' height='35' fill='white' />
                </clipPath>
            </defs>
        </svg>
    )
};


export default Close;