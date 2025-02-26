import { IProduct } from '../entity/product.entity';
import { Request } from 'express';
import returnService from '../helper/returnService.helper';
import { IReturnService } from '../entity/common.entity';
import { ConnectDatabase } from '../config/database';
import { Product } from '../models/product.model';
import { v4 as uuidv4 } from 'uuid';
import { Platform } from '../models/platform.model';
import { Unit } from '../models/unit.model';

export async function fetchAllProducts(req: Request | any): Promise<IReturnService<IProduct[]>> {
  const products = await ConnectDatabase.getRepository(Product)
    .createQueryBuilder("product")
    .leftJoinAndSelect('product.id_platform', 'platform')
    .leftJoinAndSelect('product.id_unit', 'unit')
    .where("product.active = :active", { active: 1 })
    .getManyAndCount();
  return returnService.success200("Thành công", products);
}

export async function fetchSaveProduct(req: Request): Promise<IReturnService<IProduct>> {
  const { id, ...data }: Product = req.body;

  const productRepository = await ConnectDatabase.getRepository(Product);
  let product: Product | any;
  const newData = { id: uuidv4(), ...data };

  const getPlatform = await ConnectDatabase.getRepository(Platform)
    .createQueryBuilder("platform")
    .whereInIds(data.id_platform.id).getOne();
  if (!getPlatform) {
    return returnService.clientErrors("Nền tảng không tồn tại!!");
  }

  const getUnit = await ConnectDatabase.getRepository(Unit)
    .createQueryBuilder("unit")
    .whereInIds(data.id_unit.id).getOne();
  if (!getUnit) {
    return returnService.clientErrors("Đơn vị không tồn tại!!");
  }

  if (id && id !== "") {
    // Tìm sản phẩm theo ID
    product = await productRepository.createQueryBuilder().whereInIds(id).getOne();
    if (!product) {
      return returnService.clientErrors("Không tìm thấy sản phẩm!!");
    }
    Object.assign(product, data); // Cập nhật dữ liệu
  } else {
    // Nếu không có ID, tạo sản phẩm mới
    product = productRepository.create(newData);
  }
  await productRepository.save(product);
  return returnService.success200("Lưu thành công", product);
}

export async function fetchDeleteProduct(req: Request): Promise<IReturnService<IProduct>> {
  const { id } = req.body;
  console.log(req.body, "Dsadadasd")
  const updateProduct = await ConnectDatabase
    .getRepository(Product)
    .createQueryBuilder()
    .whereInIds(id).getOne();

  if (!updateProduct) {
    return returnService.clientErrors("Không tìm thấy sản phẩm");
  }

  updateProduct.active = !updateProduct.active;
  await await ConnectDatabase.getRepository(Product).save(updateProduct);
  return returnService.success200("Cập nhật thành công");
}