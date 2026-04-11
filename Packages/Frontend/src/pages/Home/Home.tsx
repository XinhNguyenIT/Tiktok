import React from 'react';
import ForYou from './Foryou'; // Import trang For You vào đây

function Home() {
    return (
        <div className="home-page">
            {/* Bạn gọi component ForYou ở đây */}
            <ForYou />
        </div>
    );
}

export default Home;