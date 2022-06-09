import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import '../styles/global.scss';

const App = ({ Component, pageProps }) => {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return <Component {...pageProps} />
};
export default App;