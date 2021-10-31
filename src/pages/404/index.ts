import Error404Page from './404';
import render from '../../modules/render';

const page = new Error404Page({});
render('.app', page);
