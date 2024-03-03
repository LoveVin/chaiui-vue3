rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@gitee.com:lovevin/chaiui-vue3-website.git &&
git push -f -u origin main &&
cd -