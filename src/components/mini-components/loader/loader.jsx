import '../loader/loader.css'

const Loader = (props) => {

    return (
        <div className="container">
            <div className="wrapLoader">
                <div className="spinner one"></div>
                <div className="spinner two"></div>
                <div className="spinner three"></div>
                <div className="spinner four"></div>
                <div className="spinner five"></div>
                <div className="spinner six"></div>
            </div>
        </div>
    );
}

export default Loader;
