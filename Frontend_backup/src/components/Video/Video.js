import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoContent from './VideoContent';
import VideoAction from './VideoAction';
import CommentPanel from './CommentPanel';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Video({ data }) {
    const [showComments, setShowComments] = useState(false);
    // Nếu không truyền data từ ngoài vào, dùng dữ liệu mẫu (mock data)

    const videoData = data || {
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        like: 1200,
        nickName: 'John Doe',
        caption: `Đối với những mạng xã hội có tính năng đăng story như: instagram, facebook, zalo,... Việc đăng ảnh kèm theo caption ngắn gọn sẽ là ưu tiên hàng đầu. Dưới đây là 10 câu caption hay, ngắn gọn, dễ nhớ và có ý nghĩa tạo động lực mà bạn có thể thử:   1. "Sống chậm lại, nghĩ khác đi, yêu thương nhiều hơn." (Nhắc nhở về giá trị của sự chậm rãi, tư duy tích cực và lòng yêu thương), 2. "Hạnh phúc không phải đích đến, mà là hành trình." (Nhấn mạnh việc trân trọng hiện tại và quá trình trải nghiệm) 3. "Ngày hôm nay là món quà. Vì thế nó được gọi là 'present'." (Chơi chữ "present" vừa là hiện tại, vừa là món quà, nhắc nhở về giá trị của mỗi ngày)

4. "Hãy là phiên bản tốt nhất của chính bạn, không phải bản sao của ai khác." (Khích lệ sự tự tin và cá tính riêng biệt)
5. "Vấn đề không phải là chuyện gì xảy ra, mà là bạn phản ứng thế nào." (Tập trung vào khả năng kiểm soát cảm xúc và thái độ)
999+ Cap hay ý nghĩa, STT tâm trạng dùng đăng ảnh, story triệu view
2 năm trước - Ngọc Tuyên

fb-icon
Bạn muốn mỗi bức ảnh đăng lên "bão like", mỗi story chạm đến triệu view? Bí quyết nằm ở những dòng cap hay ý nghĩa, STT tâm trạng "đúng chất" đó! Hãy cùng Nguyễn Kim khám phá 999+ dòng Cap hay ý nghĩa, STT tâm trạng dùng đăng ảnh, story triệu view ngay trong bài viết này, để "nâng cấp" trang cá nhân và thu hút "triệu" tương tác nhé!

Xem nhanh

Tổng hợp cap hay về cuộc sống ý nghĩaCap ngắn gọn, dễ nhớ, tạo động lực tức thì
Đối với những mạng xã hội có tính năng đăng story như: instagram, facebook, zalo,... Việc đăng ảnh kèm theo caption ngắn gọn sẽ là ưu tiên hàng đầu. Dưới đây là 10 câu caption hay, ngắn gọn, dễ nhớ và có ý nghĩa tạo động lực mà bạn có thể thử:
`,
        // ... các field khác
    };

    return (
        // Nếu showComments = true, class sẽ là "wrapper show-comment"
        <div className={cx('wrapper', { 'show-comment': showComments })}>
            <div className={cx('video-section')}>
                <VideoContent data={videoData} />
                <VideoAction data={videoData} onCommentClick={() => setShowComments(true)} />
            </div>

            {showComments && (
                <div className={cx('comment-section')}>
                    <CommentPanel data={videoData} onClose={() => setShowComments(false)} />
                </div>
            )}
        </div>
    );
}
export default Video;
