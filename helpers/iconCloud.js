const getCloudIcon = (weatherId) => {
	if (!weatherId) {
		throw new Error('No weather ID, cloudIcon');
	}
	const id = Math.floor(weatherId/100);

	if (weatherId == 800) return 'âī¸';
	switch (id) {
		case 2: return 'đŠī¸';
		case 3: return 'đ§';
		case 5: return 'đĻ';
		case 6:	return 'đ¨ī¸';
		case 7: return 'đĢ';
		case 8: return 'đĨ';
	}
};

export { getCloudIcon };