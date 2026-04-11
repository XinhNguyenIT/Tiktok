import React, { useState, useRef } from 'react';
import { X, ChevronRight, Bell } from 'lucide-react';

/**
 * Thành phần InboxPanel - Phiên bản JavaScript
 * Tự động đóng khi di chuột ra ngoài (onMouseLeave)
 */
function InboxPanel({ onClose }) {
    const [tabActive, setTabActive] = useState('all');
    const wrapperRef = useRef(null);

    // Dữ liệu mẫu mô phỏng (Seeding data)
    const notifications = [
        {
            id: 1,
            avatar: 'https://i.pravatar.cc/100?img=11',
            nickname: 'Anh Ti ka',
            content: 'đã thích video của bạn.',
            time: '2 ngày trước',
            type: 'like',
            previewImage: 'https://picsum.photos/seed/post1/50/70',
            isUnread: true,
        },
        {
            id: 2,
            avatar: 'https://i.pravatar.cc/100?img=12',
            nickname: 'Nekorutre',
            content: 'đã bình luận: "Video này đỉnh quá bạn ơi! 🔥"',
            time: '3 ngày trước',
            type: 'comment',
            previewImage: 'https://picsum.photos/seed/post2/50/70',
            isUnread: false,
        },
        {
            id: 3,
            avatar: 'https://i.pravatar.cc/100?img=13',
            nickname: 'Minh Hoang',
            content: 'bắt đầu follow bạn.',
            time: '5 ngày trước',
            type: 'follow',
            isUnread: false,
        },
        {
            id: 4,
            avatar: 'https://i.pravatar.cc/100?img=14',
            nickname: 'Nekorutre',
            content: 'đã thích video của bạn.',
            time: '3 ngày trước',
            type: 'like',
            previewImage: 'https://picsum.photos/seed/post3/50/70',
            isUnread: false,
        },
    ];

    // Lọc thông báo theo tab
    const filteredNotifications = notifications.filter((item) => {
        if (tabActive === 'all') return true;
        return item.type === tabActive;
    });

    return (
        <div
            className="fixed right-4 top-14 w-[360px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-[999] animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden"
            onMouseLeave={onClose} // Tự động đóng khi di chuột ra khỏi vùng box
            ref={wrapperRef}
        >
            {/* Header: Tiêu đề và các Tab lọc */}
            <div className="p-4 border-b border-gray-100 bg-white">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-gray-900">Thông báo</span>
                    <button
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                        onClick={onClose}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex space-x-2">
                    {['all', 'like', 'comment'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors ${
                                tabActive === tab ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                            }`}
                            onClick={() => setTabActive(tab)}
                        >
                            {tab === 'all' ? 'Tất cả' : tab === 'like' ? 'Thích' : 'Bình luận'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Body: Danh sách thông báo */}
            <div className="flex-1 overflow-y-auto max-h-[480px] scrollbar-thin">
                {filteredNotifications.map((item) => (
                    <div
                        key={item.id}
                        className={`flex items-start p-4 hover:bg-gray-50 cursor-pointer transition-colors relative group`}
                    >
                        <div className="relative flex-shrink-0">
                            <img
                                src={item.avatar}
                                className="w-11 h-11 rounded-full object-cover border border-gray-100"
                                alt={item.nickname}
                            />
                            {item.isUnread && (
                                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
                            )}
                        </div>

                        <div className="ml-3 flex-1 min-w-0">
                            <p className="text-sm text-gray-800 leading-tight">
                                <span className="font-bold hover:underline">{item.nickname}</span>
                                <span className="ml-1 text-gray-600">{item.content}</span>
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block">{item.time}</span>
                        </div>

                        <div className="ml-2 flex-shrink-0">
                            {item.type === 'follow' ? (
                                <button className="bg-pink-500 text-white px-4 py-1.5 rounded text-[13px] font-bold hover:bg-pink-600 transition shadow-sm">
                                    Follow lại
                                </button>
                            ) : (
                                <div className="w-10 h-14 bg-gray-100 rounded overflow-hidden border border-gray-100 relative shadow-inner">
                                    <img
                                        src={item.previewImage}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        alt="video preview"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-100 bg-gray-50/30">
                <button className="w-full py-2 flex items-center justify-center text-sm font-semibold text-pink-500 hover:text-pink-600 transition group">
                    Xem toàn bộ thông báo cũ
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

/**
 * COMPONENT APP ĐỂ XEM THỬ GIAO DIỆN
 */
export default function App() {
    const [isInboxOpen, setIsInboxOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#f1f1f2] p-10 flex justify-end items-start relative font-sans">
            <div className="flex items-center space-x-6 bg-white p-3 rounded-xl shadow-sm border border-gray-200 pr-8">
                <div className="text-sm text-gray-400 font-medium italic">Thanh Header mô phỏng</div>

                <div
                    className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-all group"
                    onClick={() => setIsInboxOpen(!isInboxOpen)}
                >
                    <Bell size={26} className="text-gray-800" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full border-2 border-white shadow-sm">
                        12
                    </span>
                </div>
            </div>

            {isInboxOpen && <InboxPanel onClose={() => setIsInboxOpen(false)} />}
        </div>
    );
}
