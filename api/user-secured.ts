import { NextFunction, Request, Response } from 'express'
import { UNAUTHORIZED } from 'http-status-codes'

export default (_: Request, res: Response, next: NextFunction) => {
	if (!res.locals.user) {
		res.status(UNAUTHORIZED).end()
		return
	}
	next()
}
