import User from "../models/User.js";
import pkg from 'svix';
const { Webhooks } = pkg;

const clerkwebhooks = async (req, res) => {
    try {
        const whook = new Webhooks(process.env.CLERK_WEBHOOK_SECRET);

        //Getting Headers
        const headers = {
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers["svix-timestamp"],
            "svix-signature" : req.headers["svix-signature"]
        };

        //verify headers

        await whooks.verify(json.stringify(req.body), headers)

        const { type, data } = req.body

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_addresses,
            username: data.first_nmae  + " " + data.last_name,
            image: data.image_url,
        }

        // Switch Cases fpr diffrents Events
        switch (type) {
            case "user.created":{
                await User.create(userData)
                break;
            }
            case "user.deleted": {
                await User.findByIdAndDelete(data.id)
                break;
            }
            case "user.updated": {
                await User.findByIdAndUpdate(data.id, userData)
                break;
            }
        
            default:
                break;
        }

        res.json({ message: "Webhook handled successfully" });

       
        
    } catch (error) {
        console.error("Error handling webhook:", error);
        res.status(500).json({ error: "Internal Server Error" });
        }
    }
    export default clerkwebhooks;
