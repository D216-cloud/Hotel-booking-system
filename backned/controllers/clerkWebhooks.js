import User from "../models/User.js";
import pkg from 'svix';
const { Webhooks } = pkg;

const clerkwebhooks = async (req, res) => {
    try {
        console.log('Webhook received:', req.body.type);
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
        const webhook = new Webhooks(webhookSecret);

        // Get the headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        // Verify the webhook
        const payload = JSON.stringify(req.body);
        await webhook.verify(payload, headers);

        const { type, data } = req.body;
        console.log('Webhook type:', type);
        console.log('Webhook data:', JSON.stringify(data));

        const userData = {
            _id: data.id,
            email: data.email_addresses?.[0]?.email_address || '',
            username: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
            password: 'clerk-managed', // Since Clerk handles authentication
            role: 'user'
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
