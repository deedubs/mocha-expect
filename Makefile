run:
	@echo 'Running @ http://localhost:8000'
	@python -m SimpleHTTPServer 8000

guard:
	@bundle install > /dev/null
	@bundle exec guard


.PHONY: run guard