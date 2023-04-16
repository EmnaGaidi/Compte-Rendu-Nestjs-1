import { Global, Module } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

// eslint-disable-next-line prettier/prettier
const uuidProvider = {
  useValue: uuid,
  provide: 'UUID',
};
@Global()
@Module({
  providers: [uuidProvider],
  exports: [uuidProvider],
})
export class CommonModuleModule {}
