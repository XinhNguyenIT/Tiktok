import React from 'react';
import classNames from 'classnames/bind';
import { Search, SlidersHorizontal } from 'lucide-react';

import styles from './SearchContent.module.scss';
import ContentCard from '@/components/ContentCard';

const cx = classNames.bind(styles);

const TRENDING_DATA = [
    {
        id: 1,
        title: 'Seonghyeon mặc áo của Keonho',
        description:
            'Trong livestream, Eom Seonghyeon mặc áo của Anh Keonho và được anh thoa kem chống nắng',
        posts: '1K posts',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
    {
        id: 2,
        title: "UPRIZE lên bìa Men's Folio",
        description:
            "UPRIZE là gương mặt trang bìa cho ấn phẩm mới của tạp chí Men's Folio Việt Nam",
        posts: '13K posts',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    },
    {
        id: 3,
        title: 'Nữ tài xế bị hành hung',
        description:
            'Một nữ tài xế xe ôm công nghệ bị cặp đôi hành hung bằng mũ bảo hiểm ở quận Cầu Giấy',
        posts: '5K posts',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80',
    },
    {
        id: 4,
        title: 'Học sinh Marie Curie phản bác tin đồn',
        description:
            'Học sinh trường Marie Curie khẳng định vào trường bằng thực lực, không "đút lót" như tin đồn',
        posts: '15K posts',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80',
    },
    {
        id: 5,
        title: 'Tự nhận 20 năm kinh nghiệm LMHT',
        description:
            "Người dùng 'iristhoa' tự nhận có 20 năm kinh nghiệm chơi Liên Minh Huyền Thoại",
        posts: '8K posts',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80',
    },
];

const SearchContent = () => {
    return (
        <ContentCard>
            <div className={cx('wrapper')}>
                <div className={cx('searchBox')}>
                    <div className={cx('searchLeft')}>
                        <Search size={22} strokeWidth={2} />
                        <input
                            className={cx('searchInput')}
                            placeholder="Search"
                            type="text"
                        />
                    </div>

                    <button className={cx('filterBtn')} type="button" aria-label="Filter">
                        <SlidersHorizontal size={22} strokeWidth={2} />
                    </button>
                </div>

                <div className={cx('sectionHeader')}>
                    <span className={cx('highlight')}>Trending now</span>
                    <p className={cx('subTitle')}>
                        What people are saying, summarized by AI
                    </p>
                </div>

                <div className={cx('trendList')}>
                    {TRENDING_DATA.map((item) => (
                        <div key={item.id} className={cx('trendItem')}>
                            <div className={cx('trendText')}>
                                <h3 className={cx('trendTitle')}>{item.title}</h3>
                                <p className={cx('trendDesc')}>
                                    {item.description} · {item.posts}
                                </p>
                            </div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className={cx('trendThumb')}
                            />
                        </div>
                    ))}

                    <div className={cx('followBlock')}>
                        <h3 className={cx('followTitle')}>Follow suggestions</h3>
                    </div>
                </div>
            </div>
        </ContentCard>
    );
};

export default SearchContent;