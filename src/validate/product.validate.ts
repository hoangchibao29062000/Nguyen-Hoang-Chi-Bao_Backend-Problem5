import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import resultSend from "../config/result";

export async function fetchAllValidate(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        limit: Joi.number().min(1).max(100).required(),
        page: Joi.number().min(1).required(),
    });

    const { error } = schema.validate(req.query);
    if (error) {
        res.send(await resultSend.clientErrors(error.details[0].message));
    } else {
        next();
    }
}

export async function fetchActiveValidate(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        id: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        res.send(await resultSend.clientErrors(error.details[0].message));
    } else {
        next();
    }
}

export async function fetchSaveValidate(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        name_product: Joi.string().min(3).max(100).required(),
        id_platform: Joi.object().required(),
        id_unit: Joi.object().required(),
        id: Joi.string().allow(""),
        price_input: Joi.number().min(0),
        price_sell: Joi.number().min(0),
        percent_profit: Joi.number().min(0),
        profit: Joi.number().min(0),
        is_sale: Joi.boolean(),
        price_sale_list: Joi.number().min(0),
        profit_sale: Joi.number().min(0),
        percent_sale: Joi.number().min(0),
        is_voucher: Joi.boolean(),
        percent_voucher: Joi.number().min(0),
        price_voucher_list: Joi.number().min(0),
        profit_voucher: Joi.number().min(0),
        percent_costs_platform: Joi.number().min(0),
        costs_platform: Joi.number().min(0),
        percent_costs_payment: Joi.number().min(0),
        costs_payment: Joi.number().min(0),
        percent_costs_box: Joi.number().min(0),
        costs_box: Joi.number().min(0),
        percent_costs_operating: Joi.number().min(0),
        costs_operating: Joi.number().min(0),
        costs_tax: Joi.number().min(0),
        percent_costs_ads: Joi.number().min(0),
        costs_ads: Joi.number().min(0),
        percent_costs_affilate: Joi.number().min(0),
        costs_affilate: Joi.number().min(0),
        list_shipping: Joi.string(),
        total_costs: Joi.number().min(0),
        price_listing: Joi.number().min(0),
        percent_costs_tax: Joi.number().min(0),
        images: Joi.string().allow(""),
        quantity_imported: Joi.number().min(0),
        quantity_tock: Joi.number().min(0),
        description_product: Joi.string().allow(""),
        active: Joi.boolean(),
        create_at: Joi.date().allow(""),
        update_at: Joi.date().allow(""),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        res.send(await resultSend.clientErrors(error.details[0].message));
    } else {
        next();
    }
}