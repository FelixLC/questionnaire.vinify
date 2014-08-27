deploy:
	grunt bump
	grunt compile
	s3cmd sync bin/. s3://vinify-questionnaire
grunt:
	grunt watch

grunt-dev:
	grunt --dev

git:
	git add -A
	git commit -m "$m"
	git push origin master