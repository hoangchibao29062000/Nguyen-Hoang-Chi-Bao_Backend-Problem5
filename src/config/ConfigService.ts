import { Config } from "../models/config.model";
import { ConnectDatabase } from "./database";

export class ConfigService {
    private static instance: ConfigService;
    private configMap: Map<string, object> = new Map();

    private constructor() { }

    // Singleton instance để chỉ load config 1 lần
    public static async getInstance(): Promise<ConfigService> {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
            await ConfigService.instance.loadConfigFromDB();
        }
        return ConfigService.instance;
    }

    // Hàm lấy config từ DB
    private async loadConfigFromDB() {
        const configRepo = await ConnectDatabase.getRepository(Config);
        const configList = await configRepo.find();
        // Lưu vào Map để truy cập nhanh
        this.configMap.clear();
        configList.forEach(config => {
            this.configMap.set(config.key_config, {
                name: config.name_config,
                key: config.key_config,
                value: config.value_config
            });
        });

        console.log("Config loaded:", this.configMap);
    }

    // Lấy giá trị config theo key
    public getConfig(key: string): object | undefined {
        return this.configMap.get(key);
    }

    // Hàm reload nếu cần cập nhật lại config mà không restart server
    public async reloadConfig() {
        await this.loadConfigFromDB();
        console.log("Config reloaded successfully.");
    }
}
