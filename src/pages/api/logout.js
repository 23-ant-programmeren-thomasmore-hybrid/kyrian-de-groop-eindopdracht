export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            res.status(200).json({ message: 'Logout successful' });
        }
        catch (error) {
            console.error('Error logging out:', error);
            res.status(500).json({ error: 'Error logging out' });
        }
    }
    else {
        res.status(405).json({ error: 'Method Not Allowed' });
        console.error('Method Not Allowed');
    }
}