<?php
if (isset($_POST['submit'])) {
	/*
	Get form information
	*/

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$submit = $_POST['submit'];

	/*
	Variables needed to send email
	*/

	$from = 'Demo contact form';
	$to = 'raymondurrutia2@yahoo.com';
	$subject = 'Portfolio Site Message';
	$body = 'From: $name\n E-mail: $email\n Message: $message\n';

	/*
	Validate form
	*/

	// Check if name has been entered
	if (!$_POST['name']) {
		$errName = 'Please enter a name';
	}

	// Check if a valid email has been entered
	if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errEmail = 'Please enter a valid email';
	}

	// Check if a message has been entered
	if (!$_POST['message']) {
		$errMessage = 'Please enter a message';
	}

	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
	}

	if (!errName && !errEmail && !errMessage) {
		if (mail ($to, $subject, $body, $from)) {
			$result = '<div class="alert alert-success">Thanks for reaching out! I will be in touch soon.</div>';
		} else {
			$result = '<div class="alert alert-danger">Oops! There was an error sending your message. Try again or come back later.</div>';
		}
	}
}
?>