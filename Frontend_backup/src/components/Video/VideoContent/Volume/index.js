import React, { useState } from 'react';
import { Slider, Stack } from '@mui/material'; // Import cái có sẵn
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Volume.module.scss';

const cx = classNames.bind(styles);

function Volume({ videoRef }) {
    const [value, setValue] = useState(50);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (videoRef.current) {
            videoRef.current.volume = newValue / 100;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Stack spacing={2} direction="row" sx={{ mb: 1, alignItems: 'center', width: '100%' }}>
                <FontAwesomeIcon icon={value === 0 ? faVolumeXmark : faVolumeHigh} />

                {/* Đây là cái "có sẵn" - tự động có thanh kéo, nút tròn */}
                <Slider
                    aria-label="Volume"
                    value={value}
                    onChange={handleChange}
                    size="small"
                    sx={{
                        color: '#fff', // Chỉnh màu trắng cho giống TikTok
                        '& .MuiSlider-thumb': {
                            width: 12,
                            height: 12,
                        },
                    }}
                />
            </Stack>
        </div>
    );
}

export default Volume;
