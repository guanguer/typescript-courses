import { isTypedArray } from '.';

function numberGuard(toTest: unknown): toTest is number {
  return typeof toTest === 'number';
}

isTypedArray([], numberGuard); // $ExpectType boolean
