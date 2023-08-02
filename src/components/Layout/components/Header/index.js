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
        client
            .get('http://192.168.1.12:3002/api01', { withCredentials: true })
            .then((res) => {
                const persons = res.data;
                console.log(persons);
            })
            .catch((error) => console.log(error));
    };
    const hanldeGetSession = () => {
        client
            .get('http://192.168.1.12:3002/api02', { withCredentials: true })
            .then((res) => {
                const persons = res.data;
                console.log(res);
            })
            .catch((error) => console.log(error));
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="test">
                    <div onClick={hanldeSetSession}>Set Session</div>
                    <div onClick={hanldeGetSession}>Get Session</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
