import createIteratorPar from './createIteratorPar.mjs';

describe('createIteratorPar', () => {
  it('retorna pares até 6', () => {
    expect([...createIteratorPar(6)]).toEqual([0, 2, 4, 6]);
  });

  it('retorna somente 0 quando limite é 0', () => {
    expect([...createIteratorPar(0)]).toEqual([0]);
  });

  it('retorna vazio se limite for negativo', () => {
    expect([...createIteratorPar(-1)]).toEqual([]);
  });

  it('retorna pares até 7 (ímpar)', () => {
    expect([...createIteratorPar(7)]).toEqual([0, 2, 4, 6]);
  });
});
