import { Request } from 'express';
import { IShipping } from '../entity/shipping.entity';
import returnService from '../helper/returnService.helper';
import { IReturnService } from '../entity/common.entity';
import { ConnectDatabase } from '../config/database';
import { Shipping } from '../models/shipping.model';

export async function fetchAllshippings(req: Request): Promise<IReturnService<IShipping[]>> {
  const shippings = await ConnectDatabase.getRepository(Shipping)
    .createQueryBuilder("shipping")
    .getManyAndCount();
  return returnService.success200("Thành công", shippings);
}