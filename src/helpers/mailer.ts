import User from '@/models/userModels';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {

        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        // configure mail for usage        
        if (emailType === "VERIFY") {
            const updateUser = await User.findByIdAndUpdate(userId,{
                $set:{
                    verifyToken: hashedToken, 
                    verifyTokenExpiry: Date.now() + 3600000
                }
            })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,{
                $set:{
                    forgotPasswordToken: hashedToken, 
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                }
            })
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "4f6cb954a7f38d",
                pass: "938f88b51b9d17"
            }
        });

        const mailOptions = {
            from: "bharat@g.negi",
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href=${process.env.DOMAIN}/verifyemail?token=${hashedToken}>here</a> to  ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste the link below in your browser. <br/> ${process.env.DOMAIN}/verifyemail?token=${hashedToken} </p>`
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse

    } catch (error: any) {
        throw new Error(error.message);
    }
}