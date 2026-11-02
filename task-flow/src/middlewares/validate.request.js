import { response } from 'express';
import { validationResult } from 'express-validator';

export const validateRequest = (req, res = response, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ mensaje: 'Datos invalidos', errores: errores.array() });
  }
  next();
};