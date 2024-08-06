import { Component } from 'react';
import { Route, Router, Routes, Link } from 'react-router-dom';
import Image from './image';

class Section1 extends Component {
    state = {}
    render() {
        return (
            <div className=' bg-dark'>
                <div className='row justify-content-center'>
                    <div style={{ marginLeft: '80px' }} className='col-md-1 my-3 col-5'>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to="/">Show Post</Link>
                    </div>
                    <div className='col-md-1 my-3 col-5'>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to="/image_2">Show Post</Link>
                    </div>
                    <div style={{ marginLeft: '80px' }} className='col-md-1 my-3 col-5'>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to="/image_3">Show Post</Link>
                    </div>
                    <div className='col-md-1 my-3 col-5'>
                        <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to="/image_4">Show Post</Link>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-5 col-10 my-3'>
                        <Routes>
                            <Route path='/' element={<Image img_src='./image-1.jpg' />} />
                            <Route path='/image_2' element={<Image img_src='./image-2.jpg' />} />
                            <Route path='/image_3' element={<Image img_src='./image-3.jpg' />} />
                            <Route path='/image_4' element={<Image img_src='./image-4.jpg' />} />
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1;