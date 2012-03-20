run:
	@echo 'Running @ http://localhost:8000'
	@python -m SimpleHTTPServer 8000 > /dev/null

.PHONY: run