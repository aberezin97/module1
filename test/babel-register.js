const register = require('@babel/register').default;
const registerStyles = require('ignore-styles').default;


register({ extensions: ['.ts', '.tsx', '.js', '.jsx'] });
registerStyles(['.sass', '.scss']);