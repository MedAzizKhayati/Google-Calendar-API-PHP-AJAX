// Setting default date selector to today's date.
$('#event-date').val(new Date().toISOString().split("T")[0]);

// Fetching google calendar API
$('#google-calendar').click(() => {
	// getting the event date from the input.
	let eventDate = $('#event-date').val();
	// If user didn't choose event date, then prompt him to select one.
	if (eventDate == '') {
		$('#google-calendar-row').html(`
					<h4 style="color: red"> MAKE SURE TO SELECT A DATE, THEN SUBMIT!!</h4>
		`);
	} else {
		// using ajax to make a POST request to getEvents.php, with the date chosen by the user, as a parameter.
		$.ajax({
			url: 'libs/php/getEvents.php',
			type: 'POST',
			dataType: 'json',
			data: {
				date: new Date(eventDate).toISOString(),
			},
			success: result => {
				// console.log(result);
				// If it was successfull
				if (result.status.name == 'ok') {
					if (result.data.length == 0) {
						// Tell the user there is no events for this day.
						$('#google-calendar-row').html(`
							<h4 style="color: red"> There are no events for this day!!</h4>
						`);
					} else {
						// For each event, show its information.
						result.data.forEach(event => {
							$('#google-calendar-row').append(`
							<div class="card" >
							<div class="card-body">
							  		<h5 class="card-title">${event.summary}</h5>
									<h6 class="card-subtitle mb-2 text-muted">Created by: 
									 	${event.creator.displayName ? event.creator.displayName : event.creator.email}
									</h6>
									${event.description ? '<p class="card-text">' + event.description + '</p>' : ''
								}
									<p class="card-text" style="color: green"> Color ID:
									${event.colorID ? event.colorID : "Not set"
								}
									</p>
									<p class="card-text"> Start date:
									${event.start.dateTime ? new Date(event.start.dateTime) : new Date(event.start.date)
								}
									</p>
								</div>
							</div>
							`)
						});
					}
				}
			},
			// In case of any error, log the errors, also let the user, there has been an internal error and ask him to try again
			// later
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(jqXHR, textStatus, errorThrown);
				$('#google-calendar-row').html(`
					<h4 style="color: red"> THERE HAS BEEN AN INTERNAL ERROR, PLEASE TRY AGAIN LATER!!</h4>
				`);
			}
		})
	}
})