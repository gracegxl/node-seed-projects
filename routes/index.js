'use strict';

import list from './list'
import users from './users'
import postGoodsList from './list/postGoodsList'
import search from './search/'

module.exports = app => {
	// api地址
	app.use('/api/postGoodsList', postGoodsList);
	app.use('/api/search', search);
	// 路由地址
	app.use('/list', list);
	app.use('/users', users);
}