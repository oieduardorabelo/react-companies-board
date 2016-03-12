WBP_PATH = --content-base ./
WBP_ENTRY = main.js

include node_modules/react-fatigue-webpack/Makefile

lint:
	@echo "  $(P) linting..."
	@$(BIN_DIR)/eslint ./**/*.js
