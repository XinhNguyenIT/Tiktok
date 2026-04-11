    import { Navigate } from 'react-router-dom';
    import Video from '~/components/Video';
    import ScrollButtons from '~/components/ScrollButtons';
    import { handleScrollUp, handleScrollDown } from '~/utils/scrollHandlers';

    function Home() {
        const token = localStorage.getItem('userToken');

        if (!token) {
            return <Navigate to="/login" replace />;
        }

        return (
            <div>
                <Video />
                <Video />
                <ScrollButtons onUp={handleScrollUp} onDown={handleScrollDown} />
            </div>
        );
    }

    export default Home;
