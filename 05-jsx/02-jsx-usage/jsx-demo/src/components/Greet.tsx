interface Props {
  name: string;
  times?: number;
}

function Greet(prosp: Props) {
  const {name, times = 1 } = prosp;

  return (
    <>
      {[...Array(times)].map(() => (
        <p>Hello, {name}!</p>
      ))}
    </>
  );
}

export default Greet;
