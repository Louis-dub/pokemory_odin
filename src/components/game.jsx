export default function Game({ images, setImages }) {
    function handleClick() {
        const tempImages = [...images];
        tempImages.sort(() => Math.random() - 0.5);
        setImages(tempImages);
    }

    return (
        <div className="flex gap-4 w-[700px] flex-wrap m-auto justify-center">
            {images.map(img => (
                <div
                    key={img.id}
                    className="border border-black border-2 p-2 hover:scale-110 active:scale-95 transition-all ease-out w-32 cursor-pointer"
                    onClick={handleClick}
                >
                    <img
                        src={img.url}
                        alt="Pokemon"
                    />
                </div>
            ))}
        </div>
    )
}
