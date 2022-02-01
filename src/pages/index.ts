import { Router, Route } from "../modules/router";
import SigninPage from "./signin/signin";
import SignupPage from "./signup/signup";
import ChatPage from "./chat/chat";
import Error404Page from "./404/404";
import Error500Page from "./500/500";
import ProfileMainPage from "./profile/profile-main/profile-main";
import ProfileChangeDataPage from "./profile/profile-change-data/profile-change-data";
import ProfileChangePasswordPage from "./profile/profile-change-password/profile-change-password";

const router = new Router('.app');
router
    .use('/', SigninPage)
    .use('/sign-up', SignupPage)
    .use('/messenger', ChatPage)
    .use('/404', Error404Page)
    .use('/500', Error500Page)
    .use('/settings', ProfileMainPage)
    .use('/settings/change/data', ProfileChangeDataPage)
    .use('/settings/change/password', ProfileChangePasswordPage)
    .start();