import Image from "./Image";
import Title from "./Title";

export type ChunkType = {
    artist: string,
    album: string,
    cover: string,
    date: string
} | null

export default function Row({ chunk }: { chunk: ChunkType[] }) {
    return (
        <div className="flex gap-2 mb-2">
            {chunk.map(
                (album) => (album) ? (<Image url={album.cover} />) : <div className="w-[8vw] h-[8vw]"></div>
            )}
            <Title chunk={chunk} />
        </div>
    )
}