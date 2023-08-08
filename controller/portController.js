const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

//transport
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const emailForm = (req,res)=>{
    try {
        const { name, email, msg } = req.body;

        //validation
        if (!name || !email || !msg) {
          return res.status(500).send({
            success: false,
            message: "Please Provide All Fields",
          });
        }
        //email matter
        transporter.sendMail({
          to: "shubhammohite801@gmail.com.com",
          from: "shubhammohite801@gmail.com.com",
          subject: "Regarding Portfolio ",
          html: `
            <h5>Detail Information</h5>
            <ul>
              <li><p>Name : ${name}</p></li>
              <li><p>Email : ${email}</p></li>
              <li><p>Message : ${msg}</p></li>
            </ul>
          `,
        });
        return res.status(200).send("Your message send succesfully")
    } catch (error) {
        res.status(500).send({status:false , message: "Your message send succesfully" })
    }
}
module.exports = {emailForm}