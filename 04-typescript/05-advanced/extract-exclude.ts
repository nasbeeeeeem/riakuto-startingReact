type Perm = 'r' | 'w' | 'x';

type RW1 = Extract<Perm, 'r' | 'w'>;
type RW2 = Exclude<Perm, 'x'>;
