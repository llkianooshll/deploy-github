import React, { Component } from 'react';
import image1 from './section1/image-1.jpg'
import image2 from './section1/image-2.jpg'
import image3 from './section1/image-3.jpg'
import image4 from './section1/image-4.jpg'


class Section2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            images: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const images = [
                { src: image1, title: 'Butterfly', caption: "Butterflies are beautiful insects that undergo a remarkable transformation from caterpillar to butterfly. They come in various vibrant colors and are known for their graceful flight." },
                { src: image2, title: 'Beach', caption: "The beach is a tranquil oasis with soothing waves and warm sand, offering a peaceful retreat from the chaos of daily life." },
                { src: image3, title: 'Flower', caption: "Flowers are nature's delicate gems, blooming in vibrant hues and spreading joy with their sweet fragrance." },
                { src: image4, title: "Eagle", caption: "The eagle soars majestically in the sky, a symbol of strength, freedom, and perseverance." },
            ];
            this.setState({
                loading: false,
                images: images
            });
        }, 3000);
    }

    render() {
        const { loading, images } = this.state;

        if (loading) {
            return <div className='bg-dark text-center text-white py-5'>
                <h2 style={{opacity:"60%"}} className=' text-white'><b>LOADING...</b></h2>
            </div>;
        }

        return (
            <>
                <div className='row justify-content-center py-5'>
                    <div className='col-10'>
                        <div style={{backgroundColor:"black",borderRadius:"10px"}} className='row text-white justify-content-center p-2'>
                            {images.map(image => (
                                <div className='col-9 col-md-3 p-2'>
                                    <div style={{ borderRadius: '15px', backgroundColor: "rgb(16, 11, 56)" }} className='card mx-3'>
                                        <div className='card-img p-2'>
                                            <img key={images.indexOf(image)} style={{ width: '100%', borderRadius: "15px" }} src={image.src} alt="" />
                                        </div>
                                        <div className='card-body text-secondary'>
                                            <div className='my-2'>
                                                <h4>{image.title}</h4>
                                            </div>
                                            <div className='my-1'>
                                                <span>{image.caption}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Section2;
