export interface IProduct {
    name_product: string;
}

export interface IPublicRoutes {
    path: string;
    component: React.FC;
    layout?: boolean;
}

export interface IPrivateRoutes {
    path: string;
    component: React.FC;
    layout?: boolean;
}
