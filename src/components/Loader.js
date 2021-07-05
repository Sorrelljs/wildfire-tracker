import gif from './loader.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={gif} alt="gif-loader" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader
