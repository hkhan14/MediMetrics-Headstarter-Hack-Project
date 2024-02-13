const Hospital = require('./models/Hospital');

const fetchAllHospitals = async () => {
    try {
        const hospitals = await Hospital.find({});
        return hospitals;
    } catch (error) {
        console.error("Error fetching hospitals:", error);
        return [];
    }
};

module.exports = {
    fetchAllHospitals,
};
