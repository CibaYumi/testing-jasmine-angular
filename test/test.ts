// Reference mocha-typescript's global definitions:
// tslint:disable-next-line: no-reference
/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />
import { suite, test, slow, timeout } from 'mocha-typescript';

@suite(timeout(3000), slow(1000))
class Hello {
  @test world() {
  }
}
