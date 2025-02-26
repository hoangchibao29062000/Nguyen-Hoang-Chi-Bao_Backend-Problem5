import { Request } from 'express';
import returnService from '../helper/returnService.helper';
import { IReturnService } from '../entity/common.entity';
import { IConfig } from '../entity/config.entity';
import { ConnectDatabase } from '../config/database';
import { Config } from '../models/config.model';

export async function fetchAllConfig(req: Request): Promise<IReturnService<IConfig[]>> {
  const configs = await ConnectDatabase.getRepository(Config)
    .createQueryBuilder("config")
    .getManyAndCount();
  return returnService.success200("Thành công", configs);
}