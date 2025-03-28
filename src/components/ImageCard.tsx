interface ImageCardProps{
    name?: string;
    size?: string;
    dataUpload?: string;
    src?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({name, size, dataUpload, src}: ImageCardProps) => {
    return (
        <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
            <img className="h-56 w-full object-cover rounded-t-md" alt="" src={src}/>
            <div className="card-body p-4">
                <h5 className="text-xl font-semibold mb-2 text-gray-600">{name}</h5>
                <p className="text-gray-600">{size}</p>
                <p className="text-gray-600">{dataUpload}</p>
            </div>
        </div>
    )
}