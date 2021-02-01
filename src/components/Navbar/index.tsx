import Link from 'next/link';
import { css } from 'styled-components';

const Navbar = (): JSX.Element => {
    return (
        <ul style={ul}>
            <li style={li}>
                <Link href="/">
                    <a style={a}>#VacinaManaus</a>
                </Link>
            </li>
            <li style={li}>
                <Link href="/">
                    <a style={a}>Home</a>
                </Link>
            </li>
            <li style={li}>
                <Link href="/dashboard">
                    <a style={a}>Dashboard</a>
                </Link>
            </li>
        </ul>
    );
};

const ul = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
};

const li = {
    display: 'inline',
    marginRight: '8px',
};

const a = {
    textDecoration: 'none',
};

export default Navbar;
