import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  serviceStatus(): string {
    return 'Service Operational!';
  }
}
