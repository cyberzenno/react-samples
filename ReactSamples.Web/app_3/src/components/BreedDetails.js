
function BreedDetails(props) {

	var breed = props.breed;
	var temperamentList = breed.temperament ? breed.temperament.split(",") : [];

	return <div className="ac_18082_1697 pos_18082_5225">
		<div className="ac_18082_6553 ac_18082_2337 pos_18082_5242">Breed Details</div>

		<div className="ac_18082_8881 pos_18082_5228">{breed.name}</div>
		<div className="ac_18082_3192 pos_18082_5231">{breed.origin}</div>
		<div className="ac_18082_9801 pos_18082_5233">
			{breed.description}
		</div>

		<div className="ac_18082_4266 pos_18082_5237">
			{temperamentList.length > 0 && temperamentList.map(x =>

				<div key={Math.random()} className="ac_18082_3908">{x.trim()}</div>

			)}

		</div>

		<div className="ac_18082_4608 pos_18082_3765" style={{ backgroundImage: "url('" + breed.image_url + "')" }}></div>

	</div>
}

export default BreedDetails