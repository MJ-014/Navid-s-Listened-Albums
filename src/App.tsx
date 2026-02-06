import "./index.css"
import Row, { type ChunkType } from "./Row"
import data from './data.json'

export function App() {
  const newData: ChunkType[] = data;
  newData.sort((a, b) => (a!.artist + a!.date).toUpperCase().localeCompare((b!.artist + b!.date).toUpperCase()))
  const chunks = []
  for (let i = 0; i < newData.length % 7; i++) {
    newData.push(null)
  }
  for (let i = 0; i < newData.length; i += 7) {
    chunks.push(newData.slice(i, i + 7))
  }

  return (
    <div>
      {chunks.map((item) => <Row chunk={item} />)}
    </div>
  );
}
