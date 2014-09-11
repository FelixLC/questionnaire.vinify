deploy:
	grunt bump
	grunt compile
	s3cmd sync --add-header=Cache-Control:max-age=0 bin/index.html s3://start.vinify.co
	s3cmd sync bin/assets s3://start.vinify.co
grunt:
	grunt watch

grunt-dev:
	grunt --dev

git:
	git add -A
	git commit -m "$m"
	git push origin master