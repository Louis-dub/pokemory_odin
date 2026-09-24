export default function Game({
    images, setImages,
    score, setScore,
    ids, setIds,
    record, setRecord
}) {
    function handleClick(id) {
        const tempImages = [...images];
        tempImages.sort(() => Math.random() - 0.5);
        setImages(tempImages);
        if (!ids.includes(id)) {
            const tempIds = [...ids];
            tempIds.push(id);
            if (score + 1 > record) {
                setRecord(score + 1);
                localStorage.setItem("record", JSON.stringify(score + 1));
            }
            setScore(score + 1);
            setIds(tempIds);
        } else {
            setScore(0);
            setIds([]);
        }
    }

    return (
        <div className="flex gap-4 w-[700px] flex-wrap m-auto justify-center">
            {images.map(img => (
                <div
                    key={img.id}
                    className="border border-black border-2 p-2 hover:scale-110 active:scale-95 transition-all ease-out w-32 cursor-pointer"
                    onClick={() => handleClick(img.id)}
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
