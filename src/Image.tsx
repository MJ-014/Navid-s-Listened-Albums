export default function Image({ url }: { url: string }) {
    return (
        <img src={url} className="w-[8vw] h-[8vw]"/>
    )
}