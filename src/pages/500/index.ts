import Error500Page from './500';
import render from '../../modules/render';

const page = new Error500Page({});
render('.app', page);
