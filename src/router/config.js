import Loadable from 'react-loadable'
import Loading from '../components/loading';

// 需要异步加载的组件
export const Correction = Loadable({
	loader: () => import('../pages/aftertreatment/correction'),
	loading: Loading,
});

export const Textsegmentation = Loadable({
	loader: () => import('../pages/aftertreatment/textsegmentation'),
	loading: Loading,
});

export const Punctuationpred = Loadable({
	loader: () => import('../pages/aftertreatment/punctuationpred'),
	loading: Loading,
});

export const LogManage = Loadable({
	loader: () => import('../pages/autotraining/logManage'),
	loading: Loading,
});

export const Env = Loadable({
	loader: () => import('../pages/autotraining/env'),
	loading: Loading,
});

export const AudioModel = Loadable({
	loader: () => import('../pages/autotraining/audioModel'),
	loading: Loading,
});

export const Login = Loadable({
	loader: () => import('../pages/login'),
	loading: Loading,
});

export const Register = Loadable({
	loader: () => import('../pages/register'),
	loading: Loading,
});

// 404
export const NoMatch = Loadable({
	loader: () => import('../pages/errors/page404'),
	loading: Loading,
});

// 500
export const ServerError = Loadable({
	loader: () => import('../pages/errors/page500'),
	loading: Loading,
});

