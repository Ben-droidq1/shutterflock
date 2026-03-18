function Image({ image }){

    return(
         <div className="w-full h-96 rounded overflow-hidden shadow-lg  transition-shadow duration-300 bg-white">
            <img
              src={image.webformatURL}
              alt={image.tags}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className='px-6 py-4'>
                <div className='font-bold text-amber-600 text-xl mb-2'>
                    Photo by {image.user}
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                        <div className="font-bold text-gray-700">{image.views.toLocaleString()}</div>
                        <div className="text-gray-500">Views</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-gray-700">{image.downloads.toLocaleString()}</div>
                        <div className="text-gray-500">Downloads</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-gray-700">{image.likes.toLocaleString()}</div>
                        <div className="text-gray-500">Likes</div>
                    </div>
                </div>
            </div>
            <div className='px-6 py-4'>
                {image.tags.split(', ').slice(0, 3).map((tag, index) => (
                    <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition-colors'>
                        #{tag}
                    </span>
                ))}
                 
            </div>
    
         </div>
    )
}

export default Image