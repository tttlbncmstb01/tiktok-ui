import classNames from 'classnames/bind';
import styles from './header.module.scss';
import axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';
axios.defaults.withCredentials = true;
const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));
const cx = classNames.bind(styles);
function Header() {
    const hanldeSetSession = () => {
        // https://ben-re-52cb63c8e033.herokuapp.com/zxc
        axios
            .get('https://ben-re-52cb63c8e033.herokuapp.com/api01', { withCredentials: true })
            .then((res) => {
                const persons = res.data;
                console.log(persons);
            })
            .catch((error) => console.log(error));
    };
    const hanldeSetSession2 = () => {
        axios
            .get('https://ben-re-52cb63c8e033.herokuapp.com/api01')
            .then((res) => {
                const persons = res.data;
                console.log(persons);
            })
            .catch((error) => console.log(error));
    };
    const hanldeSetSession3 = () => {
        fetch('https://ben-re-52cb63c8e033.herokuapp.com/api01', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json(); // we only get here if there is no error
            })
            .then((data) => console.log(data))
            .catch((error) => console.log('error: ' + error));
    };
    const hanldeGetSession = () => {
        axios
            .get('https://ben-re-52cb63c8e033.herokuapp.com/api02', { withCredentials: true })
            .then((res) => {
                const persons = res.data;
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    };
    const hanldeGetSession2 = () => {
        axios
            .get('https://ben-re-52cb63c8e033.herokuapp.com/api02')
            .then((res) => {
                const persons = res.data;
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    };
    const hanldeGetSession3 = () => {
        fetch('https://ben-re-52cb63c8e033.herokuapp.com/api02', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json(); // we only get here if there is no error
            })
            .then((data) => console.log(data))
            .catch((error) => console.log('error: ' + error));
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="test">
                    <div onClick={hanldeSetSession}>Set Session</div>
                    <div onClick={hanldeGetSession}>Get Session</div>
                    <div onClick={hanldeSetSession2}>Set Session2</div>
                    <div onClick={hanldeGetSession2}>Get Session2</div>
                    <div onClick={hanldeSetSession3}>Set Fetch Session 3</div>
                    <div onClick={hanldeGetSession3}>Get Fetch Session 3</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
