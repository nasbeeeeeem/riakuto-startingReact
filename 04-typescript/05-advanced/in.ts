const obj = {a: 1, b: 2, c: 3};
console.log('a' in obj)
for (const key in obj) { console.log(key)}

type Fig = 'one' | 'two' | 'three';
type FigMap = { [key in Fig]?: number};

const figmap: FigMap = {
  one: 1,
  two: 2,
  three: 3,
};
// figmap.four = 4;　コンパイルエラー
