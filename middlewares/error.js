import ErrorHandler from "../models/errorHandler.js"; // Adjust path if needed

export const errorMiddleware = (err, req, res, next) => {
  // Set default error message and status code
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Handle Mongoose CastError
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Handle Mongoose ValidationError
  if (err.name === 'ValidationError') {
    const validationErrors = Object.values(err.errors).map(error => error.message);
    err = new ErrorHandler(validationErrors.join(', '), 400);
  }

  // Send error response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;


