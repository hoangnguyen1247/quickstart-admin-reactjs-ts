import { AuthModule } from 'src/app/modules/auth';
import { HomeModule } from 'src/app/modules/home';
import { SettingProfileModule } from 'src/app/modules/setting-profile';
import { SettingModule } from 'src/app/modules/setting-general';
import NotFoundPage from 'src/app/modules/home/not-found/NotFoundPage';

export const routes = [
    ...HomeModule,
    ...AuthModule,
    ...SettingProfileModule,
    ...SettingModule,
    { path: "/:id", component: NotFoundPage, exact: false, isPrivate: false, allowRoles: [] },
    { path: "*", component: NotFoundPage, exact: false, isPrivate: false, allowRoles: [] },
];
