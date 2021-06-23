
async function getAge() {
	const currentUser = await getUser();
	const userProfile = await getUserProfile(currentUser.id);
	return userProfile.age;
}
