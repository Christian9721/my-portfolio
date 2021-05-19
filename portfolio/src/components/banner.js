import '../css/banner.css';

function Banner()
{
    return(
    <div className="Banner" style={{
        backgroundColor: this.props.background,
        color:  this.props.color
    }}>
        <h2>{this.props.text}</h2>
    </div>
    )
}

export default Banner;