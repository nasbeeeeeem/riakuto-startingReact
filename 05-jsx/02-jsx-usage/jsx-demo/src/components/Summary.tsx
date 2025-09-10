
interface Props {
  title: string;
  folded?: boolean;
  children: React.ReactNode;
}

function Summary({title, folded = false, children}: Props) {
  console.log(children)
  return (
    <details className="story" open={!folded}>
      <summary>{title}</summary>
    </details>
  )
}

export default Summary;
