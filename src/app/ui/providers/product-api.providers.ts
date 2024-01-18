import {Provider} from "@angular/core";
import {ProductApiService} from "../../models/products/infraestructure/product-api.service";

export const PRODUCT_API_PROVIDER : Provider = {provide: 'IProductApiService', useClass: ProductApiService}
