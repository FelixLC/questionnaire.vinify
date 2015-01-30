deploy:
	grunt bump
	grunt compile
	s3cmd sync -M --add-header=Cache-Control:max-age=0 bin/index.html s3://start.vinify.co
	s3cmd sync -M bin/assets s3://start.vinify.co

grunt:
	grunt watch

grunt-dev:
	grunt --dev

git:
	git add -A
	git commit -m "$m"
	git push origin master

gzip:
	grunt bump
	grunt compile
	grunt compress
	s3cmd sync --no-preserve --add-header=Cache-Control:max-age=0 --mime-type="text/html; charset=utf-8" \
		bin/index.html s3://gzip-test-vinify && \
	s3cmd sync --no-preserve dist/assets s3://gzip-test-vinify --acl-public --add-header \
	  "Content-Encoding:gzip" --mime-type="application/javascript; charset=utf-8" \
	   --exclude '*' --include '*.js' && \
	s3cmd sync --no-preserve dist/assets s3://gzip-test-vinify --acl-public --add-header \
	  "Content-Encoding:gzip" --mime-type="text/css; charset=utf-8" \
	   --exclude '*' --include '*.css' && \
	s3cmd sync -M --no-preserve bin/assets s3://gzip-test-vinify --acl-public --exclude '*.js' --exclude '*.css'

gzipjs:
	grunt bump
	grunt compile
	grunt compress
	s3cmd sync --no-preserve --add-header=Cache-Control:max-age=0 --mime-type="text/html; charset=utf-8" \
		bin/index.html s3://start.vinify.co && \
	s3cmd sync --no-preserve dist/assets s3://start.vinify.co --acl-public --add-header \
	  "Content-Encoding:gzip" --mime-type="application/javascript; charset=utf-8" \
	   --exclude '*' --include '*.js' && \
	s3cmd sync -M --no-preserve bin/assets s3://start.vinify.co --acl-public --exclude '*.js'

test:
	s3cmd -m "text/css; charset=utf-8" sync dist/assets s3://start.vinify.co --acl-public --add-header \
	"Content-Encoding:gzip" --exclude '*' --include 'Vinify-0.0.185.css'


html5Mode:
	grunt bump
	grunt compile
	grunt compress
	s3cmd sync --no-preserve --add-header=Cache-Control:max-age=0 --mime-type="text/html; charset=utf-8" \
		bin/index.html s3://html5test.vinify.co && \
	s3cmd sync --no-preserve dist/assets s3://html5test.vinify.co --acl-public --add-header \
	  "Content-Encoding:gzip" --mime-type="application/javascript; charset=utf-8" \
	   --exclude '*' --include '*.js' && \
	s3cmd sync --no-preserve dist/assets s3://html5test.vinify.co --acl-public --add-header \
	  "Content-Encoding:gzip" --mime-type="text/css; charset=utf-8" \
	   --exclude '*' --include '*.css' && \
	s3cmd sync -M --no-preserve bin/assets s3://html5test.vinify.co --acl-public --exclude '*.js' --exclude '*.css'