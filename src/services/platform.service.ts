import { Request } from 'express';
import { IPlatform } from '../entity/platform.entity';
import returnService from '../helper/returnService.helper';
import { IReturnService } from '../entity/common.entity';
import { ConnectDatabase } from '../config/database';
import { Platform } from '../models/platform.model';

export async function fetchAllPlatforms(req: Request): Promise<IReturnService<IPlatform[]>> {
  const platforms = await ConnectDatabase.getRepository(Platform)
    .createQueryBuilder("platform")
    .getManyAndCount();
  return returnService.success200("Thành công", platforms);
}