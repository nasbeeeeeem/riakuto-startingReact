interface Color {
  readonly rgb: string;
  opacity: number;
  alias?: string;
}

const tq: Color = { rgb: '00afcc', opacity: 1 };
tq.alias = 'turquoise';
