# GitHub Push Fix - Remove node_modules from Repo

## Plan Steps:
- [x] Create Client/.gitignore and root .gitignore (dependencies ignored)
- [ ] Remove Client/node_modules from Git index: `git rm -r --cached Client/node_modules`
- [ ] Install git-filter-repo if needed: `pip install git-filter-repo`
- [ ] Rewrite history: `git filter-repo --path Client/node_modules/ --invert-paths`
- [ ] Commit changes: `git add . && git commit -m "Remove node_modules tracking and history"`
- [ ] Force push: `git push origin main --force-with-lease`
- [ ] Clean local node_modules: `rmdir /s /q Client\node_modules`
- [ ] Verify: `git ls-files | findstr node_modules` (should show none), then `npm install` in Client/

**Next step: Execute git rm -r --cached Client/node_modules**

