import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RightNav from '../components/layout-component/RightNav';

const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    const {  details, title,image_url } = news;
    return (
        <div className='container mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-4'>
                <section className='col-span-3'>
                    <div className="card bg-base-100">
                        <figure className="px-10 pt-10">
                            <img
                                src={image_url}
                                alt=""
                                className="object-cover w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news.category_id}`} className="btn btn-primary">Back to News Page</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='col-span-1'>
                    <RightNav></RightNav>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;