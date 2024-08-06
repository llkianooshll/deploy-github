import { Component } from 'react';
import image1 from './image-1.jpg'
import image2 from './image-2.jpg'
import image3 from './image-3.jpg'
import image4 from './image-4.jpg'
import { Navigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect : false,
            click : false,
        }
    }
    handleNavigate = ()=>{
        this.setState({redirect : true})
    }
    handleClick = ()=>{
        this.setState({click:true})
    }
    componentDidUpdate(prevProps) {
        if (prevProps.img_src !== this.props.img_src) {
            this.handleImg(this.props.img_src)
        }
    }
    render() {
        if(this.state.click){
            this.setState({click : false})
            return <Navigate to='/more-information' />
        }
        else{
            return (
                <>
                    <div>
                        <img style={{ width: '100%', height: '100%', borderRadius: '25px' }} src={this.handleImg(this.props.img_src)} alt="" />
                    </div>
                    <div className='text-white text-center my-1'>
                        {this.handleCaption(this.props.img_src)}
                    </div>
                    <div className='text-center my-3'>
                        <button onClick={this.handleClick} style={{ border: '2px solid white' }} className='btn btn-dark text-white px-5'>More Information...</button>
                    </div>
                </>
            );
        }
    }
    redirect = ()=>{
        
    }
    handleImg = (image_src) => {
        if (image_src === './image-1.jpg') {
            return image1;
        }
        if (image_src === './image-2.jpg') {
            return image2;
        }
        if (image_src === './image-3.jpg') {
            return image3;
        }
        if (image_src === './image-4.jpg') {
            return image4;
        }
    }
    handleCaption = (image_src) => {
        if (image_src === './image-1.jpg') {
            return (
                <>
                    <div className='my-3'>
                        <h3>Butterfly</h3>
                    </div>
                    <div className='my-3'>
                        <span>
                            Butterflies are beautiful insects that undergo a remarkable transformation from caterpillar to butterfly. They come in various vibrant colors and are known for their graceful flight.
                        </span>
                    </div>
                </>
            );
        }
        if (image_src === './image-2.jpg') {
            return (
                <>
                    <div className='my-3'>
                        <h3>Beach</h3>
                    </div>
                    <div className='my-3'>
                        <span>
                            The beach is a tranquil oasis with soothing waves and warm sand, offering a peaceful retreat from the chaos of daily life.                        </span>
                    </div>
                </>
            );
        }
        if (image_src === './image-3.jpg') {
            return <>
                <div className='my-3'>
                    <h3>Flower</h3>
                </div>
                <div className='my-3'>
                    <span>
                        Flowers are nature's delicate gems, blooming in vibrant hues and spreading joy with their sweet fragrance.
                    </span>
                </div>
            </>;
        }
        if (image_src === './image-4.jpg') {
            return <>
                <div className='my-3'>
                    <h3>Eagle</h3>
                </div>
                <div className='my-3'>
                    <span>
                        The eagle soars majestically in the sky, a symbol of strength, freedom, and perseverance.
                    </span>
                </div>
            </>;
        }
    }
}

export default Image;