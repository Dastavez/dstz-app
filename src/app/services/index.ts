import { DbService } from "@services/data/db.service";
import { ApiService } from "@services/data/api.service";
import { AuthService } from "@services/data/auth.service";
import { StoreService } from "@services/data/store.service";

import { ErrorService } from "@services/integration/error.service";

import { ToastService } from "@services/layout/toast.service";

import { UtilService } from "@services/util/util.service";
import { ImageService } from "@services/util/image.service";
import { RouterService } from "@services/util/router.service";
import { PlatformService } from "@services/util/platform.service";
import { InitializeService } from "@services/util/initialize.service";

export const providers = [
    DbService,
    ApiService,
    AuthService,
    StoreService,

    ErrorService,

    ToastService,

    UtilService,
    ImageService,
    RouterService,
    PlatformService,

    InitializeService,
];
