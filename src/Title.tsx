import type { ChunkType } from "./Row";


export default function Title({ chunk }: { chunk: ChunkType[] }) {
    return (
        <div className="ps-1.5 pt-1 text-white font-light text-sm whitespace-nowrap overflow- leading-tight">{ // Text
            chunk.map((album) => album && <div>
                {album.artist + " - " + album.date.slice(0, 4) + " - " + album.album}
            </div>)
        }</div>
    )
}