

export class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}

export const errorHandler = (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};


// Use in App.js -- > app.use(errorHandler);
// Send Controller or Service -- >
//  throw new AppError("Invalid credentials", 401);
//  throw new AppError("Access denied", 403);
//  throw new AppError("User not found", 404);
//  throw new AppError("Email already exists", 409);
//  throw new AppError("Validation failed", 422);
//  throw new AppError("Too many requests", 429);
//  throw new AppError("Something went wrong", 500);