import { AuthModule } from 'src/app/modules/auth';
import { HomeModule } from 'src/app/modules/home';
import { ProfileModule } from 'src/app/modules/profile';
import { SettingModule } from 'src/app/modules/setting';
import NotFoundPage from 'src/app/modules/home/not-found-page/NotFoundPage';

export const routes = [
    ...HomeModule,
    ...AuthModule,
    ...ProfileModule,
    ...SettingModule,
    { path: "/:id", component: NotFoundPage, exact: false, isPrivate: false, allowRoles: [] },
    { path: "*", component: NotFoundPage, exact: false, isPrivate: false, allowRoles: [] },
];
