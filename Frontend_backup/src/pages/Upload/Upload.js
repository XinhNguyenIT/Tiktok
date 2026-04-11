import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    const [files, setFiles] = useState([]); // State to store the files
    const [filePreviews, setFilePreviews] = useState([]); // To store previews of files
    const [error, setError] = useState(''); // To show error if too many files are selected

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files); // Convert FileList to Array
        if (selectedFiles.length + files.length > 15) {
            setError('You can only upload up to 15 files.');
            return;
        }

        setFiles([...files, ...selectedFiles]);
        setError('');

        // Create previews for the selected files
        const previews = selectedFiles.map((file) => URL.createObjectURL(file));
        setFilePreviews([...filePreviews, ...previews]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate uploading files
        if (files.length === 0) {
            setError('Please select files to upload.');
        } else {
            console.log('Files uploaded:', files);
            // Send the files to the server
            // You would use something like:
            // axios.post('/upload', files);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('uploadBox')}>
                    <div className={cx('uploadInner')}>
                        <FontAwesomeIcon icon={faCloudArrowUp} className={cx('uploadIcon')} />
                        <h2 className={cx('title')}>Select video or image to upload</h2>
                        <p className={cx('desc')}>Or drag and drop it here</p>

                        <input
                            type="file"
                            accept="image/*,video/*" // Allow both images and videos
                            multiple
                            onChange={handleFileChange}
                            className={cx('fileInput')}
                        />

                        {/* Show error if more than 15 files are selected */}
                        {error && <p className={cx('error')}>{error}</p>}

                        {/* Display previews of selected files */}
                        <div className={cx('previews')}>
                            {filePreviews.map((preview, index) => (
                                <div key={index} className={cx('previewItem')}>
                                    {/* If it's an image */}
                                    {preview && preview.endsWith('image') && (
                                        <img className={cx('preview')} src={preview} alt="Preview" />
                                    )}

                                    {/* If it's a video */}
                                    {preview && preview.endsWith('video') && (
                                        <video className={cx('preview')} src={preview} controls />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className={cx('selectBtn')} onClick={handleSubmit}>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
