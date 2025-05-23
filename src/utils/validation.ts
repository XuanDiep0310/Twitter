import express from 'express'
import { validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import HTTP_STATUS from '~/constants/httpStatus'
import { EntityError, ErrorWithStatus } from '~/models/Errors'

// can be reused by many routes
export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await validation.run(req)
    const errors = validationResult(req)
    // Nếu không có lỗi thì next
    if (errors.isEmpty()) {
      return next()
    }
    const errorsObj = errors.mapped()
    const entityError = new EntityError({ errors: {} })
    for (const key in errorsObj) {
      const { msg } = errorsObj[key]
      // Trả về lỗi không phải là lỗi do validation
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        return next(msg)
      }
      entityError.errors[key] = errorsObj[key]
    }
    next(entityError)
  }
}
