import { NextFunction, Request, Response } from 'express';
import { AuthService } from './authentication.service';

// User signup
const userSignup = async (req: Request, res: Response) => {
    try {
        // const { ...signupData } = req.body;
        const signupData = {
            name: 'Abdul Motin',
            email: 'motin.6@gmail.com',
            password: '12345'
        }
        const result = await AuthService.userSignupService(signupData);

        res.status(200).json({
          success: true,
          message: 'User created successfully!Thank you.',
          data: result,
        });
      } catch (err) {
        console.error(err);
      }
  
};

const userLogin = async (req: Request, res: Response) => {
    try {
        // const { email, password } = req.body;
        const email = 'motin@gmail.com';
        const password  = '12345';
        const result = await AuthService.userLoginService(email, password);

        res.status(200).json({
            success: true,
            message: 'User found!',
            data: result,
          });
    }catch (err) {
        console.error(err);
    }
}



export const LoginController = {
    userSignup,
    userLogin
};
