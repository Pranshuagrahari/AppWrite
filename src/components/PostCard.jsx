import React from 'react';
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazyload';
function PostCard(
    {
        $id,
        title,
        featuredimage
    }
) {
    return ( 
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 text-black'>
                <div>
                    <div>
                    <LazyLoad>
                        <img src={appwriteService.getFilePreview(featuredimage)} alt={title} className='rounded-xl'/>
                    </LazyLoad>
                    </div>
                    <h2  className='text-xl font-bold'>{title}</h2>
                </div>
            </div>
        </Link>
     );
}

export default PostCard;