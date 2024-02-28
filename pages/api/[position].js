import positionmodel from '../../Models/position';

export default async function handler(req, res) {
    const { slug } = req.query; // Get the slug from the URL query parameters
    console.log(req.query.position);

    try {
        const news = await positionmodel.findOne({ _id: req.query.position });
        res.status(200).json({ success: true, data: news });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
