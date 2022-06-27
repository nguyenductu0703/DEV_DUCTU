import { useEffect, useState } from 'react';
import * as searchServices from '../../services/searchServices';
import Styles from './Home.module.scss';
import className from 'classnames/bind';
import Button from '../../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCommentDots,
    faFlag,
    faHeart,
    // faPause,
    faPlay,
    faShare,
    faVolumeHigh,
    // faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(Styles);
function Home() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.Search('g', 'more');
            setSearchResult(result);
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('home')}>
            {searchResult.map((result) => (
                <div key={result.id} className={cx('home-contain')}>
                    <div className={cx('search-result')} tabIndex="-1">
                        <img className={cx('user-image')} src={result.avatar} alt="" />

                        <div className={cx('container')}>
                            <div className={cx('button-container')}>
                                <div className={cx('home-name')}>
                                    <h4 className={cx('user-title')}>
                                        {result.full_name}

                                        {result.tick && (
                                            <FontAwesomeIcon
                                                className={cx('check')}
                                                icon={faCheckCircle}
                                            />
                                        )}
                                    </h4>
                                    <span className={cx('user-name')}>{result.nickname}</span>
                                </div>
                                <Button outline> Follow</Button>
                            </div>
                            <div className={cx('user-hagtag')}>
                                <div className={cx('hagtag')}>hagtag</div>
                                <div className={cx('content-mucsic')}>music</div>
                            </div>
                            <div className={cx('home-icon')}>
                                <div className={cx('video')}>
                                    <video
                                        src="https://v16-webapp.tiktok.com/a105f464e438c797726023ae07079aea/62b9644a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/cb7bde2391814f8aaaed22a53c7a39b1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1728&bt=864&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZkCh8we2N8KTrl7Gb&mime_type=video_mp4&qs=0&rc=aTw3ZTo8ZTs6NWc6NjxlNEBpanZyeDg6ZmhpZDMzZjgzM0AtMTIyMDEzNjQxXl8zMi4vYSNmcjRvcjRfYW9gLS1kL2Nzcw%3D%3D&l=20220627020254010245005098246E0502"
                                        // playsInline
                                        autoPlay
                                        className={cx('tiktok-home')}
                                    ></video>
                                </div>
                                <div className={cx('icon-volumn')}>
                                    <FontAwesomeIcon icon={faVolumeHigh} />
                                    {/* <FontAwesomeIcon icon={faVolumeXmark}/>   */}
                                </div>
                                <div className={cx('icon-report')}>
                                    <FontAwesomeIcon icon={faFlag} />
                                    Báo cáo
                                </div>
                                <div className={cx('icon-play')}>
                                    <FontAwesomeIcon icon={faPlay} />
                                    {/* <FontAwesomeIcon icon={faPause}/>    */}
                                </div>

                                <div className={cx('icon')}>
                                    <div className={cx('icon-boder')}>
                                        <FontAwesomeIcon
                                            className={cx('tiktok-icon')}
                                            icon={faHeart}
                                        />
                                        <strong className={cx('Strong-text')}>27.5k</strong>
                                    </div>
                                    <div className={cx('icon-boder')}>
                                        <FontAwesomeIcon
                                            className={cx('tiktok-icon')}
                                            icon={faCommentDots}
                                        />
                                        <strong className={cx('Strong-text')}>27</strong>
                                    </div>
                                    <div className={cx('icon-boder')}>
                                        <FontAwesomeIcon
                                            className={cx('tiktok-icon')}
                                            icon={faShare}
                                        />
                                        <strong className={cx('Strong-text')}>32</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
