init i:
	@echo "[Dependencies] Installing dependencies"
	@npm install

deploy d:
	@echo "[Firebase Hosting Deployment] Deploying Webpage"
	@firebase deploy --only hosting:production

run r:
	@echo "[Running] Running web app"
	@npm start