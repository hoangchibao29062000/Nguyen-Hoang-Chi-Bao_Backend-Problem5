import { Request } from 'express';
import { IUnit } from '../entity/unit.entity';
import returnService from '../helper/returnService.helper';
import { IReturnService } from '../entity/common.entity';
import { ConnectDatabase } from '../config/database';
import { Unit } from '../models/unit.model';

export async function fetchAllUnits(req: Request): Promise<IReturnService<IUnit[]>> {
  const units = await ConnectDatabase.getRepository(Unit)
    .createQueryBuilder("unit")
    .getManyAndCount();
  return returnService.success200("Thành công", units);
}