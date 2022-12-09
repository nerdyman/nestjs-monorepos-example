import { Injectable } from '@nestjs/common';

import { example } from '@this/example-lib';

@Injectable()
export class AppService {
  getHello(): string {
    return `${example()} Two!`;
  }
}
