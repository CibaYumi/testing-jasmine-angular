import { suite, test, slow, timeout } from 'mocha-typescript';
import 'source-map-support/register';

@suite class Two {
  @test method() { }
}
